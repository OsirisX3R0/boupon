import { FaUsers, FaCog } from "react-icons/fa";

import { BottomNav } from "../../../styles";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <nav>
      <BottomNav>
        <NavItem Icon={FaUsers}>Users</NavItem>
        <NavItem Icon={FaCog}>Settings</NavItem>
      </BottomNav>
    </nav>
  );
};

export default Nav;
