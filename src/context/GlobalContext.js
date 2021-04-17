import { createContext } from "react";
import { createGlobalStyle } from "styled-components";
import Login from "../components/Login";
import useLocalStorage from "../hooks/useLocalStorage";

const GlobalSyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
    color: #333;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
`;

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useLocalStorage("auth");

  const app = !authenticated ? <Login /> : children;

  return (
    <GlobalContext.Provider value={{ setAuthenticated }}>
      <GlobalSyle />
      {app}
    </GlobalContext.Provider>
  );
};
