import { useContext } from "react";
import { CouponContext } from "../context/CouponContext";
import {
  Coupon,
  CouponContainer,
  CouponDesc,
  CouponHead,
  CouponText,
  Redeem,
} from "../styles";

const Coupons = () => {
  const { coupons } = useContext(CouponContext);

  const couponList =
    coupons &&
    coupons.length &&
    coupons.map((coupon, i) => (
      <Coupon key={i}>
        <CouponText>
          <CouponHead>{coupon.title}</CouponHead>
          <CouponDesc>{coupon.text}</CouponDesc>
        </CouponText>
        <Redeem>&#128504; Redeem</Redeem>
      </Coupon>
    ));

  return <CouponContainer>{couponList}</CouponContainer>;
};

export default Coupons;
