import { FaUsers, FaCog } from "react-icons/fa";

import { BottomNav } from "../../../styles";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <nav>
      <BottomNav>
        <NavItem path="/users" Icon={FaUsers}>
          Users
        </NavItem>
        <NavItem path="/settings" Icon={FaCog}>
          Settings
        </NavItem>
      </BottomNav>
    </nav>
  );
};

export default Nav;
