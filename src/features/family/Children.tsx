"use client";
import { useSearchParams } from "next/navigation";
import { Stack, Typography, Button } from "@mui/material";
import Link from "next/link";
import { FamilyHome } from "./Family";
import { ChildGate, Title, QuickLinks, useLabel } from "./shared";
import { childQuery } from "./Context";
import { useT } from "@/components/Providers";
import MainCard from "@/components/MainCard";
export default function Children() {
  const q = useSearchParams(),
    t = useT(),
    label = useLabel();
  return q.has("child") ? (
    <>
      <Title id="children" />
      <ChildGate>
        {(context, school) => (
          <MainCard title={t("childContext")}>
            <Stack spacing={2}>
              <Typography>
                {t("studentNumber")}: <bdi>{context.child.student_number}</bdi>
              </Typography>
              <QuickLinks school={school} child={context.child.id} />
              <Stack direction="row" flexWrap="wrap" useFlexGap gap={1}>
                {(["timetable", "announcements", "notifications"] as const).map(
                  (page) => (
                    <Button
                      key={page}
                      component={Link}
                      prefetch={false}
                      href={"/" + page + childQuery(school, context.child.id)}
                    >
                      {t(page)}
                    </Button>
                  ),
                )}
              </Stack>
              {context.courses.map((c) => (
                <Typography key={c.id}>
                  {label(c.name_en, c.name_ar)} · <bdi>{c.code}</bdi>
                </Typography>
              ))}
            </Stack>
          </MainCard>
        )}
      </ChildGate>
    </>
  ) : (
    <FamilyHome directory />
  );
}
