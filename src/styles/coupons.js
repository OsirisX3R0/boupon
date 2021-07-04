import styled from "styled-components";
import { Button } from "./core";

export const CouponContainer = styled.div`
  padding: 1rem;
`;

export const OldHead = styled.h4`
  color: #999;
  text-align: center;
`;

export const CouponCard = styled.div`
  padding: 0.75rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: 4fr 1fr;
`;

export const CouponText = styled.div``;

export const CouponHead = styled.h3`
  font-family: "Source Sans Pro", sans-serif;
`;

export const CouponDesc = styled.p`
  font-family: "Open Sans", sans-serif;
`;

export const Redeem = styled(Button)`
  background-color: ${(props) => (props.redeemed ? "#ccc" : "transparent")};
  color: ${(props) => (props.redeemed ? "#999" : "#0b0")};

  &:hover {
    background-color: rgba(0, 200, 0, 0.1);
  }
`;

export const NoCoupons = styled.div`
  color: #bbb;
  text-align: center;
`;
