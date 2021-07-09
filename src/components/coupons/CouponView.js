import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { GlobalContext } from "../../context/GlobalContext";

import Coupons from "./Coupons";

const CouponView = () => {
  const history = useHistory();
  const { key } = useContext(GlobalContext);

  useEffect(() => {
    if (!key) history.push("/");
  });
  return (
    <>
      <Coupons />
      <Coupons redeemed />
    </>
  );
};

export default CouponView;
