import { useContext } from "react";
import { CouponContext } from "../context/CouponContext";

const Admin = () => {
  const { coupons } = useContext(CouponContext);

  return (
    <table>
      <thead>
        <th>Id</th>
        <th>Title</th>
        <th>Text</th>
        <th>Redeemed</th>
      </thead>
      <tbody>
        {coupons.map((coupon) => (
          <tr>
            <td>{coupon.id}</td>
            <td>{coupon.title}</td>
            <td>{coupon.text}</td>
            <td>{coupon.redeemed ? "true" : "false"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Admin;
