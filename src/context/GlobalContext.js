import { createContext } from "react";
import { createGlobalStyle } from "styled-components";
// import Login from "../components/Login";
// import Admin from "../components/Admin";
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
  const [key, setKey] = useLocalStorage("bouponKey");
  const [name, setName] = useLocalStorage("bouponName");
  const [auth, setAuth] = useLocalStorage("auth");
  useRedirect(key, name);

  // const app = !auth ? <Login /> : auth === "admin" ? <Admin /> : children;

  return (
    <GlobalContext.Provider
      value={{ key, setKey, name, setName, auth, setAuth }}
    >
      <GlobalSyle />
      {children}
    </GlobalContext.Provider>
  );
};
