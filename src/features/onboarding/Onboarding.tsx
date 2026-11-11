"use client";
import { useEffect, useState } from "react";
import useSWR, { SWRConfig } from "swr";
import {
  Alert,
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { usePreferences } from "@/components/Providers";
import MainCard from "@/components/MainCard";
import { invitationValue } from "@/lib/onboarding/validation";
import { en, ar } from "./messages";
type Identity = { issuer: string; subject: string };
export default function Onboarding() {
  const [cache] = useState(() => new Map());
  return (
    <SWRConfig value={{ provider: () => cache }}>
      <OnboardingPage />
    </SWRConfig>
  );
}
function OnboardingPage() {
  const { locale, switchLocale, toggleMode } = usePreferences();
  const t = locale === "ar" ? ar : en;
  // This component mounts client-only: the fragment initializes private page
  // memory once, never server markup, OAuth state or persistent storage.
  const [token, setToken] = useState(() => {
    const value = new URLSearchParams(window.location.hash.slice(1)).get(
      "token",
    );
    return invitationValue(value) ? value : "";
  });
  const [busy, setBusy] = useState(false),
    [awaiting, setAwaiting] = useState(false),
    [school, setSchool] = useState("");
  const [error, setError] = useState<keyof typeof en | null>(null),
    [note, setNote] = useState<keyof typeof en | null>(null);
  // Reuse the application's query lifecycle and race handling. The cache is
  // private to this page; invitation secrets never enter it.
  const identityQuery = useSWR<Identity | null>(
    "/api/onboarding/identity",
    async (url) => {
      const response = await fetch(url, {
        cache: "no-store",
        redirect: "error",
        signal: AbortSignal.timeout(15000),
      });
      if (response.status === 401) return null;
      if (!response.ok) throw new Error("identity_unavailable");
      return (await response.json()) as Identity;
    },
    {
      shouldRetryOnError: false,
      revalidateOnFocus: true,
      refreshInterval: awaiting ? 2500 : 0,
    },
  );
  const identity = identityQuery.data || null;
  const recheck = identityQuery.mutate;
  useEffect(() => {
    const url = new URL(window.location.href);
    window.history.replaceState(null, "", url.pathname);
  }, []);
  useEffect(() => {
    if (!awaiting) return;
    const focus = () => {
      void recheck();
      setAwaiting(false);
    };
    window.addEventListener("focus", focus);
    const stop = window.setTimeout(() => setAwaiting(false), 600000);
    return () => {
      window.removeEventListener("focus", focus);
      clearTimeout(stop);
    };
  }, [awaiting, recheck]);
  async function submit(action: "accept" | "access") {
    setBusy(true);
    setError(null);
    setNote(null);
    try {
      const r = await fetch("/api/onboarding/" + action, {
        method: "POST",
        cache: "no-store",
        redirect: "error",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          action === "accept" ? { token } : { school_id: school },
        ),
        signal: AbortSignal.timeout(20000),
      });
      if (!r.ok) {
        setError(
          r.status === 401
            ? "noIdentity"
            : r.status === 400
              ? "invalidInput"
              : action === "access" && r.status === 403
                ? "syncing"
                : r.status === 403 || r.status === 409
                  ? "invalid"
                  : "unavailable",
        );
        return;
      }
      const data = (await r.json()) as { school_id: string; path?: string };
      if (action === "accept") {
        setSchool(data.school_id);
        setToken("");
        setAwaiting(false);
        setNote("accepted");
      } else if (data.path?.startsWith("/") && !data.path.startsWith("//")) {
        window.location.assign(data.path);
      }
    } catch {
      setError("unavailable");
    } finally {
      setBusy(false);
    }
  }
  return (
    <Container
      maxWidth="sm"
      sx={{ py: { xs: 3, sm: 7 }, px: { xs: 1.5, sm: 3 } }}
    >
      <Typography component="h1" variant="h4" color="primary" sx={{ mb: 3 }}>
        SchoolPilot · {t.title}
      </Typography>
      <MainCard>
        <Stack spacing={2}>
          <Typography>{t.intro}</Typography>
          <Alert severity="info">{t.privateLink}</Alert>
          {error || identityQuery.error ? (
            <Alert severity="error">{t[error || "unavailable"]}</Alert>
          ) : null}
          {note ? (
            <Alert severity="success" role="status">
              {t[note]}
            </Alert>
          ) : null}
          {identity ? (
            <Box>
              <Typography component="h2" variant="h6">
                {t.identity}
              </Typography>
              <Typography>
                {t.subject}:{" "}
                <Box
                  component="bdi"
                  dir="ltr"
                  sx={{ overflowWrap: "anywhere", userSelect: "all" }}
                >
                  {identity.subject}
                </Box>
              </Typography>
              <Typography variant="body2">
                {t.issuer}:{" "}
                <Box
                  component="bdi"
                  dir="ltr"
                  sx={{ overflowWrap: "anywhere" }}
                >
                  {identity.issuer}
                </Box>
              </Typography>
              <Button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(identity.subject);
                    setNote("copied");
                  } catch {
                    setNote("copyFailed");
                  }
                }}
              >
                {t.copy}
              </Button>
            </Box>
          ) : (
            <Alert severity="info">{t.noIdentity}</Alert>
          )}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            <Button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="/auth/login?return_mode=onboarding&reauth=true"
              variant="outlined"
              onClick={() => setAwaiting(true)}
            >
              {t.login}
            </Button>
            <Button
              onClick={() => {
                setError(null);
                void recheck();
              }}
            >
              {t.recheck}
            </Button>
          </Stack>
          {!school ? (
            <>
              <TextField
                label={t.invite}
                type="password"
                autoComplete="off"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                fullWidth
                slotProps={{
                  htmlInput: {
                    maxLength: 128,
                    dir: "ltr",
                    spellCheck: false,
                    "data-private": true,
                  },
                }}
                helperText={t.missing}
              />
              <Button
                variant="contained"
                disabled={busy || !identity || !invitationValue(token)}
                onClick={() => void submit("accept")}
              >
                {busy ? t.busy : t.accept}
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              disabled={busy}
              onClick={() => void submit("access")}
            >
              {busy ? t.busy : t.checkAccess}
            </Button>
          )}
          {!token && !school ? (
            <Typography variant="body2">{t.noInvite}</Typography>
          ) : null}
          <Stack direction="row" flexWrap="wrap" gap={1}>
            <Button onClick={switchLocale}>{t.language}</Button>
            <Button onClick={toggleMode}>{t.theme}</Button>
          </Stack>
        </Stack>
      </MainCard>
    </Container>
  );
}
