import { Box, Typography } from "@material-ui/core";
import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalContext";
import Coupons from "./Coupons";

const CouponView = () => {
  const { name } = useContext(GlobalContext);

  const coupons = [
    {
      id: 1,
      title: "Foot rub",
      text: "Good for one (1) foot rub",
      redeemed: false,
    },
    {
      id: 2,
      title: "Back rub",
      text: "Good for one (1) back rub",
      redeemed: true,
    },
  ];

  return (
    <>
      <Box my={3}>
        <Typography variant="h3">Welcome {name}!</Typography>
      </Box>
      <Coupons coupons={coupons} redeemed={false} />
      <Coupons coupons={coupons} redeemed={true} />
    </>
  );
};

export default CouponView;
