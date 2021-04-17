import { useContext } from "react";
import { CouponContext } from "../context/CouponContext";
import {
  CouponCard,
  CouponDesc,
  CouponHead,
  CouponText,
  Redeem,
} from "../styles";

const Coupon = ({ coupon, index }) => {
  const { redeem } = useContext(CouponContext);

  return (
    <CouponCard>
      <CouponText>
        <CouponHead>{coupon.title}</CouponHead>
        <CouponDesc>{coupon.text}</CouponDesc>
      </CouponText>
      <Redeem onClick={() => redeem(index)} redeemed={coupon.redeemed}>
        &#128504; Redeem
      </Redeem>
    </CouponCard>
  );
};

export default Coupon;
