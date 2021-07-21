import { useContext } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Select,
  MenuItem,
} from "@material-ui/core";

import { GlobalContext } from "../../context/GlobalContext";

const Settings = () => {
  const { colorTheme, setColorTheme } = useContext(GlobalContext);

  return (
    <List>
      <ListItem>
        <ListItemText>Theme</ListItemText>
        <ListItemSecondaryAction>
          <Select
            value={colorTheme}
            onChange={(e) => setColorTheme(e.target.value)}
          >
            <MenuItem value={"light"}>Light</MenuItem>
            <MenuItem value={"dark"}>Dark</MenuItem>
            <MenuItem value={"default"}>Default</MenuItem>
          </Select>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default Settings;
