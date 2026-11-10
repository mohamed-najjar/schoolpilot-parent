"use client";
import {
  Box,
  Button,
  Typography,
  Stack,
  Container,
  Alert,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useT, usePreferences } from "@/components/Providers";
export default function Login() {
  const t = useT();
  const { switchLocale, toggleMode } = usePreferences();
  const query = useSearchParams();
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Stack spacing={3}>
        <Typography color="primary" fontWeight={700}>
          SchoolPilot · {t("parentPortal")}
        </Typography>
        <Typography variant="h2" component="h1">
          {t("loginIntro")}
        </Typography>
        {query.has("error") ? (
          <Alert severity="error">{t("unavailable")}</Alert>
        ) : null}
        <Box>
          <Button
            variant="contained"
            size="large"
            component="a"
            href="/auth/login"
          >
            {t("secureSignIn")}
          </Button>
        </Box>
        <Stack direction="row">
          <Button onClick={switchLocale}>{t("language")}</Button>
          <Button onClick={toggleMode}>{t("theme")}</Button>
        </Stack>
      </Stack>
    </Container>
  );
}
