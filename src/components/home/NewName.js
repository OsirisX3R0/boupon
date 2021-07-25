import { useContext } from "react";
import { Typography, Box, Button, TextField } from "@material-ui/core";

import { EnterKeyContext } from "../../context/EnterKeyContext";

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
      <TextField
        fullWidth
        color="primary"
        variant="outlined"
        value={localName}
        onChange={(e) => setLocalName(e.target.value)}
      />
      <Box mt={3}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={innerCreateUser}
        >
          Add user
        </Button>
      </Box>
    </>
  );
};

export default NewName;
