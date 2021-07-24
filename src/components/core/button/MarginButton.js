import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: (props) => props.top || 0,
    marginRight: (props) => props.right || 0,
    marginLeft: (props) => props.left || 0,
    marginBottom: (props) => props.bottom || 0,
  },
});

const MarginButton = ({ children, ...props }) => {
  const classes = useStyles(props);
  return (
    <Button {...props} className={classes.root}>
      {children}
    </Button>
  );
};

export default MarginButton;
