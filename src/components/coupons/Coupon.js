import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useContext, useMemo } from "react";

import { CouponContext } from "../../context/CouponContext";

const Coupon = ({ coupon, redeemed, last }) => {
  const { redeem } = useContext(CouponContext);
  const couponClass = useMemo(
    () => ({
      border: redeemed ? "2px dashed #666" : "3px dashed #297AA3",
      ...(redeemed ? { color: "#666" } : {}),
      marginBottom: last ? "0" : "1rem",
    }),
    [redeemed, last]
  );

  const actions = redeemed ? null : (
    <CardActions>
      <Button size="small" color="primary" onClick={() => redeem(coupon.id)}>
        &#128504; Redeem
      </Button>
    </CardActions>
  );

  return (
    <Card
      // className={redeemed ? classes.redeemed : classes.root}
      className={couponClass}
      variant="outlined"
    >
      <CardContent>
        <Typography className={{ textAlign: "left" }} variant="h4">
          {coupon.title}
        </Typography>
        <Typography variant="body2">{coupon.text}</Typography>
      </CardContent>
      {actions}
    </Card>
  );
};

export default Coupon;
