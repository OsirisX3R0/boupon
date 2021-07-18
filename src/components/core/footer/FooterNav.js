import { useState, useContext } from "react";
// import { FixedFooter } from "../../../styles";
import { useHistory } from "react-router";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, Person, Settings } from "@material-ui/icons";

import { GlobalContext } from "../../../context/GlobalContext";

const FooterNav = () => {
  const history = useHistory();
  const { key, name } = useContext(GlobalContext);
  const [value, setValue] = useState("home");

  const onChange = (event, newValue) => {
    let route = newValue === "home" ? "/" : `/${newValue}`;
    setValue(newValue);
    history.push(route);
  };

  const navigation =
    key && name ? (
      <BottomNavigation value={value} onChange={onChange}>
        <BottomNavigationAction label="Home" value="home" icon={<Home />} />
        <BottomNavigationAction label="Users" value="users" icon={<Person />} />
        <BottomNavigationAction
          label="Settings"
          value="settings"
          icon={<Settings />}
        />
      </BottomNavigation>
    ) : null;

  return navigation;
};

export default FooterNav;
