import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useContext, useMemo } from "react";

import { CouponContext } from "../../context/CouponContext";

const Coupon = ({ coupon, redeemed }) => {
  const { redeem } = useContext(CouponContext);

  const couponStyles = useMemo(
    () => ({
      border: redeemed ? "2px dashed #666" : "3px dashed #297AA3",
      ...(redeemed ? { color: "#666" } : {}),
      marginTop: "1rem",
    }),
    [redeemed]
  );

  const actions = redeemed ? null : (
    <CardActions>
      <Button size="small" color="primary" onClick={() => redeem(coupon.id)}>
        &#128504; Redeem
      </Button>
    </CardActions>
  );

  return (
    <Card sx={couponStyles} variant="outlined">
      <CardContent>
        <Typography sx={{ textAlign: "left" }} variant="h4">
          {coupon.title}
        </Typography>
        <Typography variant="body2">{coupon.text}</Typography>
      </CardContent>
      {actions}
    </Card>
  );
};

export default Coupon;
