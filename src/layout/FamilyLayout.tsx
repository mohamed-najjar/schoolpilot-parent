"use client";
import { useState } from "react";
import SchoolAccessNotice from "@/components/SchoolAccessNotice";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Box,
  Stack,
  Typography,
  Toolbar,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Container,
  Tooltip,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Element3,
  People,
  TickSquare,
  Book,
  Chart,
  Message,
  HambergerMenu,
  CloseCircle,
  Moon,
  Sun1,
} from "@wandersonalwes/iconsax-react";
import AppBarStyled from "@/layout/DashboardLayout/Header/AppBarStyled";
import { useT, usePreferences } from "@/components/Providers";
import {
  FamilyProvider,
  useFamily,
  childQuery,
} from "@/features/family/Context";
const navigation = [
  ["family", Element3],
  ["children", People],
  ["attendance", TickSquare],
  ["homework", Book],
  ["results", Chart],
  ["messages", Message],
] as const;
export default function FamilyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FamilyProvider>
      <Shell>{children}</Shell>
    </FamilyProvider>
  );
}
function Shell({ children }: { children: React.ReactNode }) {
  const t = useT(),
    path = usePathname(),
    router = useRouter(),
    query = useSearchParams();
  const { locale, switchLocale, mode, toggleMode } = usePreferences();
  const family = useFamily();
  const mobile = useMediaQuery("(max-width:1099px)");
  const [open, setOpen] = useState(false);
  const section = path.split("/")[1];
  const suffix =
    query.get("school") && query.get("child")
      ? childQuery(query.get("school")!, query.get("child")!)
      : "";
  const menu = (
    <>
      <Box sx={{ p: 3 }}>
        <Typography fontWeight={800} variant="h4" component="p" color="primary">
          SchoolPilot<span style={{ fontWeight: 400 }}> · </span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("parentPortal")}
        </Typography>
        {mobile ? (
          <IconButton
            aria-label={t("closeNavigation")}
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", insetInlineEnd: 8, top: 12 }}
          >
            <CloseCircle />
          </IconButton>
        ) : null}
      </Box>
      <List
        component="nav"
        aria-label={t("parentPortal")}
        sx={{ px: 1.5, flex: 1, overflowY: "auto" }}
      >
        {navigation.map(([key, Icon]) => (
          <ListItemButton
            key={key}
            component={Link}
            prefetch={false}
            href={"/" + key + suffix}
            selected={section === key}
            aria-current={section === key ? "page" : undefined}
            onClick={() => setOpen(false)}
            sx={{ borderRadius: 2, mb: 0.75, gap: 1.5, py: 1.5 }}
          >
            <Icon size={21} aria-hidden />
            <ListItemText primary={t(key)} />
          </ListItemButton>
        ))}
      </List>
      <Stack sx={{ p: 2 }} spacing={0.5}>
        <Button
          component={Link}
          prefetch={false}
          href={"/notifications" + suffix}
        >
          {t("notifications")}
        </Button>
        <Button component={Link} prefetch={false} href={"/profile" + suffix}>
          {t("profile")}
        </Button>
        <form action="/auth/logout" method="post">
          <Button fullWidth type="submit">
            {t("logout")}
          </Button>
        </form>
      </Stack>
    </>
  );
  return (
    <>
      <a className="skip-link" href="#main">
        {t("skip")}
      </a>
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <AppBarStyled
          position="fixed"
          open={!mobile}
          sx={{
            bgcolor: "background.paper",
            color: "text.primary",
            boxShadow: "none",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Toolbar
            sx={{
              minHeight: "72px !important",
              gap: 0.5,
              px: { xs: 1, sm: 3 },
            }}
          >
            {mobile ? (
              <IconButton aria-label={t("menu")} onClick={() => setOpen(true)}>
                <HambergerMenu />
              </IconButton>
            ) : null}
            <Typography
              sx={{
                flex: 1,
                minWidth: 0,
                fontWeight: 700,
                fontSize: { xs: 14, sm: 17 },
              }}
            >
              {t("familySpace")}
            </Typography>
            <Button aria-label={t("language")} onClick={switchLocale}>
              {t("language")}
            </Button>
            <Tooltip title={t("theme")}>
              <IconButton aria-label={t("theme")} onClick={toggleMode}>
                {mode === "light" ? <Moon size={20} /> : <Sun1 size={20} />}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBarStyled>
        <Drawer
          anchor="left"
          variant={mobile ? "temporary" : "permanent"}
          open={!mobile || open}
          onClose={() => setOpen(false)}
          sx={{ width: mobile ? 0 : 264, flexShrink: 0 }}
          slotProps={{
            paper: {
              sx: {
                width: 264,
                maxWidth: "calc(100vw - 24px)",
                display: "flex",
                flexDirection: "column",
              },
            },
          }}
        >
          {menu}
        </Drawer>
        <Box
          component="main"
          id="main"
          tabIndex={-1}
          sx={{
            flex: 1,
            minWidth: 0,
            px: { xs: 1.5, sm: 3, lg: 4 },
            pb: 4,
            pt: "96px",
          }}
        >
          <Container maxWidth="xl" disableGutters>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
                mb: 3,
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {t("allSchools")}
              </Typography>
              {family.all.length ? (
                <FormControl
                  size="small"
                  sx={{ minWidth: 180, maxWidth: "100%" }}
                >
                  <InputLabel id="child-switch-label">
                    {t("chooseChild")}
                  </InputLabel>
                  <Select
                    labelId="child-switch-label"
                    label={t("chooseChild")}
                    value={
                      family.all.some(
                        (x) =>
                          x.school.id === family.selected?.schoolId &&
                          x.child.id === family.selected?.childId,
                      )
                        ? family.selected!.schoolId +
                          ":" +
                          family.selected!.childId
                        : ""
                    }
                    onChange={(e) => {
                      const [school, child] = e.target.value.split(":");
                      router.push(path + childQuery(school, child));
                    }}
                  >
                    {family.all.map(({ school, child }) => (
                      <MenuItem
                        key={school.id + child.id}
                        value={school.id + ":" + child.id}
                      >
                        {locale === "ar" && child.first_name_ar
                          ? child.first_name_ar + " " + child.last_name_ar
                          : child.first_name + " " + child.last_name}{" "}
                        ·{" "}
                        {locale === "ar" && school.name_ar
                          ? school.name_ar
                          : school.name_en}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : null}
            </Box>
            <SchoolAccessNotice
              school={
                !family.invalid &&
                family.all.some(
                  (x) =>
                    x.school.id === family.selected?.schoolId &&
                    x.child.id === family.selected?.childId,
                )
                  ? family.selected?.schoolId
                  : undefined
              }
            />
            {children}
            <Typography
              component="footer"
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mt: 6 }}
            >
              SchoolPilot · {t("parentPortal")}
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  );
}
