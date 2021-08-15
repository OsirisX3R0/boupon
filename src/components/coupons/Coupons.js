import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Coupon from "./Coupon";

const useStyles = makeStyles({
  none: {
    color: "#bbb",
    textAlign: "center",
  },
});

const Coupons = ({ coupons, redeemed }) => {
  const classes = useStyles();

  const oldHead = redeemed && (
    <Typography variant="h5">Redeemed Coupons</Typography>
  );

  const couponList =
    coupons &&
    coupons.length &&
    coupons
      .filter((c) => (redeemed ? c.redeemed : !c.redeemed))
      .map((coupon) => (
        <Coupon coupon={coupon} key={coupon.id} redeemed={redeemed} />
      ));

  const noCoupons = ((!redeemed && coupons.every((c) => c.redeemed)) ||
    (redeemed && coupons.every((c) => !c.redeemed))) && (
    <Typography className={classes.none} variant="subtitle1">
      No Coupons
    </Typography>
  );

  return (
    <Container>
      {oldHead}
      {couponList}
      {noCoupons}
    </Container>
  );
};

export default Coupons;
