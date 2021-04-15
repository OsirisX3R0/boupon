import { createContext } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalSyle = createGlobalStyle`
  background-color: #f5f5f5;
  color: #333;
  font-family: Arial;
`;

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => (
  <GlobalContext.Provider value={{}}>
    <GlobalSyle />
    {children}
  </GlobalContext.Provider>
);
