import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GlobalContext } from "../../context/GlobalContext";

import Coupons from "./Coupons";

const CouponView = () => {
  const history = useHistory();
  const { key } = useContext(GlobalContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!key) {
      history.push("/");
    } else {
      axios.get(`/api/account/${key}`).then((res) => setUsers(res.data));
    }
  }, [history, key]);
  return (
    <>
      <Coupons />
      <Coupons redeemed />
    </>
  );
};

export default CouponView;
