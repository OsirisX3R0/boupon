import { createContext } from "react";
import { createGlobalStyle } from "styled-components";
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
  const [auth, setAuth] = useLocalStorage("auth");

  return (
    <GlobalContext.Provider value={{ auth, setAuth }}>
      <GlobalSyle />
      {children}
    </GlobalContext.Provider>
  );
};
