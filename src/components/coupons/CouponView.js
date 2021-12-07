import { useContext } from "react";
// import { Route, useRouteMatch } from "react-router";
import Link from "next/link";
/// REACT ROUTER REFACTOR HERE
import { Box, Button, Typography } from "@material-ui/core";

import { GlobalContext } from "../../context/GlobalContext";
import Coupons from "./Coupons";
import Manage from "./Manage";

const CouponView = () => {
  // const match = useRouteMatch();
  const { name } = useContext(GlobalContext);

  return (
    <>
      {/* <Button component={Link} to={`${match.path}/manage`}>
        Manage
      </Button> */}
      <Box my={3}>
        <Typography variant="h3">Welcome {name}!</Typography>
      </Box>
      <Coupons redeemed={false} />
      <Coupons redeemed={true} />

      {/* <Route path={`${match.path}/manage`}>
        <Manage />
      </Route> */}
    </>
  );
};

export default CouponView;
