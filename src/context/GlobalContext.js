import { createContext } from "react";

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
  useRedirect(key, name);

  return (
    <GlobalContext.Provider
      value={{ key, setKey, name, setName, colorTheme, setColorTheme }}
    >
      <Theme>{children}</Theme>
    </GlobalContext.Provider>
  );
};
