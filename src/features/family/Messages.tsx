"use client";
import { useState } from "react";
import {
  Stack,
  Typography,
  Button,
  TextField,
  Alert,
  Box,
} from "@mui/material";
import MainCard from "@/components/MainCard";
import {
  ChildGate,
  Title,
  Paged,
  Choice,
  DateText,
  useLabel,
  useWrite,
  MutationState,
  Download,
} from "./shared";
import type { Schema } from "./Context";
import { useT, usePreferences } from "@/components/Providers";
export default function Messages() {
  return (
    <>
      <Title id="messages" />
      <ChildGate>
        {(context, school) =>
          context.child.can_receive_messages ? (
            <Messaging context={context} school={school} />
          ) : (
            <NoMessaging />
          )
        }
      </ChildGate>
    </>
  );
}
function NoMessaging() {
  const t = useT();
  return <Alert severity="info">{t("messagesUnavailable")}</Alert>;
}
function Messaging({
  context,
  school,
}: {
  context: Schema["FamilyContext"];
  school: string;
}) {
  const t = useT(),
    [revision, setRevision] = useState(0),
    [opened, setOpened] = useState<string>();
  return (
    <Stack spacing={2}>
      <CreateConversation
        school={school}
        child={context.child.id}
        onCreated={(id) => {
          setOpened(id);
          setRevision((x) => x + 1);
        }}
      />
      <Typography variant="caption" color="text.secondary">
        {t("readReceiptsUnavailable")}
      </Typography>
      <Paged<Schema["Conversation"]>
        key={revision}
        fresh={revision}
        school={school}
        path={`conversations?student_id=${context.child.id}`}
      >
        {(items) => (
          <Stack spacing={2}>
            {items.map((c) => (
              <MainCard key={c.id} title={c.subject}>
                <Button
                  aria-expanded={opened === c.id}
                  onClick={() => setOpened(opened === c.id ? undefined : c.id)}
                >
                  {t("openMessages")}
                </Button>
                {opened === c.id ? (
                  <Thread school={school} conversation={c} />
                ) : null}
              </MainCard>
            ))}
          </Stack>
        )}
      </Paged>
    </Stack>
  );
}
function CreateConversation({
  school,
  child,
  onCreated,
}: {
  school: string;
  child: string;
  onCreated: (id: string) => void;
}) {
  const t = useT(),
    label = useLabel(),
    [selected, setSelected] = useState<Schema["GuardianTeacherContact"]>(),
    state = useWrite(school);
  return (
    <MainCard title={t("newConversation")}>
      <Stack spacing={2}>
        <Paged<Schema["GuardianTeacherContact"]>
          school={school}
          path={`guardian/children/${child}/contacts`}
        >
          {(contacts) => (
            <Choice
              label={t("teacher")}
              value={
                contacts.some((c) => c.id === selected?.id) ? selected!.id : ""
              }
              onChange={(id) => setSelected(contacts.find((c) => c.id === id))}
              options={[
                { value: "", label: t("teacher") },
                ...contacts.map((c) => ({
                  value: c.id,
                  label: label(c.name_en, c.name_ar),
                })),
              ]}
            />
          )}
        </Paged>
        <Stack
          component="form"
          spacing={2}
          onSubmit={async (e) => {
            e.preventDefault();
            if (!selected) return;
            const form = e.currentTarget;
            const subject = String(new FormData(form).get("subject"));
            const c = await state.run<Schema["Conversation"]>("conversations", {
              student_id: child,
              staff_id: selected.staff_id,
              relationship_id: selected.relationship_id,
              subject,
            });
            if (c) {
              onCreated(c.id);
              form.reset();
            }
          }}
        >
          <TextField
            required
            name="subject"
            label={t("conversationSubject")}
            inputProps={{ maxLength: 200 }}
          />
          <Button
            disabled={state.busy || !selected}
            type="submit"
            variant="contained"
          >
            {t("createConversation")}
          </Button>
          <MutationState state={state} />
        </Stack>
      </Stack>
    </MainCard>
  );
}
function Thread({
  school,
  conversation,
}: {
  school: string;
  conversation: Schema["Conversation"];
}) {
  const t = useT(),
    { locale } = usePreferences(),
    state = useWrite(school),
    upload = useWrite(school);
  const [revision, setRevision] = useState(0),
    [files, setFiles] = useState<{ id: string; filename: string }[]>([]),
    [fileError, setFileError] = useState(false);
  return (
    <Stack spacing={2} sx={{ mt: 2 }}>
      <Paged<Schema["Message"]>
        key={revision}
        fresh={revision}
        school={school}
        path={`conversations/${conversation.id}/messages`}
      >
        {(items) => (
          <Stack spacing={2}>
            {items.map((m) => (
              <Box
                key={m.id}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor:
                    m.sender_id === conversation.guardian_person_id
                      ? "action.selected"
                      : "background.default",
                }}
              >
                <Typography sx={{ whiteSpace: "pre-wrap" }}>
                  <bdi dir="auto">{m.body}</bdi>
                </Typography>
                <Typography variant="caption">
                  <DateText value={m.created_at} time />
                </Typography>
                {(m.attachment_ids || []).map((id) => (
                  <Download key={id} school={school} id={id} messaging />
                ))}
              </Box>
            ))}
          </Stack>
        )}
      </Paged>
      {conversation.status === "active" ? (
        <Stack
          component="form"
          spacing={2}
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const body = String(new FormData(form).get("body"));
            const message = await state.run<Schema["Message"]>(
              `conversations/${conversation.id}/messages`,
              {
                body,
                language: locale,
                attachment_ids: files.map((f) => f.id),
              },
            );
            if (message) {
              form.reset();
              setFiles([]);
              setRevision((x) => x + 1);
            }
          }}
        >
          <TextField
            multiline
            required
            minRows={3}
            label={t("messageBody")}
            name="body"
            inputProps={{ maxLength: 10000 }}
          />
          <Typography variant="caption">{t("attachmentPolicy")}</Typography>
          <Button component="label" disabled={upload.busy || files.length >= 5}>
            {t("attach")}
            <input
              type="file"
              aria-label={t("attach")}
              hidden
              accept="text/plain,image/png,image/jpeg,.txt,.png,.jpg,.jpeg"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                setFileError(false);
                if (
                  file.size < 1 ||
                  file.size > 32768 ||
                  !["text/plain", "image/png", "image/jpeg"].includes(file.type)
                ) {
                  setFileError(true);
                  return;
                }
                try {
                  const data = await new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () =>
                      resolve(String(reader.result).split(",")[1]);
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                  });
                  const result = await upload.run<{
                    id: string;
                    filename: string;
                  }>(`conversations/${conversation.id}/attachments`, {
                    filename: file.name,
                    media_type: file.type,
                    data_base64: data,
                  });
                  if (result) setFiles((old) => [...old, result]);
                } catch {
                  setFileError(true);
                }
                e.target.value = "";
              }}
            />
          </Button>
          {files.map((f) => (
            <Typography key={f.id}>
              <bdi dir="auto">{f.filename}</bdi>
            </Typography>
          ))}
          {fileError ? (
            <Alert severity="error">{t("attachmentInvalid")}</Alert>
          ) : null}
          <MutationState state={upload} />
          <Button
            type="submit"
            variant="contained"
            disabled={state.busy || upload.busy}
          >
            {t("send")}
          </Button>
          <MutationState state={state} />
          <Typography variant="caption">{t("deliveryUnavailable")}</Typography>
        </Stack>
      ) : null}
    </Stack>
  );
}
