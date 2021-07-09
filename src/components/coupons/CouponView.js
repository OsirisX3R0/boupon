import { useEffect } from "react";
import { useHistory } from "react-router";

import Coupons from "./Coupons";

const CouponView = () => {
  const history = useHistory();

  // useEffect(() => {
  //   if (!key) history.push('/')
  // })
  return (
    <>
      <Coupons />
      <Coupons redeemed />
    </>
  );
};

export default CouponView;
