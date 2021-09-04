import { useContext } from "react";
import { Select, MenuItem } from "@material-ui/core";

import { GlobalContext } from "../../context/GlobalContext";
import SettingsList from "./SettingsList";
import Setting from "./Setting";

const Settings = () => {
  const { colorTheme, setColorTheme } = useContext(GlobalContext);

  return (
    <SettingsList>
      <Setting title="Theme">
        <Select
          value={colorTheme}
          onChange={(e) => setColorTheme(e.target.value)}
        >
          <MenuItem value={"light"}>Light</MenuItem>
          <MenuItem value={"dark"}>Dark</MenuItem>
          <MenuItem value={"default"}>Default</MenuItem>
        </Select>
      </Setting>
    </SettingsList>
  );
};

export default Settings;
