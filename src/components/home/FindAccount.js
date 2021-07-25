import { useContext } from "react";
import { Typography, Box, Button, TextField } from "@material-ui/core";

import { EnterKeyContext } from "../../context/EnterKeyContext";

const FindAccount = () => {
  const { getUsers, setUsers, setLocalName, localKey, setLocalKey, nextStep } =
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
      <Typography variant="h3">Enter code</Typography>
      <TextField
        label="code"
        centered
        variant="outlined"
        fullWidth
        value={localKey}
        onChange={(e) => setLocalKey(e.target.value)}
      />
      <Box mt={3}>
        <Button
          color="primary"
          fullWidth
          variant="contained"
          onClick={innerGetAccount}
        >
          Find account
        </Button>
      </Box>
    </>
  );
};

export default FindAccount;
