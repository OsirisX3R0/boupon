import { createContext, useEffect } from "react";
import { useRouter } from "next/router";

import useLocalStorage from "../hooks/useLocalStorage";

export const GlobalContext = createContext();

export const GlobalProvider = ({ colorTheme, setColorTheme, children }) => {
  const router = useRouter();
  const [key, setKey, removeKey] = useLocalStorage("boupon.key");
  const [id, setId, removeId] = useLocalStorage("boupon.id");
  const [name, setName, removeName] = useLocalStorage("boupon.name");

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
        logout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
