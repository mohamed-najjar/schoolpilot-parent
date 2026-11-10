"use client";
import { useState } from "react";
import { Stack, TextField, Button, Typography } from "@mui/material";
import MainCard from "@/components/MainCard";
import {
  ChildGate,
  AcademicGate,
  Title,
  Paged,
  DateText,
  useLabel,
  today,
  dayOffset,
} from "./shared";
import type { Schema } from "./Context";
import { Status } from "@/components/States";
import { useT } from "@/components/Providers";
export default function Timetable() {
  return (
    <>
      <Title id="timetable" />
      <ChildGate>
        {(ctx, school) => (
          <AcademicGate context={ctx}>
            <Calendar school={school} child={ctx.child.id} />
          </AcademicGate>
        )}
      </ChildGate>
    </>
  );
}
function Calendar({ school, child }: { school: string; child: string }) {
  const [range, setRange] = useState({ from: today(), to: dayOffset(7) }),
    t = useT(),
    label = useLabel();
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
          type="date"
          name="from"
          label={t("startsOn")}
          defaultValue={range.from}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          required
          type="date"
          name="to"
          label={t("endsOn")}
          defaultValue={range.to}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <Button type="submit">{t("apply")}</Button>
      </Stack>
      <Paged<Schema["Lesson"]>
        school={school}
        path={`lessons?student_id=${child}&starts_on=${range.from}&ends_on=${range.to}`}
      >
        {(lessons) => (
          <Stack spacing={2}>
            {lessons.map((l) => (
              <MainCard
                key={l.id}
                title={label(l.subject_name_en, l.subject_name_ar)}
              >
                <Stack spacing={1}>
                  <Typography>
                    <DateText value={l.starts_at} time /> —{" "}
                    <DateText value={l.ends_at} time />
                  </Typography>
                  <Typography>
                    {label(l.staff_name_en, l.staff_name_ar)} ·{" "}
                    <bdi>
                      {l.section_code} · {l.room_code}
                    </bdi>
                  </Typography>
                  <Status value={l.status} />
                </Stack>
              </MainCard>
            ))}
          </Stack>
        )}
      </Paged>
    </Stack>
  );
}
