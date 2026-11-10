"use client";
import { usePreferences } from "@/components/Providers";
// Normalize keyboard digits as strings. Domain arithmetic stays in the Go backend.
export function canonicalDecimal(value: string) {
  return value
    .trim()
    .replace(/[٠-٩]/g, (c) => String(c.charCodeAt(0) - 0x660))
    .replace(/[۰-۹]/g, (c) => String(c.charCodeAt(0) - 0x6f0))
    .replace(/٫/g, ".")
    .replace(/−/g, "-");
}
export function Decimal({ value }: { value: string | null | undefined }) {
  const { locale } = usePreferences();
  const text = value ?? "—";
  return (
    <bdi>
      {locale === "ar"
        ? text
            .replace(/[0-9]/g, (c) => "٠١٢٣٤٥٦٧٨٩"[Number(c)])
            .replace(/\./g, "٫")
        : text}
    </bdi>
  );
}
