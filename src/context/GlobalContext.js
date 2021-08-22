import { createContext, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import useLocalStorage from "../hooks/useLocalStorage";
import Theme from "../theme";
import { useHistory } from "react-router";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const history = useHistory();
  const [key, setKey] = useLocalStorage("boupon.key");
  const [id, setId] = useLocalStorage("boupon.id");
  const [name, setName] = useLocalStorage("boupon.name");
  const [colorTheme, setColorTheme] = useLocalStorage(
    "boupon.settings.theme",
    "default"
  );
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    switch (history.location.pathname) {
      case "/":
        if (key && name) history.push("/coupons");
        break;
      default:
        if (!key || !name) history.push("/");
    }
  }, [history, key, name]);

  return (
    <GlobalContext.Provider
      value={{
        key,
        setKey,
        id,
        setId,
        name,
        setName,
        colorTheme,
        setColorTheme,
        prefersDarkMode,
      }}
    >
      <Theme>{children}</Theme>
    </GlobalContext.Provider>
  );
};
