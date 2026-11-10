"use client";
import { Stack, Typography } from "@mui/material";
import MainCard from "@/components/MainCard";
import { ChildGate, Title, Paged, DateText, useLabel } from "./shared";
import type { Schema } from "./Context";
export default function Announcements() {
  const label = useLabel();
  return (
    <>
      <Title id="announcements" />
      <ChildGate>
        {(context, school) => (
          <Paged<Schema["Announcement"]>
            school={school}
            path={`announcements?student_id=${context.child.id}`}
          >
            {(items) => (
              <Stack spacing={2}>
                {items.map((a) => (
                  <MainCard key={a.id} title={label(a.title_en, a.title_ar)}>
                    <Typography sx={{ whiteSpace: "pre-wrap" }}>
                      <bdi dir="auto">{label(a.body_en, a.body_ar)}</bdi>
                    </Typography>
                    <Typography variant="caption">
                      <DateText value={a.published_at} time />
                    </Typography>
                  </MainCard>
                ))}
              </Stack>
            )}
          </Paged>
        )}
      </ChildGate>
    </>
  );
}
