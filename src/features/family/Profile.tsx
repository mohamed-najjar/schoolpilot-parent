"use client";
import {
  Stack,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Alert,
} from "@mui/material";
import { ChildGate, Title, useLabel, useWrite, MutationState } from "./shared";
import type { Schema } from "./Context";
import { useResource } from "@/lib/api/client";
import { useT } from "@/components/Providers";
import { Loading, ErrorState } from "@/components/States";
import MainCard from "@/components/MainCard";
export default function Profile() {
  return (
    <>
      <Title id="profile" />
      <ChildGate>
        {(_, school) => <GuardianProfile school={school} />}
      </ChildGate>
    </>
  );
}
function GuardianProfile({ school }: { school: string }) {
  const data = useResource<Schema["GuardianProfileView"]>(
      school,
      "guardian/profile",
    ),
    pref = useResource<Schema["Preference"]>(
      school,
      "notification-preferences",
    ),
    t = useT(),
    label = useLabel(),
    state = useWrite(school);
  return (
    <Stack spacing={2}>
      {data.error ? (
        <ErrorState error={data.error} />
      ) : !data.data ? (
        <Loading />
      ) : (
        <MainCard>
          <Typography variant="h4">
            {label(
              data.data.first_name + " " + data.data.last_name,
              data.data.first_name_ar + " " + data.data.last_name_ar,
            )}
          </Typography>
          <Typography>{t("profileReadOnly")}</Typography>
        </MainCard>
      )}
      {pref.error ? (
        <ErrorState error={pref.error} />
      ) : !pref.data ? (
        <Loading />
      ) : (
        <MainCard title={t("preferences")}>
          <Stack
            key={pref.data.version}
            component="form"
            spacing={2}
            onSubmit={async (e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const body = {
                language: pref.data!.language,
                email_address: String(f.get("email_address")),
                in_app: f.has("in_app"),
                email: f.has("email"),
                attendance: f.has("attendance"),
                announcements: f.has("announcements"),
                messages: f.has("messages"),
                learning: f.has("learning"),
              };
              if (await state.run("notification-preferences", body, "PUT"))
                await pref.mutate();
            }}
          >
            {(
              [
                "in_app",
                "email",
                "attendance",
                "announcements",
                "messages",
                "learning",
              ] as const
            ).map((key) => (
              <FormControlLabel
                key={key}
                control={<Switch name={key} defaultChecked={pref.data![key]} />}
                label={t(
                  (
                    {
                      in_app: "inApp",
                      email: "email",
                      attendance: "attendanceEvents",
                      announcements: "announcementEvents",
                      messages: "messageEvents",
                      learning: "learning",
                    } as const
                  )[key],
                )}
              />
            ))}
            <TextField
              type="email"
              name="email_address"
              label={t("email")}
              defaultValue={pref.data.email_address}
            />
            <Alert severity="info">{t("deliveryUnavailable")}</Alert>
            <Button type="submit" disabled={state.busy} variant="contained">
              {t("savePreferences")}
            </Button>
            <MutationState state={state} />
          </Stack>
        </MainCard>
      )}
    </Stack>
  );
}
