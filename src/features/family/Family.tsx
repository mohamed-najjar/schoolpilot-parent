"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Stack,
  Typography,
  Button,
  Avatar,
  Chip,
  Alert,
} from "@mui/material";
import MainCard from "@/components/MainCard";
import {
  useFamily,
  childQuery,
  type Schema,
  type FamilySchool,
} from "./Context";
import { useLabel, DateText, QuickLinks } from "./shared";
import { useT } from "@/components/Providers";
import { Loading, Empty, ErrorState, Status } from "@/components/States";
import { useResource, type Page } from "@/lib/api/client";
export default function Family() {
  return <FamilyHome />;
}
export function FamilyHome({ directory = false }: { directory?: boolean }) {
  const family = useFamily(),
    t = useT(),
    label = useLabel();
  return (
    <Stack spacing={3}>
      <Box
        sx={{
          p: { xs: 2.5, md: 4 },
          borderRadius: 3,
          bgcolor: "primary.main",
          color: "primary.contrastText",
        }}
      >
        <Typography variant="overline">{t("parentPortal")}</Typography>
        <Typography
          component="h1"
          variant="h2"
          sx={{ fontSize: { xs: 26, md: 36 }, fontWeight: 700, mt: 0.5 }}
        >
          {t(directory ? "children" : "welcome")}
        </Typography>
        <Typography sx={{ mt: 1, maxWidth: 650 }}>{t("intro")}</Typography>
      </Box>
      {family.error ? (
        <ErrorState error={family.error} retry={() => void family.mutate()} />
      ) : null}
      {!family.data && !family.error ? <Loading /> : null}
      {family.data?.schools.some((s) => s.error_status) ? (
        <Alert
          severity="warning"
          action={
            <Button color="inherit" onClick={() => void family.mutate()}>
              {t("retry")}
            </Button>
          }
        >
          {t("familyLoadError")}
        </Alert>
      ) : null}
      {family.data &&
      !family.all.length &&
      !family.data.schools.some((s) => s.error_status) ? (
        <Alert severity="info">{t("noChildren")}</Alert>
      ) : null}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "minmax(0,1fr)",
            md: "repeat(2,minmax(0,1fr))",
          },
          gap: 2.5,
        }}
      >
        {family.all.map(({ child, school }) => (
          <MainCard key={school.id + child.id}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar
                  sx={{
                    bgcolor: "action.selected",
                    color: "primary.main",
                    width: 52,
                    height: 52,
                    fontWeight: 700,
                  }}
                >
                  {label(child.first_name, child.first_name_ar).slice(0, 1)}
                </Avatar>
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="h4" component="h2">
                    <bdi dir="auto">
                      {label(
                        child.first_name + " " + child.last_name,
                        child.first_name_ar + " " + child.last_name_ar,
                      )}
                    </bdi>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {label(school.name_en, school.name_ar)}
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" useFlexGap flexWrap="wrap" gap={1}>
                {child.classes.length ? (
                  child.classes.map((c) => (
                    <Chip
                      key={c.id}
                      variant="outlined"
                      size="small"
                      label={<bdi>{c.code}</bdi>}
                    />
                  ))
                ) : (
                  <Typography variant="caption">{t("noClass")}</Typography>
                )}
              </Stack>
              {!directory && child.can_view_academics ? (
                <>
                  <Typography variant="caption" color="text.secondary">
                    {t("preview")}
                  </Typography>
                  <Preview title={t("today")} empty={t("noLessons")}>
                    {child.today_lessons.map((l) => (
                      <Typography key={l.id} variant="body2">
                        {label(l.name_en, l.name_ar)} ·{" "}
                        <DateText value={l.starts_at} time />{" "}
                        <Status value={l.status} />
                      </Typography>
                    ))}
                  </Preview>
                  <Preview title={t("dueSoon")}>
                    {child.due_assignments.map((a) => (
                      <Typography variant="body2" key={a.id}>
                        {label(a.title_en, a.title_ar)} ·{" "}
                        <DateText value={a.due_at} time />
                      </Typography>
                    ))}
                  </Preview>
                  <Preview title={t("recentAttendance")}>
                    {child.recent_attendance.map((a) => (
                      <Typography variant="body2" key={a.id}>
                        <DateText value={a.local_date} /> · {t(a.kind)}{" "}
                        <Status value={a.status} />
                      </Typography>
                    ))}
                  </Preview>
                  <Preview title={t("newResults")}>
                    {child.published_results.map((r) => (
                      <Typography variant="body2" key={r.id}>
                        {label(r.title_en, r.title_ar)}
                      </Typography>
                    ))}
                  </Preview>
                </>
              ) : null}
              <QuickLinks school={school.id} child={child.id} />
            </Stack>
          </MainCard>
        ))}
      </Box>
      {family.data?.schools
        .filter((s) => s.next_cursor)
        .map((s) => (
          <MoreChildren key={s.school.id} school={s} />
        ))}
      {!directory
        ? family.data?.schools
            .filter((s) => s.items.length && !s.error_status)
            .map((s) => <SchoolUpdates key={s.school.id} school={s} />)
        : null}
    </Stack>
  );
}
function MoreChildren({ school }: { school: FamilySchool }) {
  const family = useFamily(),
    t = useT(),
    label = useLabel();
  const [error, setError] = useState<unknown>();
  return (
    <Box>
      <Button
        variant="outlined"
        onClick={async () => {
          try {
            setError(undefined);
            await family.more(school);
          } catch (e) {
            setError(e);
          }
        }}
      >
        {t("loadMoreChildren")} ·{" "}
        {label(school.school.name_en, school.school.name_ar)}
      </Button>
      {error ? <ErrorState error={error} /> : null}
    </Box>
  );
}
function Preview({
  title,
  children,
  empty,
}: {
  title: string;
  children: React.ReactNode[];
  empty?: string;
}) {
  const t = useT();
  return (
    <Box>
      <Typography fontWeight={600} sx={{ mb: 0.75 }}>
        {title}
      </Typography>
      <Stack spacing={0.5}>
        {children.length ? (
          children
        ) : (
          <Typography variant="body2" color="text.secondary">
            {empty || t("empty")}
          </Typography>
        )}
      </Stack>
    </Box>
  );
}
function SchoolUpdates({ school }: { school: FamilySchool }) {
  const t = useT(),
    label = useLabel();
  const a = useResource<Page<Schema["Announcement"]>>(
    school.school.id,
    "announcements?limit=3",
  );
  const n = useResource<Page<Schema["Notification"]>>(
    school.school.id,
    "notifications?limit=3",
  );
  return (
    <MainCard title={label(school.school.name_en, school.school.name_ar)}>
      <Stack spacing={2}>
        <Typography variant="h5">{t("announcements")}</Typography>
        {a.error ? (
          <ErrorState error={a.error} />
        ) : !a.data ? (
          <Loading />
        ) : a.data.items?.length ? (
          a.data.items.map((x) => (
            <Typography key={x.id}>{label(x.title_en, x.title_ar)}</Typography>
          ))
        ) : (
          <Empty />
        )}
        <Button
          component={Link}
          prefetch={false}
          href={
            "/announcements" +
            (school.items[0]
              ? childQuery(school.school.id, school.items[0].id)
              : "")
          }
        >
          {t("viewAll")}
        </Button>
        <Typography variant="h5">{t("notifications")}</Typography>
        {n.error ? (
          <ErrorState error={n.error} />
        ) : (
          n.data?.items?.map((x) => (
            <Typography key={x.id}>
              {x.subject}{" "}
              {!x.read_at ? <Chip size="small" label={t("unread")} /> : null}
            </Typography>
          ))
        )}
        <Button
          component={Link}
          prefetch={false}
          href={
            "/notifications" +
            (school.items[0]
              ? childQuery(school.school.id, school.items[0].id)
              : "")
          }
        >
          {t("viewAll")}
        </Button>
      </Stack>
    </MainCard>
  );
}
