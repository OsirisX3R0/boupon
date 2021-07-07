import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import useLocalStorage from "../../hooks/useLocalStorage";
import { BlockButton, WelcomeContainer, WelcomeHeader } from "../../styles";
import EnterKey from "../modals/EnterKey";
import EnterName from "../modals/EnterName";

const Home = () => {
  const history = useHistory();
  const [key, setKey] = useLocalStorage("bouponKey");
  const [showEnterKey, setShowEnterKey] = useState(false);
  const [showEnterName, setShowEnterName] = useState(false);

  useEffect(() => {
    if (key) {
      history.push("/coupons");
    }
  }, [history, key]);

  return (
    <WelcomeContainer>
      <WelcomeHeader>Welcome!</WelcomeHeader>
      <BlockButton
        marginY=".5rem"
        primary
        onClick={() => setShowEnterName(true)}
      >
        Get Started
      </BlockButton>
      <BlockButton
        marginY=".5rem"
        secondary
        onClick={() => setShowEnterKey(true)}
      >
        I have a key
      </BlockButton>
      <EnterName
        isOpen={showEnterName}
        onRequestClose={() => setShowEnterName(false)}
        contentLabel="Tell us your name"
        setKey={setKey}
      />
      <EnterKey
        isOpen={showEnterKey}
        onRequestClose={() => setShowEnterKey(false)}
        contentLabel="Enter key"
      />
    </WelcomeContainer>
  );
};

export default Home;
