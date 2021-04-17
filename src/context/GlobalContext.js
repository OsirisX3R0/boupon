import { createContext } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalSyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
    color: #333;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
`;

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => (
  <GlobalContext.Provider value={{}}>
    <GlobalSyle />
    {children}
  </GlobalContext.Provider>
);
