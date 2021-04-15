import { createContext, useState } from "react";

export const CouponContext = createContext();

export const CouponProvider = ({ children }) => {
  const [coupons, setCoupons] = useState([
    { title: "Back Rub", text: "Good for one back rub" },
    { title: "Foot Rub", text: "Good for one foot rub" },
    { title: "Date Night", text: "Good for one date night" },
  ]);

  return (
    <CouponContext.Provider value={{ coupons }}>
      {children}
    </CouponContext.Provider>
  );
};
