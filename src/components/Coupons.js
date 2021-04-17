import { useContext } from "react";
import { CouponContext } from "../context/CouponContext";
import { CouponContainer, OldHead } from "../styles";
import Coupon from "./Coupon";

const Coupons = ({ old }) => {
  const { coupons } = useContext(CouponContext);

  const oldHead = old && <OldHead>Redeemed Coupons</OldHead>;

  const couponList =
    coupons &&
    coupons.length &&
    coupons
      .filter((c) => (old ? c.redeemed : !c.redeemed))
      .map((coupon, i) => <Coupon coupon={coupon} index={i} key={i} />);

  return (
    <CouponContainer>
      {oldHead}
      {couponList}
    </CouponContainer>
  );
};

export default Coupons;
