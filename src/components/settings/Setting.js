import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";

const Setting = ({ title, children }) => {
  return (
    <ListItem>
      <ListItemText>{title}</ListItemText>
      <ListItemSecondaryAction>{children}</ListItemSecondaryAction>
    </ListItem>
  );
};

export default Setting;
