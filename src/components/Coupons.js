import { useContext } from "react";
import { CouponContext } from "../context/CouponContext";

const Coupons = () => {
  const { coupons } = useContext(CouponContext);

  return (
    <div>
      {coupons.map((coupon) => (
        <div>
          <h3>{coupon.title}</h3>
          <p>{coupon.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Coupons;
