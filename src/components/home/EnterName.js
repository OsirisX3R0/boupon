import { useContext, useState } from "react";
import axios from "axios";

import BaseModal from "../core/modals/BaseModal";
import { GlobalContext } from "../../context/GlobalContext";
import MarginButton from "../core/button/MarginButton";
import MarginTextField from "../core/input/MarginTextField";

const EnterName = (props) => {
  const { setKey, setName } = useContext(GlobalContext);
  const [localName, setLocalName] = useState("");
  const createAccount = () => {
    axios.post("/api/account", { name: localName }).then((res) => {
      setKey(res.data.key);
      setName(res.data.name);
    });
  };

  return (
    <BaseModal title="Tell us your name" {...props}>
      <MarginTextField
        top=".5rem"
        label="Enter Key"
        fullWidth
        variant="outlined"
        value={localName}
        onChange={(e) => setLocalName(e.target.value)}
      />
      <MarginButton
        top="1.5rem"
        fullWidth
        variant="contained"
        color="primary"
        onClick={createAccount}
      >
        Get Started
      </MarginButton>
    </BaseModal>
  );
};

export default EnterName;
