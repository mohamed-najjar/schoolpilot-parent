"use client";
import { useState } from "react";
import { Stack, Typography, Button, TextField, Chip } from "@mui/material";
import {
  ChildGate,
  AcademicGate,
  Title,
  DateText,
  Paged,
  dayOffset,
  today,
} from "./shared";
import type { Schema } from "./Context";
import MainCard from "@/components/MainCard";
import { useT, usePreferences } from "@/components/Providers";
import { Status, ErrorState, Loading } from "@/components/States";
import { useResource } from "@/lib/api/client";
export default function Attendance() {
  return (
    <>
      <Title id="attendance" />
      <ChildGate>
        {(context, school) => (
          <AcademicGate context={context}>
            <History school={school} child={context.child.id} />
          </AcademicGate>
        )}
      </ChildGate>
    </>
  );
}
function History({ school, child }: { school: string; child: string }) {
  const t = useT();
  const { locale } = usePreferences();
  const [range, setRange] = useState({ from: dayOffset(-30), to: today() });
  return (
    <Stack spacing={2}>
      <Stack
        component="form"
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        onSubmit={(e) => {
          e.preventDefault();
          const f = new FormData(e.currentTarget);
          setRange({ from: String(f.get("from")), to: String(f.get("to")) });
        }}
      >
        <TextField
          required
          name="from"
          type="date"
          label={t("startsOn")}
          defaultValue={range.from}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          required
          name="to"
          type="date"
          label={t("endsOn")}
          defaultValue={range.to}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <Button type="submit" variant="outlined">
          {t("apply")}
        </Button>
      </Stack>
      <Paged<Schema["StudentAttendance"]>
        school={school}
        path={`students/${child}/attendance?starts_on=${range.from}&ends_on=${range.to}`}
      >
        {(items) => (
          <Stack spacing={2}>
            <MainCard title={t("attendanceSummary")}>
              <Typography variant="body2" color="text.secondary">
                {t("summaryScope")}
              </Typography>
              {(["day", "lesson"] as const).map((kind) => (
                <Stack
                  key={kind}
                  direction="row"
                  useFlexGap
                  flexWrap="wrap"
                  gap={1}
                  sx={{ mt: 1 }}
                >
                  <Typography>{t(kind)}</Typography>
                  {(["present", "absent", "late", "excused"] as const).map(
                    (status) => (
                      <Chip
                        key={status}
                        variant="outlined"
                        label={
                          t(status) +
                          ": " +
                          new Intl.NumberFormat(
                            locale === "ar" ? "ar-AE" : "en-AE",
                          ).format(
                            items.filter(
                              (i) => i.kind === kind && i.status === status,
                            ).length,
                          )
                        }
                      />
                    ),
                  )}
                </Stack>
              ))}
            </MainCard>
            {items.map((row) => (
              <Record key={row.id} row={row} school={school} />
            ))}
          </Stack>
        )}
      </Paged>
    </Stack>
  );
}
function Record({
  row,
  school,
}: {
  row: Schema["StudentAttendance"];
  school: string;
}) {
  const t = useT(),
    { locale } = usePreferences(),
    [open, setOpen] = useState(false);
  const [after, setAfter] = useState(0),
    [reportAfter, setReportAfter] = useState("");
  const history = useResource<Schema["AttendanceHistory"]>(
    school,
    open
      ? `attendance-records/${row.id}/history?limit=100&after_version=${after}${reportAfter ? "&report_after=" + reportAfter : ""}`
      : null,
  );
  return (
    <MainCard>
      <Stack spacing={1}>
        <Typography fontWeight={600}>
          <DateText value={row.local_date} /> · {t(row.kind)}
        </Typography>
        <Typography>
          <Status value={row.status} />
          {row.minutes_late > 0
            ? " · " +
              t("minutesLate") +
              ": " +
              new Intl.NumberFormat(locale === "ar" ? "ar-AE" : "en-AE").format(
                row.minutes_late,
              )
            : ""}
        </Typography>
        <Button onClick={() => setOpen(!open)} aria-expanded={open}>
          {t("history")}
        </Button>
        {open ? (
          history.error ? (
            <ErrorState error={history.error} />
          ) : !history.data ? (
            <Loading />
          ) : (
            <Stack spacing={1}>
              {history.data.history.map((h) => (
                <Typography variant="body2" key={h.id}>
                  <DateText value={h.created_at} time /> ·{" "}
                  <Status value={h.from_status} /> →{" "}
                  <Status value={h.to_status} />
                </Typography>
              ))}
              {history.data.next_version ? (
                <Button
                  aria-label={t("history") + " · " + t("loadMore")}
                  onClick={() => setAfter(history.data!.next_version)}
                >
                  {t("loadMore")}
                </Button>
              ) : null}
              {history.data.absence_reports_next_cursor ? (
                <Button
                  aria-label={t("explanations") + " · " + t("loadMore")}
                  onClick={() =>
                    setReportAfter(history.data!.absence_reports_next_cursor)
                  }
                >
                  {t("loadMore")}
                </Button>
              ) : null}
              {history.data.absence_reports.map((r) => (
                <Stack key={r.id}>
                  <Typography>
                    {t("explanations")}: <bdi dir="auto">{r.explanation}</bdi>
                  </Typography>
                  <Status value={r.status} />
                </Stack>
              ))}
            </Stack>
          )
        ) : null}
      </Stack>
    </MainCard>
  );
}
