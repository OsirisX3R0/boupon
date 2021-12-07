import { createContext, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import useLocalStorage from "../hooks/useLocalStorage";
import Theme from "../theme";
import { useRouter } from "next/router";
/// REACT ROUTER REFACTOR HERE

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const router = useRouter();
  const [key, setKey, removeKey] = useLocalStorage("boupon.key");
  const [id, setId, removeId] = useLocalStorage("boupon.id");
  const [name, setName, removeName] = useLocalStorage("boupon.name");
  const [colorTheme, setColorTheme] = useLocalStorage(
    "boupon.settings.theme",
    "default"
  );
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        if (key && name && id) router.push("/coupons");
        break;
      default:
        if (!key || !name || !id) router.push("/");
    }
  }, [router, key, name, id]);

  const logout = () => {
    removeKey();
    removeId();
    removeName();
    router.reload(window.location.pathname);
  };

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
        logout,
      }}
    >
      <Theme>{children}</Theme>
    </GlobalContext.Provider>
  );
};
