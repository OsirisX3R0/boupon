import { useContext } from "react";

import { CouponContext } from "../../context/CouponContext";
import { CouponContainer, NoCoupons, OldHead } from "../../styles";
import Coupon from "./Coupon";

const Coupons = ({ redeemed }) => {
  const { coupons } = useContext(CouponContext);

  const oldHead = redeemed && <OldHead>Redeemed Coupons</OldHead>;

  const couponList =
    coupons &&
    coupons.length &&
    coupons
      .filter((c) => (redeemed ? c.redeemed : !c.redeemed))
      .map((coupon) => <Coupon coupon={coupon} key={coupon.id} />);

  const noCoupons = ((!redeemed && coupons.every((c) => c.redeemed)) ||
    (redeemed && coupons.every((c) => !c.redeemed))) && (
    <NoCoupons>No Coupons</NoCoupons>
  );

  return (
    <CouponContainer>
      {oldHead}
      {couponList}
      {noCoupons}
    </CouponContainer>
  );
};

export default Coupons;
