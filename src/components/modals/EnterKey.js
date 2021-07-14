import { useContext, useState } from "react";
import axios from "axios";
import StepWizard from "react-step-wizard";

import { GlobalContext } from "../../context/GlobalContext";
import BaseModal from "../modals/BaseModal";
import { BlockButton, CenteredTextField, ModalHead } from "../../styles";
import Select from "../select/Select";

const EnterKey = ({ close, ...props }) => {
  const { setKey, setName } = useContext(GlobalContext);
  const [localKey, setLocalKey] = useState("");
  const [localName, setLocalName] = useState("");
  const [users, setUsers] = useState([]);
  const [someoneElse, setSomeoneElse] = useState(false);

  const getAccount = () => {
    return axios.get(`/api/account/${localKey}`);
  };

  const createUser = () => {
    return axios.post("/api/user", { key: localKey, name: localName });
  };

  const EnterCode = ({ nextStep }) => {
    const innerGetAccount = async () => {
      getAccount().then((res) => {
        setUsers(res.data);
        nextStep();
      });
    };

    return (
      <>
        <ModalHead>Enter code</ModalHead>
        <CenteredTextField
          type="text"
          value={localKey}
          onChange={(e) => setLocalKey(e.target.value)}
        />
        <BlockButton topMargin="1.5rem" primary onClick={innerGetAccount}>
          Find account
        </BlockButton>
      </>
    );
  };

  const SelectName = ({ nextStep }) => {
    const innerSaveName = (e) => {
      setName(localName);
      close();
    };
    const innerSomeoneElse = () => {
      setSomeoneElse(true);
      nextStep();
    };
    return (
      <>
        <ModalHead>Who are you?</ModalHead>
        <Select
          items={users}
          itemText="data.name"
          centered
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
        />
        <BlockButton topMargin="1.5rem" primary onClick={innerSaveName}>
          Select User
        </BlockButton>
        <BlockButton topMargin="1.5rem" primary onClick={innerSomeoneElse}>
          Someone else
        </BlockButton>
      </>
    );
  };

  const EnterName = () => {
    const innerCreateUser = () => {
      createUser.then(() => {
        setKey(localKey);
        setName(localName);
        close();
      });
    };

    return (
      <>
        <ModalHead>Tell us your name</ModalHead>
        <CenteredTextField
          type="text"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
        />
        <BlockButton topMargin="1.5rem" primary onClick={innerCreateUser}>
          Add user
        </BlockButton>
      </>
    );
  };

  return (
    <>
      <BaseModal
        height={users.length && !someoneElse ? "260px" : "200px"}
        {...props}
      >
        <StepWizard>
          <EnterCode />
          <SelectName />
          <EnterName />
        </StepWizard>
      </BaseModal>
    </>
  );
};

export default EnterKey;
