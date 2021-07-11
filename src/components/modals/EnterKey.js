import { useContext, useState } from "react";
import axios from "axios";
import StepWizard from "react-step-wizard";

import { GlobalContext } from "../../context/GlobalContext";
import BaseModal from "../modals/BaseModal";
import { BlockButton, CenteredTextField } from "../../styles";
import Select from "../select/Select";

const EnterKey = (props) => {
  const { setKey, setName } = useContext(GlobalContext);
  const [localKey, setLocalKey] = useState("");
  const [localName, setLocalName] = useState("");
  const [users, setUsers] = useState([]);
  const [someoneElse, setSomeoneElse] = useState(false);

  const saveName = (e) => {
    setName(e.target.value);
  };

  const getAccount = () => {
    return axios.get(`/api/account/${localKey}`);
  };

  const createUser = () => {
    return axios.post("/api/user", { key: localKey, name: localName });
  };

  const modalTitle = users.length
    ? someoneElse
      ? "Tell us your name"
      : "Who are you?"
    : "Enter code";

  const EnterCode = ({ nextStep }) => {
    const innerGetAccount = async () => {
      getAccount().then((res) => {
        setUsers(res.data);
        nextStep();
      });
    };

    return (
      <div>
        <CenteredTextField
          type="text"
          value={localKey}
          onChange={(e) => setLocalKey(e.target.value)}
        />
        <BlockButton topMargin="1.5rem" primary onClick={innerGetAccount}>
          Find account
        </BlockButton>
      </div>
    );
  };

  const SelectName = ({ nextStep }) => {
    const innerSaveName = () => {
      saveName();
      nextStep();
    };
    return (
      <div>
        {users.length ? (
          <>
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
            <BlockButton
              topMargin="1.5rem"
              primary
              onClick={() => setSomeoneElse(true)}
            >
              Someone else
            </BlockButton>
          </>
        ) : null}
      </div>
    );
  };

  const EnterName = () => {
    const innerCreateUser = () => {
      createUser.then(() => {
        setKey(localKey);
        setName(localName);
      });
    };

    return (
      <div>
        {someoneElse ? (
          <>
            <CenteredTextField
              type="text"
              value={localName}
              onChange={(e) => setLocalName(e.target.value)}
            />
            <BlockButton topMargin="1.5rem" primary onClick={innerCreateUser}>
              Add user
            </BlockButton>
          </>
        ) : null}
      </div>
    );
  };

  return (
    <>
      <BaseModal title={modalTitle} {...props}>
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
