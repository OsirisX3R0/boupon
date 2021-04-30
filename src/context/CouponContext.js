// import axios from "axios";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CouponContext = createContext();

export const CouponProvider = ({ children }) => {
  const [coupons, setCoupons] = useLocalStorage("coupons");

  if (!coupons) {
    setCoupons([
      { title: "Back Rub", text: "Good for one back rub", redeemed: false },
      { title: "Foot Rub", text: "Good for one foot rub", redeemed: false },
      { title: "Date Night", text: "Good for one date night", redeemed: false },
    ]);
  }

  const redeem = async (index) => {
    setCoupons(
      coupons.map((c, i) => (i === index ? { ...c, redeemed: true } : c))
    );

    // let coupon = coupons.find((c, i) => i === index);

    // await axios.post("/api/send", { ...coupon });
  };

  return (
    <CouponContext.Provider value={{ coupons, redeem }}>
      {children}
    </CouponContext.Provider>
  );
};
