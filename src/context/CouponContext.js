// import axios from "axios";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const CouponContext = createContext();

export const CouponProvider = ({ children }) => {
  const { id } = useContext(GlobalContext);
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    if (id) {
      axios.get(`/api/coupons/${id}`).then(({ data }) => {
        setCoupons(data);
      });
    }
  }, []);

  const redeem = async (id) => {
    setCoupons(
      coupons.map((c) => (c.id === id ? { ...c, redeemed: true } : c))
    );
  };

  return (
    <CouponContext.Provider value={{ coupons, redeem }}>
      {children}
    </CouponContext.Provider>
  );
};
