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
        text:
          "Good for one back rub from your partner. NOTE: This is only redeemable for back rubs. Includes only upper/lower back and shoulders",
        redeemed: false,
      },
      {
        id: 2,
        title: "Foot Rub",
        text:
          "Good for one foot rub from your partner. NOTE: Licking not included.",
        redeemed: false,
      },
      {
        id: 3,
        title: "Date Night",
        text:
          "Good for one romantic date night. Put your heads together to decide the perfect time and place!",
        redeemed: false,
      },
      {
        id: 4,
        title: "Candlelit Dinner",
        text:
          "Good for one romantic candlelit dinner of your choosing. WARNING: Children may or may not apply.",
      },
      {
        id: 5,
        title: "Back Rub",
        text:
          "Good for one back rub from your partner. NOTE: This is only redeemable for back rubs. Includes only upper/lower back and shoulders",
        redeemed: false,
      },
      {
        id: 6,
        title: "Foot Rub",
        text:
          "Good for one foot rub from your partner. NOTE: Licking not included.",
        redeemed: false,
      }, //,
      // {
      //   id: 7,
      //   title: "Candlelit Dinner",
      //   text: "Good for one romantic candlelit dinner. WARNING: Children may or may not apply."
      // },
      // {
      //   id: 8,
      //   title: "Candlelit Dinner",
      //   text: "Good for one romantic candlelit dinner. WARNING: Children may or may not apply."
      // },
      // {
      //   id: 9,
      //   title: "Candlelit Dinner",
      //   text: "Good for one romantic candlelit dinner. WARNING: Children may or may not apply."
      // },
      // {
      //   id: 10,
      //   title: "Candlelit Dinner",
      //   text: "Good for one romantic candlelit dinner. WARNING: Children may or may not apply."
      // }
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
