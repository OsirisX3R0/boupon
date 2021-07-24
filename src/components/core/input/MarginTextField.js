import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: (props) => props.top || 0,
    marginRight: (props) => props.right || 0,
    marginLeft: (props) => props.left || 0,
    marginBottom: (props) => props.bottom || 0,
    textAlign: (props) => (props.centered ? "center" : "left"),
  },
});

const MarginButton = ({ top, right, left, bottom, centered, ...props }) => {
  const styleProps = { top, right, left, bottom, centered };
  const classes = useStyles(styleProps);
  return <TextField {...props} className={classes.root} />;
};

export default MarginButton;
