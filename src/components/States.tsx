"use client";
import {
  Alert,
  Button,
  Stack,
  Typography,
  Chip,
  Skeleton,
} from "@mui/material";
import { RequestError } from "@/lib/api/client";
import { en, type MessageID } from "@/lib/i18n/messages";
import { useT } from "./Providers";
export function Loading() {
  const t = useT();
  return (
    <Stack role="status" aria-label={t("loading")} spacing={2}>
      <Skeleton height={60} />
      <Typography>{t("loading")}</Typography>
      <Skeleton variant="rounded" height={160} />
    </Stack>
  );
}
export function Empty() {
  const t = useT();
  return (
    <Typography color="text.secondary" sx={{ py: 2 }}>
      {t("empty")}
    </Typography>
  );
}
export function ErrorState({
  error,
  retry,
}: {
  error: unknown;
  retry?: () => void;
}) {
  const t = useT();
  const code = error instanceof RequestError ? error.status : 503;
  const key: MessageID =
    code === 401
      ? "sessionExpired"
      : code === 403
        ? "notAuthorized"
        : code === 404
          ? "notFound"
          : code === 429
            ? "rateLimited"
            : code === 400
              ? "invalid"
              : [409, 412, 428].includes(code)
                ? "reviewConflict"
                : "unavailable";
  return (
    <Alert
      severity="error"
      action={
        retry ? (
          <Button color="inherit" onClick={retry}>
            {t("retry")}
          </Button>
        ) : undefined
      }
    >
      {t(key)}
      {code === 401 ? (
        <Button component="a" href="/login">
          {t("login")}
        </Button>
      ) : null}
    </Alert>
  );
}
export function Status({ value }: { value: string }) {
  const t = useT();
  return (
    <Chip
      component="span"
      variant="outlined"
      size="small"
      color={
        ["absent", "failed", "rejected"].includes(value)
          ? "error"
          : ["present", "completed", "published", "approved"].includes(value)
            ? "success"
            : "default"
      }
      label={t(value in en ? (value as MessageID) : "unknownStatus")}
    />
  );
}
