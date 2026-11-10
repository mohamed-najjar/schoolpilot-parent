"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  MenuItem,
  Alert,
} from "@mui/material";
import { useT, usePreferences } from "@/components/Providers";
import { Empty, Loading, ErrorState } from "@/components/States";
import { useResource, fetchJSON, schoolURL, type Page } from "@/lib/api/client";
import { useChild, childQuery, type Schema } from "./Context";
import type { MessageID } from "@/lib/i18n/messages";
export const today = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dubai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
export function dayOffset(n: number) {
  const d = new Date(today() + "T12:00:00+04:00");
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
export function useLabel() {
  const { locale } = usePreferences();
  return (en: string | undefined, ar: string | undefined) =>
    locale === "ar" && ar?.trim() ? ar : en || "—";
}
export function DateText({
  value,
  time = false,
}: {
  value: string | null | undefined;
  time?: boolean;
}) {
  const { locale } = usePreferences();
  if (!value) return <span>—</span>;
  const date = new Date(
    value.length === 10 ? value + "T12:00:00+04:00" : value,
  );
  return (
    <bdi>
      {new Intl.DateTimeFormat(locale === "ar" ? "ar-AE" : "en-AE", {
        timeZone: "Asia/Dubai",
        calendar: "gregory",
        dateStyle: "medium",
        ...(time ? { timeStyle: "short" as const } : {}),
      }).format(date)}
    </bdi>
  );
}
export function Title({ id }: { id: MessageID }) {
  const t = useT();
  return (
    <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
      {t(id)}
    </Typography>
  );
}
export function Choice({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (s: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      size="small"
      sx={{ minWidth: { sm: 180 }, maxWidth: "100%", flex: 1 }}
    >
      {options.map((o) => (
        <MenuItem key={o.value} value={o.value}>
          {o.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
export function ChildGate({
  children,
}: {
  children: (
    context: Schema["FamilyContext"],
    school: string,
  ) => React.ReactNode;
}) {
  const child = useChild(),
    t = useT(),
    label = useLabel();
  if (child.invalid) return <ErrorState error={{}} />;
  if (child.error)
    return <ErrorState error={child.error} retry={() => void child.mutate()} />;
  if (!child.selected) return <Alert severity="info">{t("selectChild")}</Alert>;
  if (!child.data) return <Loading />;
  return (
    <Stack spacing={2} key={child.selected.schoolId + child.data.child.id}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", pb: 2 }}>
        <Typography variant="h5" component="p">
          <bdi dir="auto">
            {label(
              child.data.child.first_name + " " + child.data.child.last_name,
              child.data.child.first_name_ar +
                " " +
                child.data.child.last_name_ar,
            )}
          </bdi>
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {label(child.school?.name_en, child.school?.name_ar)} ·{" "}
          <bdi>
            {child.data.child.classes.map((c) => c.code).join(" · ") ||
              t("noClass")}
          </bdi>
        </Typography>
      </Box>
      {children(child.data, child.selected.schoolId)}
    </Stack>
  );
}
export function AcademicGate({
  context,
  children,
}: {
  context: Schema["FamilyContext"];
  children: React.ReactNode;
}) {
  const t = useT();
  return context.child.can_view_academics ? (
    <>{children}</>
  ) : (
    <Alert severity="info">{t("academicsUnavailable")}</Alert>
  );
}
export function QuickLinks({
  school,
  child,
}: {
  school: string;
  child: string;
}) {
  const t = useT();
  return (
    <Stack direction="row" useFlexGap flexWrap="wrap" gap={0.5}>
      {(
        [
          "viewChild",
          "viewHomework",
          "checkAttendance",
          "viewResults",
          "openMessages",
        ] as const
      ).map((id, i) => (
        <Button
          size="small"
          key={id}
          component={Link}
          prefetch={false}
          href={
            "/" +
            ["children", "homework", "attendance", "results", "messages"][i] +
            childQuery(school, child)
          }
        >
          {t(id)}
        </Button>
      ))}
    </Stack>
  );
}
export function Paged<T>({
  school,
  path,
  fresh,
  children,
}: {
  school: string;
  path: string;
  fresh?: number;
  children: (items: T[]) => React.ReactNode;
}) {
  return (
    <PageContent<T>
      key={school + path + String(fresh)}
      school={school}
      path={path}
      fresh={fresh}
    >
      {children}
    </PageContent>
  );
}
function PageContent<T>({
  school,
  path,
  fresh,
  children,
}: {
  school: string;
  path: string;
  fresh?: number;
  children: (items: T[]) => React.ReactNode;
}) {
  const [cursor, setCursor] = useState(""),
    [previous, setPrevious] = useState<string[]>([]);
  const t = useT();
  const query =
    path +
    (path.includes("?") ? "&" : "?") +
    "limit=20" +
    (cursor ? "&after=" + cursor : "");
  const data = useResource<Page<T>>(school, query, fresh);
  return (
    <Stack spacing={2}>
      {data.error ? (
        <ErrorState error={data.error} retry={() => void data.mutate()} />
      ) : !data.data ? (
        <Loading />
      ) : data.data.items?.length ? (
        children(data.data.items)
      ) : (
        <Empty />
      )}
      <Stack direction="row" useFlexGap flexWrap="wrap" gap={1}>
        {previous.length ? (
          <Button
            onClick={() => {
              setCursor(previous.at(-1) || "");
              setPrevious(previous.slice(0, -1));
            }}
          >
            {t("previous")}
          </Button>
        ) : null}
        {data.data?.next_cursor ? (
          <Button
            variant="outlined"
            onClick={() => {
              setPrevious([...previous, cursor]);
              setCursor(data.data!.next_cursor);
            }}
          >
            {t("loadMore")}
          </Button>
        ) : null}
      </Stack>
    </Stack>
  );
}
export function useWrite(school: string) {
  const [busy, setBusy] = useState(false),
    [error, setError] = useState<unknown>(),
    [success, setSuccess] = useState(false),
    [last, setLast] = useState<{ payload: string; key: string }>();
  return {
    busy,
    error,
    success,
    async run<T>(
      path: string,
      body?: unknown,
      method = "POST",
    ): Promise<T | undefined> {
      setBusy(true);
      setError(undefined);
      setSuccess(false);
      const payload = path + JSON.stringify(body);
      const key = last?.payload === payload ? last.key : crypto.randomUUID();
      setLast({ payload, key });
      try {
        const data = await fetchJSON<T>(schoolURL(school, path), {
          method,
          headers: {
            "Content-Type": "application/json",
            "Idempotency-Key": key,
          },
          body: body === undefined ? undefined : JSON.stringify(body),
        });
        setSuccess(true);
        setLast(undefined);
        return data;
      } catch (e) {
        setError(e);
      } finally {
        setBusy(false);
      }
    },
  };
}
export function MutationState({
  state,
}: {
  state: ReturnType<typeof useWrite>;
}) {
  const t = useT();
  return (
    <>
      {state.error ? <ErrorState error={state.error} /> : null}
      {state.success ? <Alert severity="success">{t("saved")}</Alert> : null}
    </>
  );
}
export function Download({
  school,
  id,
  messaging = false,
  name,
}: {
  school: string;
  id: string;
  messaging?: boolean;
  name?: string;
}) {
  const t = useT();
  const [error, setError] = useState<unknown>();
  return (
    <>
      <Button
        onClick={async () => {
          try {
            setError(undefined);
            const f = await fetchJSON<{
              data_base64: string;
              media_type: string;
              filename: string;
            }>(
              schoolURL(
                school,
                (messaging ? "message-attachments/" : "learning-files/") + id,
              ),
            );
            const bytes = Uint8Array.from(atob(f.data_base64), (c) =>
              c.charCodeAt(0),
            );
            const url = URL.createObjectURL(
              new Blob([bytes], { type: f.media_type }),
            );
            const a = document.createElement("a");
            a.href = url;
            a.download = f.filename;
            a.click();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
          } catch (e) {
            setError(e);
          }
        }}
      >
        {name || t("download")}
      </Button>
      {error ? <ErrorState error={error} /> : null}
    </>
  );
}
