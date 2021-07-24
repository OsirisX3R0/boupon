import { withStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Delete } from "@material-ui/icons";

const ColorButton = withStyles(() => ({
  root: {
    color: red[700],
  },
}))(IconButton);

const DeleteButton = (props) => (
  <ColorButton {...props}>
    <Delete />
  </ColorButton>
);

export default DeleteButton;
