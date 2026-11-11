"use client";
import { useRef, useState } from "react";
import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import MainCard from "@/components/MainCard";
import { Status } from "@/components/States";
import { useT } from "@/components/Providers";
import type { Schema } from "./Context";
import { DateText, MutationState, Paged, today, useWrite } from "./shared";

export function validAbsenceDates(from: string, to: string) {
  const parse = (value: string) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return NaN;
    const ms = Date.parse(value + "T12:00:00Z");
    return Number.isFinite(ms) &&
      new Date(ms).toISOString().slice(0, 10) === value
      ? ms
      : NaN;
  };
  const difference = parse(to) - parse(from);
  return (
    Number.isFinite(difference) &&
    difference >= 0 &&
    difference <= 30 * 86400000
  );
}
export default function AbsenceReports({
  school,
  child,
  allowed,
}: {
  school: string;
  child: string;
  allowed: boolean;
}) {
  const t = useT(),
    state = useWrite(school),
    held = useRef(false);
  const [from, setFrom] = useState(today),
    [to, setTo] = useState(today),
    [explanation, setExplanation] = useState(""),
    [invalid, setInvalid] = useState(false),
    [revision, setRevision] = useState(0);
  const [saved, setSaved] = useState<Schema["AbsenceReport"]>();
  if (!allowed)
    return <Alert severity="info">{t("absenceReportingUnavailable")}</Alert>;
  return (
    <MainCard title={t("reportAbsence")}>
      <Stack spacing={2}>
        <Alert severity="info">{t("absenceReportHelp")}</Alert>
        <Stack
          component="form"
          spacing={2}
          onSubmit={async (e) => {
            e.preventDefault();
            if (held.current) return;
            if (
              !validAbsenceDates(from, to) ||
              !explanation.trim() ||
              Array.from(explanation.trim()).length > 2000
            ) {
              setInvalid(true);
              return;
            }
            held.current = true;
            setInvalid(false);
            setSaved(undefined);
            try {
              const input: Schema["AbsenceReportInput"] = {
                student_id: child,
                starts_on: from,
                ends_on: to,
                explanation: explanation.trim(),
              };
              const result = await state.run<Schema["AbsenceReport"]>(
                "absence-reports",
                input,
              );
              if (result) {
                setSaved(result);
                setExplanation("");
                setRevision((v) => v + 1);
              }
            } finally {
              held.current = false;
            }
          }}
        >
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              required
              fullWidth
              type="date"
              label={t("startsOn")}
              value={from}
              disabled={state.busy}
              slotProps={{ inputLabel: { shrink: true } }}
              onChange={(e) => setFrom(e.target.value)}
            />
            <TextField
              required
              fullWidth
              type="date"
              label={t("endsOn")}
              value={to}
              disabled={state.busy}
              slotProps={{ inputLabel: { shrink: true } }}
              onChange={(e) => setTo(e.target.value)}
            />
          </Stack>
          <TextField
            required
            multiline
            minRows={3}
            label={t("absenceExplanation")}
            value={explanation}
            disabled={state.busy}
            onChange={(e) => setExplanation(e.target.value)}
            slotProps={{ htmlInput: { maxLength: 4000, dir: "auto" } }}
          />
          {invalid ? (
            <Alert severity="error">{t("invalidAbsenceReport")}</Alert>
          ) : null}
          <Button
            type="submit"
            variant="contained"
            disabled={state.busy || !explanation.trim()}
          >
            {t("submitAbsenceReport")}
          </Button>
          <MutationState state={state} />
        </Stack>
        {saved ? (
          <Alert severity="success">
            {t("absenceReportSubmitted")} · <Status value={saved.status} />
          </Alert>
        ) : null}
        <Typography component="h2" variant="h6">
          {t("childAbsenceReports")}
        </Typography>
        <Paged<Schema["AbsenceReport"]>
          key={revision}
          fresh={revision}
          school={school}
          path={"absence-reports?student_id=" + child}
        >
          {(items) => (
            <Stack spacing={2}>
              {items.map((row) => (
                <Stack
                  key={row.id}
                  spacing={1}
                  sx={{
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 1,
                    p: 2,
                  }}
                >
                  <Typography>
                    <DateText value={row.starts_on} /> —{" "}
                    <DateText value={row.ends_on} />
                  </Typography>
                  <Status value={row.status} />
                  <Typography
                    sx={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}
                    dir="auto"
                  >
                    {row.explanation}
                  </Typography>
                  {row.review_note ? (
                    <Typography dir="auto">
                      {t("absenceReviewNote")}: {row.review_note}
                    </Typography>
                  ) : null}
                </Stack>
              ))}
            </Stack>
          )}
        </Paged>
      </Stack>
    </MainCard>
  );
}
