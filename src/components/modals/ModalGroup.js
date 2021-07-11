import { useContext, useState, useEffect } from "react";
import axios from "axios";

import { GlobalContext } from "../../context/GlobalContext";
import BaseModal from "../modals/BaseModal";
import { BlockButton, CenteredTextField } from "../../styles";
import Select from "../select/Select";

const ModalGroup = ({ showGroup, onClose }) => {
  const { setKey, setName } = useContext(GlobalContext);
  const [showEnterCode, setShowEnterCode] = useState(false);
  const [showWhoAreYou, setShowWhoAreYou] = useState(false);
  const [showEnterName, setShowEnterName] = useState(false);
  const [localKey, setLocalKey] = useState("");
  const [localName, setLocalName] = useState("");
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   debugger;
  //   if (showGroup) {
  //     setShowEnterCode(true);
  //     setShowWhoAreYou(false);
  //     setShowEnterName(false);
  //   }
  // }, [users, showGroup]);

  const closeAll = () => {
    setShowEnterCode(false);
    setShowWhoAreYou(false);
    setShowEnterName(false);
  };

  const saveUser = () => {
    setKey(localKey);
    setName(localName);
  };

  const onRequestClose = (func) => {
    if (func) func();
    onClose();
  };

  const saveName = (e) => {
    saveUser();
    closeAll();
  };

  const getAccount = () => {
    axios.get(`/api/account/${localKey}`).then((res) => {
      setUsers(res.data);
      setShowEnterCode(false);
      setShowWhoAreYou(true);
      setShowEnterName(false);
    });
  };

  const enterSomeoneElse = () => {
    setShowEnterCode(false);
    setShowWhoAreYou(false);
    setShowEnterName(true);
  };

  const createUser = () => {
    axios.post("/api/user", { key: localKey, name: localName }).then(() => {
      saveUser();
      closeAll();
    });
  };

  return (
    <>
      <BaseModal
        isOpen={showEnterCode}
        onRequestClose={onRequestClose(() => setShowEnterCode(false))}
        contentLabel="Enter code"
      >
        <CenteredTextField
          type="text"
          value={localKey}
          onChange={(e) => setLocalKey(e.target.value)}
        />
        <BlockButton topMargin="1.5rem" primary onClick={getAccount}>
          Find account
        </BlockButton>
      </BaseModal>

      <BaseModal
        isOpen={showWhoAreYou}
        onRequestClose={onRequestClose(() => setShowWhoAreYou(false))}
        contentLabel="Who are you?"
      >
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
        <BlockButton topMargin="1.5rem" secondary onClick={enterSomeoneElse}>
          Someone else
        </BlockButton>
      </BaseModal>

      <BaseModal
        isOpen={showEnterName}
        onRequestClose={onRequestClose(() => setShowEnterName(false))}
        contentLabel="Tell us your name"
      >
        <CenteredTextField
          type="text"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
        />
        <BlockButton topMargin="1.5rem" primary onClick={createUser}>
          Add user
        </BlockButton>
      </BaseModal>
    </>
  );
};

export default ModalGroup;
