import { useContext, useEffect } from "react";
import { Typography, Box, Button, TextField } from "@material-ui/core";

import { EnterKeyContext } from "../../context/EnterKeyContext";

const FindAccount = ({ queryKey }) => {
  const { getUsers, setUsers, setLocalName, localKey, setLocalKey, nextStep } =
    useContext(EnterKeyContext);

  useEffect(() => {
    setLocalKey(queryKey);
  }, []);

  const innerGetAccount = () => {
    if (queryKey) setLocalKey(queryKey);
    getUsers().then((res) => {
      setUsers(res.data);
      setLocalName(res.data[0].name);
      nextStep();
    });
  };

  return (
    <>
      <Typography variant="h3">Enter code</Typography>
      <TextField
        label="code"
        centered={"true"}
        variant="outlined"
        fullWidth
        value={localKey || queryKey}
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
