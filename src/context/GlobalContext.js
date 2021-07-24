import { createContext } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import useLocalStorage from "../hooks/useLocalStorage";
import useRedirect from "../hooks/useRedirect";
import Theme from "../theme";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [key, setKey] = useLocalStorage("boupon.key");
  const [name, setName] = useLocalStorage("boupon.name");
  const [colorTheme, setColorTheme] = useLocalStorage(
    "boupon.settings.theme",
    "default"
  );
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  useRedirect(key, name);

  return (
    <GlobalContext.Provider
      value={{
        key,
        setKey,
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
