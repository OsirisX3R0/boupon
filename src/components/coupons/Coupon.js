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
  },
  redeemed: {
    border: "2px dashed #666",
    color: "#666",
  },
  header: {
    textAlign: "left",
  },
});

const Coupon = ({ coupon, redeemed }) => {
  const classes = useStyles();
  const { redeem } = useContext(CouponContext);

  const actions = redeemed ? null : (
    <CardActions>
      <Button
        size="small"
        color="primary"
        onClick={() => redeem(coupon.id)}
        redeemed={coupon.redeemed}
      >
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
