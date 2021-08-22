import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useContext } from "react";

import { CouponContext } from "../../context/CouponContext";

const useStyles = makeStyles({
  root: {
    border: "3px dashed #297AA3",
    marginBottom: (props) => (props.last ? "0" : "1rem"),
  },
  redeemed: {
    border: "2px dashed #666",
    color: "#666",
    marginBottom: (props) => (props.last ? "0" : "1rem"),
  },
  header: {
    textAlign: "left",
  },
});

const Coupon = ({ coupon, redeemed, last }) => {
  const classes = useStyles({ last });
  const { redeem } = useContext(CouponContext);

  const actions = redeemed ? null : (
    <CardActions>
      <Button size="small" color="primary" onClick={() => redeem(coupon.id)}>
        &#128504; Redeem
      </Button>
    </CardActions>
  );

  return (
    <Card
      className={redeemed ? classes.redeemed : classes.root}
      variant="outlined"
    >
      <CardContent>
        <Typography className={classes.header} variant="h4">
          {coupon.title}
        </Typography>
        <Typography variant="body2">{coupon.text}</Typography>
      </CardContent>
      {actions}
    </Card>
  );
};

export default Coupon;
