"use client";
import { useState } from "react";
import { Stack, Typography, Button, Chip } from "@mui/material";
import MainCard from "@/components/MainCard";
import {
  ChildGate,
  Title,
  Paged,
  DateText,
  useWrite,
  MutationState,
} from "./shared";
import type { Schema } from "./Context";
import { useT } from "@/components/Providers";
import { Status } from "@/components/States";
export default function Notifications() {
  return (
    <>
      <Title id="notifications" />
      <ChildGate>{(_, school) => <Inbox school={school} />}</ChildGate>
    </>
  );
}
function Inbox({ school }: { school: string }) {
  const t = useT(),
    state = useWrite(school),
    [revision, setRevision] = useState(0);
  return (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        {t("deliveryUnavailable")}
      </Typography>
      <Paged<Schema["Notification"]>
        key={revision}
        fresh={revision}
        school={school}
        path="notifications"
      >
        {(items) => (
          <Stack spacing={2}>
            {items.map((n) => (
              <MainCard key={n.id} title={n.subject}>
                <Stack spacing={1}>
                  <Typography sx={{ whiteSpace: "pre-wrap" }}>
                    <bdi dir="auto">{n.body}</bdi>
                  </Typography>
                  <Typography variant="caption">
                    <DateText value={n.created_at} time />
                  </Typography>
                  <Typography>
                    <Status value={n.status} />{" "}
                    {!n.read_at ? (
                      <Chip size="small" label={t("unread")} />
                    ) : null}
                  </Typography>
                  {!n.read_at ? (
                    <Button
                      disabled={state.busy}
                      onClick={async () => {
                        if (await state.run(`notifications/${n.id}/read`))
                          setRevision((x) => x + 1);
                      }}
                    >
                      {t("markRead")}
                    </Button>
                  ) : null}
                </Stack>
              </MainCard>
            ))}
          </Stack>
        )}
      </Paged>
      <MutationState state={state} />
    </Stack>
  );
}
