import { useContext, useState } from "react";
import axios from "axios";
import { Box, Button, TextField } from "@material-ui/core";

import BaseModal from "../core/BaseModal";
import { GlobalContext } from "../../context/GlobalContext";

const EnterName = (props) => {
  const { setKey, setName, setId } = useContext(GlobalContext);
  const [localName, setLocalName] = useState("");
  const createAccount = () => {
    axios.post("/api/account", { name: localName }).then(({ data }) => {
      if (data.account_key && data.name && data.id) {
        setKey(data.account_key);
        setName(data.name);
        setId(data.id);
      }
    });
  };

  return (
    <BaseModal title="Tell us your name" {...props}>
      <Box sx={{ mt: 2 }}>
        <TextField
          label="Enter Name"
          fullWidth
          variant="outlined"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
        />
      </Box>
      <Box sx={{ mt: 3 }}>
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
