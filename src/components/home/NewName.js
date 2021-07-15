import { useContext } from "react";

import { EnterKeyContext } from "../../context/EnterKeyContext";
import { BlockButton, CenteredTextField, ModalHead } from "../../styles";

const NewName = () => {
  const {
    createUser,
    setKey,
    setName,
    close,
    localKey,
    localName,
    setLocalName,
  } = useContext(EnterKeyContext);

  const innerCreateUser = () => {
    createUser().then(() => {
      setKey(localKey);
      setName(localName);
      close();
    });
  };

  return (
    <>
      <ModalHead>Tell us your name</ModalHead>
      <CenteredTextField
        type="text"
        value={localName}
        onChange={(e) => setLocalName(e.target.value)}
      />
      <BlockButton topMargin="1.5rem" primary onClick={innerCreateUser}>
        Add user
      </BlockButton>
    </>
  );
};

export default NewName;
