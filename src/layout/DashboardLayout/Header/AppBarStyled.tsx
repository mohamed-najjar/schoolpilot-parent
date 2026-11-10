import { styled } from "@mui/material/styles";
import AppBar, { AppBarProps } from "@mui/material/AppBar";
import { branding } from "@/config/branding";
const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps & { open?: boolean }>(({ theme, open }) => ({
  zIndex: theme.zIndex.appBar,
  margin: 0,
  left: "auto",
  right: "auto",
  insetInlineStart: open ? branding.drawerWidth : 0,
  insetInlineEnd: 0,
  width: "auto",
}));
export default AppBarStyled;
