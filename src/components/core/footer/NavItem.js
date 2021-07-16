import { BottomNavItem, BottomNavIcon } from "../../../styles";

const NavItem = ({ Icon, children }) => {
  return (
    <BottomNavItem>
      <BottomNavIcon>
        <Icon size="1.2rem" />
      </BottomNavIcon>
      {children}
    </BottomNavItem>
  );
};

export default NavItem;
