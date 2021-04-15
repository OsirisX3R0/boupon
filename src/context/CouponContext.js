import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CouponContext = createContext();

export const CouponProvider = ({ children }) => {
  const [coupons, setCoupons] = useLocalStorage("coupons");

  if (!coupons) {
    setCoupons([
      { title: "Back Rub", text: "Good for one back rub" },
      { title: "Foot Rub", text: "Good for one foot rub" },
      { title: "Date Night", text: "Good for one date night" },
    ]);
  }

  return (
    <CouponContext.Provider value={{ coupons }}>
      {children}
    </CouponContext.Provider>
  );
};
