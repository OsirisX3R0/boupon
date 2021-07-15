import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalContext";
import { CouponMainHead } from "../../styles";
import Coupons from "./Coupons";

const CouponView = () => {
  const { name } = useContext(GlobalContext);

  return (
    <>
      <CouponMainHead>Welcome {name}!</CouponMainHead>
      <Coupons />
      <Coupons redeemed />
    </>
  );
};

export default CouponView;
