import { useContext, useState } from "react";
import axios from "axios";
import { Box, Button, TextField } from "@material-ui/core";

import BaseModal from "../core/modals/BaseModal";
import { GlobalContext } from "../../context/GlobalContext";

const EnterName = (props) => {
  const { setKey, setName } = useContext(GlobalContext);
  const [localName, setLocalName] = useState("");
  const createAccount = () => {
    axios.post("/api/account", { name: localName }).then((res) => {
      setKey(res.data.account_key);
      setName(res.data.name);
    });
  };

  return (
    <BaseModal title="Tell us your name" {...props}>
      <Box mt={2}>
        <TextField
          label="Enter Key"
          fullWidth
          variant="outlined"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
        />
      </Box>
      <Box mt={3}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={createAccount}
        >
          Get Started
        </Button>
      </Box>
    </BaseModal>
  );
};

export default EnterName;
