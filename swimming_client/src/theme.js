import { createTheme } from "@mui/material/styles";

export const tokens = {
  primary: "#ce4032",
  secondary: "#123B70",
  white: "#FFFFFF",
  darkNavy: "#0E274D",
  lightGray: "#F2F4F7",
};

export const getTheme = (mode = "light") =>
  createTheme({
    direction: "rtl",
    palette: {
      mode,
      primary: { main: tokens.primary },
      secondary: { main: tokens.secondary },
      background: {
        default: mode === "light" ? tokens.lightGray : "#0B152B",
        paper: mode === "light" ? tokens.white : "#0F1F3E",
      },
    },
    typography: {
      fontFamily: ['Heebo', 'Assistant', 'Rubik', 'Arial', 'sans-serif'].join(','),
      h1: { fontWeight: 800 },
      h2: { fontWeight: 700 },
      button: { textTransform: 'none', fontWeight: 700 },
    },
    shape: { borderRadius: 16 },
    components: {
      MuiButton: { defaultProps: { size: 'large' } },
      MuiLink: { styleOverrides: { root: { cursor: 'pointer' } } },
    },
  });