import { Box, Typography } from "@material-ui/core";
import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalContext";
import Coupons from "./Coupons";

const CouponView = () => {
  const { name } = useContext(GlobalContext);

  return (
    <>
      <Box my={3}>
        <Typography variant="h3">Welcome {name}!</Typography>
      </Box>
      <Coupons redeemed={false} />
      <Coupons redeemed={true} />
    </>
  );
};

export default CouponView;
