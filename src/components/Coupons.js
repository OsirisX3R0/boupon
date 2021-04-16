import { useContext } from "react";
import { CouponContext } from "../context/CouponContext";
import {
  Coupon,
  CouponContainer,
  CouponDesc,
  CouponHead,
  CouponText,
  OldHead,
  Redeem,
} from "../styles";

const Coupons = ({ old }) => {
  const { coupons, redeem } = useContext(CouponContext);

  const oldHead = old && <OldHead>Old Coupons</OldHead>;

  const couponList =
    coupons &&
    coupons.length &&
    coupons
      .filter((c) => (old ? c.redeemed : !c.redeemed))
      .map((coupon, i) => (
        <Coupon key={i}>
          <CouponText>
            <CouponHead>{coupon.title}</CouponHead>
            <CouponDesc>{coupon.text}</CouponDesc>
          </CouponText>
          <Redeem onClick={() => redeem(i)} redeemed={coupon.redeemed}>
            &#128504; Redeem
          </Redeem>
        </Coupon>
      ));

  return (
    <CouponContainer>
      {oldHead}
      {couponList}
    </CouponContainer>
  );
};

export default Coupons;
