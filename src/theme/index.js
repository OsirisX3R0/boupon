import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useContext, useMemo } from "react";

import { GlobalContext } from "../context/GlobalContext";

const Theme = ({ children }) => {
  const { colorTheme, prefersDarkMode } = useContext(GlobalContext);

  const theme = useMemo(
    () =>
      createTheme({
        spacing: 8,
        palette: {
          type:
            colorTheme === "dark" ||
            (colorTheme === "default" && prefersDarkMode)
              ? "dark"
              : "light",
          primary: {
            main: "#53a318",
          },
          secondary: {
            main: "#297AA3",
          },
          light: {
            main: "#eee",
          },
          dark: {
            main: "#333",
          },
        },
        typography: {
          fontFamily: ["Montserrat"].join(","),
          h1: {
            color: "#eee",
            textTransform: "uppercase",
            fontSize: "2.5rem",
            fontWeight: 600,
            textAlign: "center",
            margin: "1rem 0",
          },
          h2: {
            fontSize: "2.5rem",
            fontWeight: 400,
            textAlign: "center",
            margin: "2rem 0",
          },
          h3: {
            fontSize: "2rem",
            fontWeight: 500,
            textAlign: "center",
            margin: "2rem 0",
          },
        },
        overrides: {
          MuiBottomNavigation: {
            root: {
              width: "100%",
              position: "fixed",
              bottom: 0,
            },
          },
        },
      }),
    [colorTheme, prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
