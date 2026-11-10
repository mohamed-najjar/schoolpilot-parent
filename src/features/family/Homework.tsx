"use client";
import { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  Alert,
} from "@mui/material";
import MainCard from "@/components/MainCard";
import {
  ChildGate,
  AcademicGate,
  Title,
  Paged,
  Choice,
  DateText,
  useLabel,
  Download,
} from "./shared";
import { type Schema } from "./Context";
import { useResource } from "@/lib/api/client";
import { useT } from "@/components/Providers";
import { Status, ErrorState, Loading } from "@/components/States";
export default function Homework() {
  return (
    <>
      <Title id="homework" />
      <ChildGate>
        {(context, school) => (
          <AcademicGate context={context}>
            <Work context={context} school={school} />
          </AcademicGate>
        )}
      </ChildGate>
    </>
  );
}
function Work({
  context,
  school,
}: {
  context: Schema["FamilyContext"];
  school: string;
}) {
  const t = useT(),
    label = useLabel();
  const [course, setCourse] = useState(""),
    [progress, setProgress] = useState(""),
    [dates, setDates] = useState<{ from: string; to: string }>({
      from: "",
      to: "",
    });
  const query = new URLSearchParams();
  if (course) query.set("course_id", course);
  if (progress) query.set("progress", progress);
  if (dates.from || dates.to) {
    query.set("starts_on", dates.from);
    query.set("ends_on", dates.to);
  }
  return (
    <Stack spacing={2}>
      <Alert severity="info">{t("readOnly")}</Alert>
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
          label={t("status")}
          value={progress}
          onChange={setProgress}
          options={[
            "",
            "upcoming",
            "overdue",
            "missing",
            "submitted",
            "reviewed",
            "returned",
            "completed",
          ].map((p) => ({
            value: p,
            label: p ? t(p as "upcoming") : t("allStatuses"),
          }))}
        />
      </Stack>
      <Stack
        component="form"
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        onSubmit={(e) => {
          e.preventDefault();
          const f = new FormData(e.currentTarget);
          setDates({ from: String(f.get("from")), to: String(f.get("to")) });
        }}
      >
        <TextField
          name="from"
          type="date"
          label={t("startsOn")}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          name="to"
          type="date"
          label={t("endsOn")}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <Button type="submit">{t("apply")}</Button>
      </Stack>
      <Paged<Schema["AssignmentDashboard"]>
        school={school}
        path={`students/${context.child.id}/assignments?${query}`}
      >
        {(items) => (
          <Stack spacing={2}>
            {items.map((item) => (
              <Assignment key={item.id} school={school} item={item} />
            ))}
          </Stack>
        )}
      </Paged>
      {course ? (
        <Resources context={context} school={school} course={course} />
      ) : null}
    </Stack>
  );
}
function Assignment({
  school,
  item,
}: {
  school: string;
  item: Schema["AssignmentDashboard"];
}) {
  const t = useT(),
    label = useLabel(),
    [open, setOpen] = useState(false);
  const detail = useResource<Schema["Assignment"]>(
    school,
    open ? `assignments/${item.id}` : null,
  );
  return (
    <MainCard title={label(item.title_en, item.title_ar)}>
      <Stack spacing={1.5}>
        <Typography>
          {t("dueDate")}: <DateText value={item.effective_due_at} time />
        </Typography>
        <Typography>
          <Status value={item.status} />
          {item.overdue ? <Status value="overdue" /> : null}
        </Typography>
        <Typography>
          {t("workStatus")}:{" "}
          {item.progress ? (
            <Status value={item.progress} />
          ) : (
            t("progressWithheld")
          )}
        </Typography>
        <Typography sx={{ whiteSpace: "pre-wrap" }}>
          <bdi dir="auto">{label(item.body_en, item.body_ar)}</bdi>
        </Typography>
        <Button onClick={() => setOpen(!open)} aria-expanded={open}>
          {t("feedback")} · {t("attachments")}
        </Button>
        {open ? (
          <>
            <Box>
              {detail.error ? (
                <ErrorState error={detail.error} />
              ) : (
                detail.data?.files?.map((f) => (
                  <Download
                    key={f.id}
                    school={school}
                    id={f.id}
                    name={f.filename}
                  />
                ))
              )}
            </Box>
            {item.guardian_progress ? (
              <>
                <Paged<Schema["LearningFeedback"]>
                  school={school}
                  path={`assignment-recipients/${item.recipient_id}/feedback`}
                >
                  {(feedback) => (
                    <Stack spacing={1}>
                      {feedback.map((f) => (
                        <Box key={f.id}>
                          <Typography variant="body2">
                            <DateText value={f.created_at} time />
                          </Typography>
                          <Typography sx={{ whiteSpace: "pre-wrap" }}>
                            <bdi dir="auto">{f.body}</bdi>
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  )}
                </Paged>
                <Paged<Schema["LearningSubmission"]>
                  school={school}
                  path={`assignment-recipients/${item.recipient_id}/submissions`}
                >
                  {(work) => (
                    <Stack spacing={1}>
                      {work.map((s) => (
                        <Box key={s.id}>
                          <Typography>
                            <DateText value={s.created_at} time /> ·{" "}
                            <Status value={s.kind} />
                            {s.late ? <Status value="late" /> : null}
                          </Typography>
                          <Typography sx={{ whiteSpace: "pre-wrap" }}>
                            <bdi dir="auto">{s.body}</bdi>
                          </Typography>
                          {s.file_ids.map((id) => (
                            <Download key={id} school={school} id={id} />
                          ))}
                        </Box>
                      ))}
                    </Stack>
                  )}
                </Paged>
              </>
            ) : null}
          </>
        ) : null}
      </Stack>
    </MainCard>
  );
}
function Resources({
  context,
  school,
  course,
}: {
  context: Schema["FamilyContext"];
  school: string;
  course: string;
}) {
  const t = useT(),
    label = useLabel();
  return (
    <Stack spacing={2}>
      <Typography variant="h4" component="h2">
        {t("resources")}
      </Typography>
      <Paged<Schema["LearningContent"]>
        school={school}
        path={`learning-content?course_id=${course}${context.child.classes[0] ? "&section_id=" + context.child.classes[0].id : ""}`}
      >
        {(items) => (
          <Stack spacing={2}>
            {items.map((c) => (
              <Resource key={c.id} item={c} school={school} />
            ))}
          </Stack>
        )}
      </Paged>
      <Typography variant="caption">
        {label(
          context.courses.find((c) => c.id === course)?.name_en,
          context.courses.find((c) => c.id === course)?.name_ar,
        )}
      </Typography>
    </Stack>
  );
}
function Resource({
  item,
  school,
}: {
  item: Schema["LearningContent"];
  school: string;
}) {
  const label = useLabel(),
    t = useT(),
    data = useResource<Schema["LearningContent"]>(
      school,
      `learning-content/${item.id}`,
    );
  let external = "";
  try {
    const u = new URL(item.resource_url);
    if (u.protocol === "https:") external = u.href;
  } catch {}
  return (
    <MainCard title={label(item.title_en, item.title_ar)}>
      <Typography sx={{ whiteSpace: "pre-wrap" }}>
        <bdi dir="auto">{label(item.body_en, item.body_ar)}</bdi>
      </Typography>
      {external ? (
        <Button
          component="a"
          href={external}
          target="_blank"
          rel="noopener noreferrer"
          title={t("externalResource")}
        >
          {t("openResource")}
        </Button>
      ) : null}
      {data.error ? (
        <ErrorState error={data.error} />
      ) : !data.data ? (
        <Loading />
      ) : (
        data.data.files?.map((f) => (
          <Download key={f.id} school={school} id={f.id} name={f.filename} />
        ))
      )}
    </MainCard>
  );
}
