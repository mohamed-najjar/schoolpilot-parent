"use client";
import { Button, Container, Stack, Typography, Alert } from "@mui/material";
import { usePreferences } from "@/components/Providers";
import { en, ar } from "./messages";
export default function Authenticated() {
  const { locale, switchLocale } = usePreferences();
  const t = locale === "ar" ? ar : en;
  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Stack spacing={2}>
        <Typography component="h1" variant="h4">
          {t.complete}
        </Typography>
        <Alert severity="success">{t.return}</Alert>
        <Button variant="contained" onClick={() => window.close()}>
          {t.close}
        </Button>
        <Button component="a" href="/family">
          {t.portal}
        </Button>
        <Button onClick={switchLocale}>{t.language}</Button>
      </Stack>
    </Container>
  );
}
