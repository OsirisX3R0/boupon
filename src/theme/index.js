import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: "#53a318",
    },
    secondary: {
      main: "#297AA3",
    },
    light: {
      main: "#eee",
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
});

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
