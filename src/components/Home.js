import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";

import useLocalStorage from "../hooks/useLocalStorage";
import { BlockButtonMargin, WelcomeContainer, WelcomeHeader } from "../styles";

const Home = () => {
  const history = useHistory();
  const [key, setKey] = useLocalStorage("bouponKey");

  useEffect(() => {
    if (key) {
      history.push("/coupons");
    }
  }, [history, key]);

  const createAccount = () => {
    axios.post("/api/account/create").then((res) => {
      setKey(res.data.key);
    });
  };

  return (
    <WelcomeContainer>
      <WelcomeHeader>Welcome!</WelcomeHeader>
      <BlockButtonMargin primary onClick={createAccount}>
        Get Started
      </BlockButtonMargin>
      <BlockButtonMargin secondary>I have a code</BlockButtonMargin>
    </WelcomeContainer>
  );
};

export default Home;
