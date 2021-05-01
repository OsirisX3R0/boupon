import { useContext } from "react";
import { CouponContext } from "../context/CouponContext";

const Admin = () => {
  const { coupons } = useContext(CouponContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Text</th>
          <th>Redeemed</th>
        </tr>
      </thead>
      <tbody>
        {coupons.map((coupon) => (
          <tr key={coupon.id}>
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
