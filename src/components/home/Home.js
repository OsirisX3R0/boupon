import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import useLocalStorage from "../../hooks/useLocalStorage";
import {
  BlockButtonMargin,
  WelcomeContainer,
  WelcomeHeader,
} from "../../styles";
import EnterKey from "./EnterKey";

const Home = () => {
  const history = useHistory();
  const [key, setKey] = useLocalStorage("bouponKey");
  const [showEnterKey, setShowEnterKey] = useState(false);

  const customStyles = {
    content: {
      height: 300,
    },
  };

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
      <BlockButtonMargin secondary onClick={() => setShowEnterKey(true)}>
        I have a key
      </BlockButtonMargin>
      <EnterKey
        isOpen={showEnterKey}
        onRequestClose={() => setShowEnterKey(false)}
        contentLabel="Enter key"
        styles={customStyles}
      />
    </WelcomeContainer>
  );
};

export default Home;
