import { useContext } from "react";
import { Typography } from "@material-ui/core";

import { EnterKeyContext } from "../../context/EnterKeyContext";
import MarginTextField from "../core/input/MarginTextField";
import MarginButton from "../core/button/MarginButton";

const NewName = () => {
  const {
    createUser,
    setKey,
    setName,
    closeModal,
    localKey,
    localName,
    setLocalName,
  } = useContext(EnterKeyContext);

  const innerCreateUser = () => {
    createUser().then(() => {
      setKey(localKey);
      setName(localName);
      closeModal();
    });
  };

  return (
    <>
      <Typography variant="h3">Tell us your name</Typography>
      <MarginTextField
        fullWidth
        color="primary"
        variant="outlined"
        value={localName}
        onChange={(e) => setLocalName(e.target.value)}
      />
      <MarginButton
        top="1.5rem"
        fullWidth
        color="primary"
        variant="contained"
        onClick={innerCreateUser}
      >
        Add user
      </MarginButton>
    </>
  );
};

export default NewName;
