import { useState } from "react";

import useRedirect from "../../hooks/useRedirect";
import { BlockButton, WelcomeContainer, WelcomeHeader } from "../../styles";
import EnterName from "../modals/EnterName";
import EnterKey from "../modals/EnterKey";

const Home = () => {
  useRedirect();
  const [showEnterKey, setShowEnterKey] = useState(false);
  const [showEnterName, setShowEnterName] = useState(false);

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
      />
      <EnterKey
        isOpen={showEnterKey}
        onRequestClose={() => setShowEnterKey(false)}
        close={() => setShowEnterKey(false)}
        contentLabel="Enter key"
      />
    </WelcomeContainer>
  );
};

export default Home;
