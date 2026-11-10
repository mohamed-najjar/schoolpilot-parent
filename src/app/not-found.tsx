"use client";
import { Container, Typography, Button } from "@mui/material";
import { useT } from "@/components/Providers";
export default function NotFound() {
  const t = useT();
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4">{t("notFound")}</Typography>
      <Button href="/family">{t("backFamily")}</Button>
    </Container>
  );
}
