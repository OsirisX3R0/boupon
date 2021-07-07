import styled from "styled-components";
import {
  buttonBackgroundColor,
  buttonMargin,
  buttonTextColor,
} from "./helpers";

export const Title = styled.h1`
  background-color: #eee;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  width: 100%;
  margin: 0;
  padding: 1rem 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  color: #53a318;
  text-transform: uppercase;
  text-align: center;
  position: sticky;
  top: 0;
`;

export const Button = styled.button`
  background-color: ${(props) => buttonBackgroundColor(props)};
  color: ${(props) => buttonTextColor(props)};
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  outline: none;
  transition: 0.2s;
  padding: 0.75rem;
  cursor: pointer;
  margin: ${(props) => buttonMargin(props)};

  &:hover {
    background-color: darken(${(props) => buttonBackgroundColor(props)}, 25%);
  }
`;

export const BlockButton = styled(Button)`
  width: 100%;
`;

export const TextField = styled.input`
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
`;

export const CenteredTextField = styled(TextField)`
  text-align: center;
`;
