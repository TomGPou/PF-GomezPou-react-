import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#f1910f",
      dark: "#e7780b",
    },
    secondary: {
      main: "#f7ff58",
      light: "#f7ff58",
    },
    light: {
      main: "#f9f8ea",
    },
    dark: {
      main: "#5e565a",
    },
  },
  typography: {
    h4: {
      color: "#5e565a",
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          '&[role="menu"]': {
            backgroundColor: "#f9f8ea",
          },
        },
      },
    },
  },
});
