import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import Coupons from "./Coupons";

const CouponView = () => {
  const { key } = useContext(GlobalContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`/api/account/${key}`).then((res) => setUsers(res.data));
  }, [key]);

  return (
    <>
      <Coupons />
      <Coupons redeemed />
    </>
  );
};

export default CouponView;
