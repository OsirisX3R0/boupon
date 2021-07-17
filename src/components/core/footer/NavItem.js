import { BottomNavItem, BottomNavLink, BottomNavIcon } from "../../../styles";

const NavItem = ({ Icon, path, children }) => {
  return (
    <BottomNavLink to={path}>
      <BottomNavItem>
        <BottomNavIcon>
          <Icon size="1.2rem" />
        </BottomNavIcon>
        {children}
      </BottomNavItem>
    </BottomNavLink>
  );
};

export default NavItem;
