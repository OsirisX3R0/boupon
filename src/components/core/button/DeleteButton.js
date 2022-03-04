import { IconButton } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Delete } from "@material-ui/icons";

const DeleteButton = (props) => (
  <IconButton sx={{ color: red[700] }} {...props}>
    <Delete />
  </IconButton>
);

export default DeleteButton;
