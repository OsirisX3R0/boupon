import { useContext, useState } from "react";
import axios from "axios";

import { GlobalContext } from "../../context/GlobalContext";
import BaseModal from "../modals/BaseModal";
import { BlockButton, CenteredTextField } from "../../styles";
import Select from "../select/Select";

const EnterKey = ({ props }) => {
  const { setKey, setName } = useContext(GlobalContext);
  const [localKey, setLocalKey] = useState("");
  const [localName, setLocalName] = useState("");
  const [users, setUsers] = useState([]);
  const [someoneElse, setSomeoneElse] = useState(false);

  const saveName = (e) => {
    setName(e.target.value);
  };

  const getAccount = () => {
    axios.get(`/api/account/${localKey}`).then((res) => setUsers(res.data));
  };

  const createUser = () => {
    axios.post("/api/user", { key: localKey, name: localName }).then(() => {
      setKey(localKey);
      setName(localName);
    });
  };

  const modalTitle = users.length
    ? someoneElse
      ? "Tell us your name"
      : "Who are you?"
    : "Enter code";

  const selectName = users.length && (
    <>
      <Select
        items={users}
        itemText="name"
        centered
        value={localName}
        onChange={(e) => setLocalName(e.target.value)}
      />
      <BlockButton topMargin="1.5rem" primary onClick={saveName}>
        Select User
      </BlockButton>
      <BlockButton
        topMargin="1.5rem"
        primary
        onClick={() => setSomeoneElse(true)}
      >
        Someone else
      </BlockButton>
    </>
  );

  const enterName = someoneElse && (
    <>
      <CenteredTextField
        type="text"
        value={localName}
        onChange={(e) => setLocalName(e.target.value)}
      />
      <BlockButton topMargin="1.5rem" primary onClick={createUser}>
        Add user
      </BlockButton>
    </>
  );

  return (
    <>
      <BaseModal title={modalTitle} {...props}>
        <CenteredTextField
          type="text"
          value={localKey}
          onChange={(e) => setLocalKey(e.target.value)}
        />
        <BlockButton topMargin="1.5rem" primary onClick={getAccount}>
          Find account
        </BlockButton>
        {selectName}
        {enterName}
      </BaseModal>
    </>
  );
};

export default EnterKey;
