import { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import useRedirect from "../hooks/useRedirect";
import Theme from "../theme";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [key, setKey] = useLocalStorage("boupon.key");
  const [name, setName] = useLocalStorage("boupon.name");
  const [auth, setAuth] = useLocalStorage("auth");
  useRedirect(key, name);

  return (
    <GlobalContext.Provider
      value={{ key, setKey, name, setName, auth, setAuth }}
    >
      <Theme>{children}</Theme>
    </GlobalContext.Provider>
  );
};
