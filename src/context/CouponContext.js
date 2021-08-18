// import axios from "axios";
import { createContext, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

export const CouponContext = createContext();

export const CouponProvider = ({ children }) => {
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      title: "Back Rub",
      text: "Good for one back rub from your partner. NOTE: This is only redeemable for back rubs. Includes only upper/lower back and shoulders",
      redeemed: false,
    },
    {
      id: 2,
      title: "Foot Rub",
      text: "Good for one foot rub from your partner. NOTE: Licking not included.",
      redeemed: false,
    },
    {
      id: 3,
      title: "Date Night",
      text: "Good for one romantic date night. Put your heads together to decide the perfect time and place!",
      redeemed: true,
    },
    {
      id: 4,
      title: "Candlelit Dinner",
      text: "Good for one romantic candlelit dinner of your choosing. WARNING: Children may or may not apply.",
    },
    {
      id: 5,
      title: "Back Rub",
      text: "Good for one back rub from your partner. NOTE: This is only redeemable for back rubs. Includes only upper/lower back and shoulders",
      redeemed: false,
    },
    {
      id: 6,
      title: "Foot Rub",
      text: "Good for one foot rub from your partner. NOTE: Licking not included.",
      redeemed: true,
    },
    {
      id: 7,
      title: "Booty Rub",
      text: "Good for one booty rub/massage. NOTE: Insertion not included.",
    },
  ]);

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
