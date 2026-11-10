"use client";
import { useState } from "react";
import { Box, Stack, Typography, Alert, Button } from "@mui/material";
import MainCard from "@/components/MainCard";
import {
  ChildGate,
  AcademicGate,
  Title,
  Paged,
  Choice,
  DateText,
  useLabel,
} from "./shared";
import { type Schema } from "./Context";
import { useResource } from "@/lib/api/client";
import { useT } from "@/components/Providers";
import { usePreferences } from "@/components/Providers";
import { Status, ErrorState, Loading } from "@/components/States";
import { Decimal } from "@/lib/i18n/numbers";
export default function Results() {
  return (
    <>
      <Title id="results" />
      <ChildGate>
        {(context, school) => (
          <AcademicGate context={context}>
            <Academic context={context} school={school} />
          </AcademicGate>
        )}
      </ChildGate>
    </>
  );
}
function Academic({
  context,
  school,
}: {
  context: Schema["FamilyContext"];
  school: string;
}) {
  const t = useT(),
    label = useLabel();
  const [course, setCourse] = useState(""),
    [period, setPeriod] = useState("");
  const query = new URLSearchParams();
  if (course) query.set("course_id", course);
  if (period) query.set("period_id", period);
  return (
    <Stack spacing={2}>
      <Alert severity="info">{t("publishedOnly")}</Alert>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Choice
          label={t("subject")}
          value={course}
          onChange={setCourse}
          options={[
            { value: "", label: t("allSubjects") },
            ...context.courses.map((c) => ({
              value: c.id,
              label: label(c.name_en, c.name_ar),
            })),
          ]}
        />
        <Choice
          label={t("period")}
          value={period}
          onChange={setPeriod}
          options={[
            { value: "", label: t("allPeriods") },
            ...context.periods.map((p) => ({
              value: p.id,
              label: label(p.name_en, p.name_ar),
            })),
          ]}
        />
      </Stack>
      <Paged<Schema["PortalGrade"]>
        school={school}
        path={`students/${context.child.id}/academic-grades?${query}`}
      >
        {(grades) => (
          <Stack spacing={2}>
            {grades.map((g) => (
              <MainCard
                key={g.id}
                title={label(g.assessment_title_en, g.assessment_title_ar)}
              >
                <Stack spacing={1}>
                  <Typography>
                    {label(g.subject_name_en, g.subject_name_ar)}
                  </Typography>
                  {g.grading_model ? (
                    <Typography variant="caption">
                      {t(g.grading_model)}
                    </Typography>
                  ) : null}
                  <Typography>
                    {t("grade")}:{" "}
                    {g.state !== "graded" ? (
                      <Status value={g.state} />
                    ) : g.value !== "" ? (
                      <Decimal value={g.value} />
                    ) : g.band ? (
                      <bdi dir="auto">{g.band}</bdi>
                    ) : (
                      t("noResult")
                    )}
                  </Typography>
                  {g.band && g.value !== "" ? (
                    <Typography>
                      {t("band")}: <bdi>{g.band}</bdi>
                    </Typography>
                  ) : null}
                  <Typography sx={{ whiteSpace: "pre-wrap" }}>
                    <bdi dir="auto">{label(g.comment_en, g.comment_ar)}</bdi>
                  </Typography>
                  {g.rubric.map((r) => (
                    <Typography key={r.code}>
                      {t("rubric")}: <bdi>{r.code}</bdi> ·{" "}
                      <Decimal value={r.value} />
                    </Typography>
                  ))}
                  <Typography variant="caption">
                    <DateText value={g.published_at} time />
                  </Typography>
                </Stack>
              </MainCard>
            ))}
          </Stack>
        )}
      </Paged>
      {course && period ? (
        <Progress
          school={school}
          child={context.child.id}
          course={course}
          period={period}
        />
      ) : null}
      <Typography component="h2" variant="h4">
        {t("reportCards")}
      </Typography>
      <Paged<Schema["ReportCard"]>
        school={school}
        path={`students/${context.child.id}/report-cards${period ? "?period_id=" + period : ""}`}
      >
        {(reports) => (
          <Stack spacing={2}>
            {reports.map((r) => (
              <Report key={r.id} report={r} />
            ))}
          </Stack>
        )}
      </Paged>
    </Stack>
  );
}
function Progress({
  school,
  child,
  course,
  period,
}: {
  school: string;
  child: string;
  course: string;
  period: string;
}) {
  const data = useResource<Schema["AcademicProgress"]>(
      school,
      `students/${child}/academic-progress?course_id=${course}&period_id=${period}`,
    ),
    t = useT(),
    label = useLabel();
  return (
    <MainCard title={t("progress")}>
      {data.error ? (
        <ErrorState error={data.error} />
      ) : !data.data ? (
        <Loading />
      ) : (
        <Stack spacing={1}>
          <Result value={data.data.result} />
          <Typography>
            <bdi dir="auto">
              {label(data.data.comment_en, data.data.comment_ar)}
            </bdi>
          </Typography>
        </Stack>
      )}
    </MainCard>
  );
}
function Result({ value }: { value: Schema["AcademicResult"] }) {
  const t = useT(),
    label = useLabel();
  return value.authoritative ? (
    <Stack spacing={1}>
      {value.value !== null ? (
        <Typography>
          <Decimal value={value.value} />
        </Typography>
      ) : null}
      {value.band ? (
        <Typography>
          {label(value.band.label_en, value.band.label_ar)}
        </Typography>
      ) : null}
      {value.passed !== null ? (
        <Typography>{t(value.passed ? "passed" : "notPassed")}</Typography>
      ) : null}
    </Stack>
  ) : (
    <Alert severity="info">{t("notAuthoritative")}</Alert>
  );
}
function Report({ report }: { report: Schema["ReportCard"] }) {
  const label = useLabel(),
    t = useT(),
    { locale } = usePreferences(),
    [open, setOpen] = useState(false);
  return (
    <MainCard
      title={label(
        report.snapshot.definition.title_en,
        report.snapshot.definition.title_ar,
      )}
    >
      <Typography>
        {label(report.snapshot.period.name_en, report.snapshot.period.name_ar)}{" "}
        · <DateText value={report.published_at} />
      </Typography>
      <Button onClick={() => setOpen(!open)} aria-expanded={open}>
        {t("viewResults")}
      </Button>
      {open ? (
        <Stack spacing={2}>
          {report.snapshot.subjects.map((s) => (
            <Box key={s.course_id}>
              <Typography variant="h5">
                {label(s.course.subject.name_en, s.course.subject.name_ar)}
              </Typography>
              <Result value={s.result} />
              <Typography>
                {locale === "ar" ? s.comment_ar || s.comment_en : s.comment_en}
              </Typography>
            </Box>
          ))}
        </Stack>
      ) : null}
    </MainCard>
  );
}
