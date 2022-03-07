import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
  ReceiptOutlined,
  Person,
  Settings,
  ExitToApp,
} from "@material-ui/icons";

import { GlobalContext } from "../../context/GlobalContext";

const FooterNav = () => {
  const router = useRouter();
  const { key, name, logout } = useContext(GlobalContext);
  const [value, setValue] = useState(router.pathname.replace("/", ""));

  const onChange = (_, newValue) => {
    let route = `/${newValue}`;
    setValue(newValue);
    router.push(route);
  };

  const navigation =
    key && name ? (
      <BottomNavigation value={value} onChange={onChange}>
        <BottomNavigationAction
          label="Coupons"
          value="coupons"
          icon={<ReceiptOutlined />}
        />
        <BottomNavigationAction label="Users" value="users" icon={<Person />} />
        <BottomNavigationAction
          label="Settings"
          value="settings"
          icon={<Settings />}
        />
        <BottomNavigationAction
          label="Logout"
          icon={<ExitToApp />}
          onClick={logout}
        />
      </BottomNavigation>
    ) : null;

  return navigation;
};

export default FooterNav;
