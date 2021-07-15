import { useContext, useState } from "react";
import axios from "axios";

import BaseModal from "../core/modals/BaseModal";
import { BlockButton, CenteredTextField } from "../../styles";
import { GlobalContext } from "../../context/GlobalContext";

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
      <CenteredTextField
        type="text"
        value={localName}
        onChange={(e) => setLocalName(e.target.value)}
      />
      <BlockButton topMargin="1.5rem" primary onClick={createAccount}>
        Let's Go!
      </BlockButton>
    </BaseModal>
  );
};

export default EnterName;
