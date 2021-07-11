import useRedirect from "../../hooks/useRedirect";
import Coupons from "./Coupons";

const CouponView = () => {
  useRedirect();

  return (
    <>
      <Coupons />
      <Coupons redeemed />
    </>
  );
};

export default CouponView;
