import { useContext } from "react";

import { EnterKeyContext } from "../../context/EnterKeyContext";
import { BlockButton, CenteredTextField, ModalHead } from "../../styles";

const FindAccount = ({ nextStep }) => {
  const { getUsers, setUsers, setLocalName, localKey, setLocalKey } =
    useContext(EnterKeyContext);

  const innerGetAccount = () => {
    getUsers().then((res) => {
      setUsers(res.data);
      setLocalName(res.data[0].data.name);
      nextStep();
    });
  };

  return (
    <>
      <ModalHead>Enter code</ModalHead>
      <CenteredTextField
        type="text"
        value={localKey}
        onChange={(e) => setLocalKey(e.target.value)}
      />
      <BlockButton topMargin="1.5rem" primary onClick={innerGetAccount}>
        Find account
      </BlockButton>
    </>
  );
};

export default FindAccount;
