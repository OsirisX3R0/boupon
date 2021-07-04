import { useEffect } from "react";
import { useHistory } from "react-router";

import useLocalStorage from "../hooks/useLocalStorage";
import {
  BlockButton,
  BlockButtonMargin,
  WelcomeContainer,
  WelcomeHeader,
} from "../styles";

const Home = () => {
  const history = useHistory();
  const [key] = useLocalStorage("bouponKey");

  useEffect(() => {
    if (key) history.push("/coupons");
  }, [history, key]);

  return (
    <WelcomeContainer>
      <WelcomeHeader>Welcome!</WelcomeHeader>
      <BlockButtonMargin primary>Get Started</BlockButtonMargin>
      <BlockButtonMargin secondary>I have a code</BlockButtonMargin>
    </WelcomeContainer>
  );
};

export default Home;
