import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  width: 100%;
  margin: 0;
  padding: 1rem 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  color: #53a318;
  text-transform: uppercase;
  text-align: center;
  position: sticky;
  top: 0;
`;

export const CouponContainer = styled.div`
  padding: 1rem;
`;

export const OldHead = styled.h4`
  color: #999;
  text-align: center;
`;

export const Coupon = styled.div`
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

export const Redeem = styled.button`
  background-color: ${(props) => (props.redeemed ? "#ccc" : "transparent")};
  color: ${(props) => (props.redeemed ? "#999" : "#0b0")};
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  outline: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 200, 0, 0.1);
  }
`;
