import { useState, useContext, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";

import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";

const Manage = () => {
  const [coupons, setCoupons] = useState([]);
  const { id } = useContext(GlobalContext);

  useEffect(() => {
    axios.get(`/api/coupons/created/${id}`).then((res) => {
      setCoupons(res.data);
    });
  }, [id]);

  return (
    <Box sx={{ my: 3 }}>
      <Typography variant="h3">Manage Coupons</Typography>
    </Box>
  );
};

export default Manage;
