import { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";

import { GlobalContext } from "../src/context/GlobalContext";
import Coupons from "../src/components/coupons/Coupons";

const CouponView = () => {
  const { name } = useContext(GlobalContext);
  const [welcome, setWelcome] = useState();

  useEffect(() => {
    setWelcome(`Welcome ${name}!`);
  }, []);

  return (
    <>
      <Box sx={{ my: 3 }}>
        <Typography variant="h3">{welcome}</Typography>
      </Box>
      <Coupons redeemed={false} />
      <Coupons redeemed={true} />
    </>
  );
};

export default CouponView;
