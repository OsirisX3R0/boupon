import { useContext } from "react";
import { CouponContext } from "../context/CouponContext";
import { Coupon, CouponContainer } from "../styles";

const Coupons = () => {
  const { coupons } = useContext(CouponContext);

  const couponList =
    coupons &&
    coupons.length &&
    coupons.map((coupon) => (
      <Coupon>
        <h3>{coupon.title}</h3>
        <p>{coupon.text}</p>
      </Coupon>
    ));

  return <CouponContainer>{couponList}</CouponContainer>;
};

export default Coupons;
