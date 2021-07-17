import styled from "styled-components";
import { NavLink } from "react-router-dom";

import {
  buttonBackgroundColor,
  buttonMargin,
  buttonTextColor,
} from "./helpers";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #eee;
  padding: 1rem 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin: 0;
  color: #53a318;
  text-transform: uppercase;
  text-align: center;
`;

export const ViewHead = styled.h2`
  text-align: center;
  margin: 2rem 0 1rem;
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
  background-color: #f5f5f5;
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
`;

export const CenteredTextField = styled(TextField)`
  text-align: center;
`;

export const SelectBox = styled.select`
  width: 100%;
  background-color: #f5f5f5;
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
`;

export const CenteredSelectBox = styled(SelectBox)`
  text-align: center;
`;

export const ModalHead = styled.h3`
  margin-bottom: 1rem;
  text-align: center;
`;

export const FixedFooter = styled.footer`
  width: 100%;
  background-color: #eee;
  padding: 1rem 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 0;
`;

export const BottomNav = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

export const BottomNavItem = styled.li`
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
`;

export const BottomNavLink = styled(NavLink)`
  color: #888;
  text-decoration: none;
`;

export const BottomNavIcon = styled.div``;
