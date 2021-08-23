import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useContext } from "react";

import { CouponContext } from "../../context/CouponContext";
import Coupon from "./Coupon";

const useStyles = makeStyles({
  root: {
    marginBottom: (props) => (props.redeemed ? "72px" : ""),
  },
  none: {
    color: "#bbb",
    textAlign: "center",
  },
});

const Coupons = ({ redeemed }) => {
  const classes = useStyles({ redeemed });
  const { coupons } = useContext(CouponContext);
  const oldHead = redeemed && (
    <Typography variant="h5">Redeemed Coupons</Typography>
  );

  const couponList =
    coupons && coupons.length
      ? coupons
          .filter((c) => (redeemed ? c.redeemed : !c.redeemed))
          .map((coupon, i) => (
            <Coupon
              coupon={coupon}
              key={coupon.id}
              redeemed={redeemed}
              last={i === coupons.length - 1}
            />
          ))
      : null;

  const noCoupons =
    (!redeemed && coupons.every((c) => c.redeemed)) ||
    (redeemed && coupons.every((c) => !c.redeemed)) ? (
      <Typography className={classes.none} variant="subtitle1">
        No Coupons
      </Typography>
    ) : null;

  return (
    <Container className={classes.root}>
      {oldHead}
      {couponList}
      {noCoupons}
    </Container>
  );
};

export default Coupons;
