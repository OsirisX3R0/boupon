// import axios from "axios";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CouponContext = createContext();

export const CouponProvider = ({ children }) => {
  const [coupons, setCoupons] = useLocalStorage("coupons");

  if (!coupons) {
    setCoupons([
      {
        id: 1,
        title: "Back Rub",
        text: "Good for one back rub",
        redeemed: false,
      },
      {
        id: 2,
        title: "Foot Rub",
        text: "Good for one foot rub",
        redeemed: false,
      },
      {
        id: 3,
        title: "Date Night",
        text: "Good for one date night",
        redeemed: false,
      },
    ]);
  }

  const redeem = async (id) => {
    setCoupons(
      coupons.map((c) => (c.id === id ? { ...c, redeemed: true } : c))
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
