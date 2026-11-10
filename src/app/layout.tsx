import type { Metadata } from "next";
import { cookies } from "next/headers";
import Providers from "@/components/Providers";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "SchoolPilot", template: "%s | SchoolPilot" },
  description: "SchoolPilot Family Portal",
};
export const dynamic = "force-dynamic";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale =
    (await cookies()).get("schoolpilot-parent-locale")?.value === "ar"
      ? "ar"
      : "en";
  const mode =
    (await cookies()).get("schoolpilot-parent-mode")?.value === "dark"
      ? "dark"
      : "light";
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body>
        <Providers locale={locale} initialMode={mode}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
