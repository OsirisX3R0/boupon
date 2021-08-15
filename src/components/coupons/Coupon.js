import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useContext } from "react";

import { CouponContext } from "../../context/CouponContext";

const useStyles = makeStyles({
  root: {
    borderStyle: "dashed",
  },
});

const Coupon = ({ coupon }) => {
  const classes = useStyles();
  const { redeem } = useContext(CouponContext);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h4">{coupon.title}</Typography>
        <Typography variant="body2">{coupon.text}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => redeem(coupon.id)}
          redeemed={coupon.redeemed}
        >
          &#128504; Redeem
        </Button>
      </CardActions>
    </Card>
  );
};

export default Coupon;
