import { createContext } from "react";
import { createGlobalStyle } from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";
import useRedirect from "../hooks/useRedirect";

const GlobalSyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f5f5f5;
    color: #333;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
`;

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
      <GlobalSyle />
      {children}
    </GlobalContext.Provider>
  );
};
