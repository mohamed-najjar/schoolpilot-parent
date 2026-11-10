// Adapts Able Pro theme, React Intl and App Router Emotion integration.
"use client";
import { createContext, useContext, useMemo, useState } from "react";
import { IntlProvider, useIntl } from "react-intl";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { NextAppDirEmotionCacheProvider } from "@/themes/emotionCache";
import Typography from "@/themes/typography";
import { branding } from "@/config/branding";
import { en, ar, type MessageID } from "@/lib/i18n/messages";
const Preferences = createContext({
  locale: "en",
  switchLocale: () => {},
  mode: "light",
  toggleMode: () => {},
});
export const usePreferences = () => useContext(Preferences);
export function useT() {
  const intl = useIntl();
  return (id: MessageID) => intl.formatMessage({ id });
}
export default function Providers({
  locale: initialLocale,
  initialMode = "light",
  children,
}: {
  locale: "en" | "ar";
  initialMode?: "light" | "dark";
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState(initialLocale);
  const [mode, setMode] = useState<"light" | "dark">(initialMode);
  const switchLocale = () => {
    const next = locale === "ar" ? "en" : "ar";
    document.cookie = `schoolpilot-parent-locale=${next}; Path=/; SameSite=Lax; Max-Age=31536000`;
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    setLocale(next);
  };
  const cacheOptions = useMemo(
    () => ({
      key: locale === "ar" ? "sp-rtl" : "sp",
      stylisPlugins: locale === "ar" ? [prefixer, rtlPlugin] : [prefixer],
    }),
    [locale],
  );
  const theme = useMemo(
    () =>
      createTheme({
        direction: locale === "ar" ? "rtl" : "ltr",
        typography: Typography(
          locale === "ar" ? branding.arabicFont : branding.font,
        ),
        palette: {
          mode,
          primary: {
            main: mode === "dark" ? branding.primaryDark : branding.primary,
          },
          background: {
            default:
              mode === "dark" ? branding.darkBackground : branding.background,
          },
        },
        shape: { borderRadius: 8 },
        components: {
          MuiButton: {
            defaultProps: { disableElevation: true },
            styleOverrides: {
              root: {
                textTransform: "none",
                fontWeight: 600,
                minHeight: 44,
                overflowWrap: "anywhere",
              },
            },
          },
          MuiIconButton: {
            styleOverrides: { root: { minWidth: 44, minHeight: 44 } },
          },
          MuiMenuItem: {
            styleOverrides: {
              root: {
                minHeight: 44,
                whiteSpace: "normal",
                overflowWrap: "anywhere",
              },
            },
          },
          MuiTypography: {
            styleOverrides: { root: { overflowWrap: "anywhere" } },
          },
          MuiSelect: {
            styleOverrides: {
              select: {
                whiteSpace: "normal",
                overflowWrap: "anywhere",
                minHeight: "1.5em !important",
              },
            },
          },
          MuiDialog: {
            defaultProps: { dir: locale === "ar" ? "rtl" : "ltr" },
            styleOverrides: {
              paper: {
                "@media (max-width:599px)": {
                  margin: 12,
                  maxWidth: "calc(100% - 24px)",
                  width: "calc(100% - 24px)",
                },
              },
            },
          },
          MuiMenu: { defaultProps: { dir: locale === "ar" ? "rtl" : "ltr" } },
          MuiPopover: {
            defaultProps: { dir: locale === "ar" ? "rtl" : "ltr" },
          },
          MuiTooltip: {
            defaultProps: { dir: locale === "ar" ? "rtl" : "ltr" },
          },
          MuiDialogActions: {
            styleOverrides: { root: { flexWrap: "wrap", gap: 4, padding: 16 } },
          },
          MuiDialogContent: { styleOverrides: { root: { padding: 16 } } },
          MuiCardContent: {
            styleOverrides: {
              root: { padding: 16, "&:last-child": { paddingBottom: 16 } },
            },
          },
          MuiInputBase: { styleOverrides: { root: { minWidth: 0 } } },
          MuiTableCell: {
            styleOverrides: {
              head: { fontWeight: 600 },
              root: { padding: "16px" },
            },
          },
          MuiCardHeader: { styleOverrides: { root: { padding: "20px 24px" } } },
        },
      }),
    [locale, mode],
  );
  return (
    <Preferences.Provider
      value={{
        locale,
        switchLocale,
        mode,
        toggleMode: () => {
          const next = mode === "dark" ? "light" : "dark";
          document.cookie = `schoolpilot-parent-mode=${next}; Path=/; SameSite=Lax; Max-Age=31536000`;
          setMode(next);
        },
      }}
    >
      <IntlProvider locale={locale} messages={locale === "ar" ? ar : en}>
        <NextAppDirEmotionCacheProvider options={cacheOptions}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
      </IntlProvider>
    </Preferences.Provider>
  );
}
