import { createContext, useContext, useState } from "react";
import axios from "axios";
import StepWizard from "react-step-wizard";

import { GlobalContext } from "./GlobalContext";
import BaseModal from "../components/core/modals/BaseModal";

export const EnterKeyContext = createContext();

export const KeyWizard = ({ close, children, ...props }) => {
  const { setKey, setName } = useContext(GlobalContext);
  const [localKey, setLocalKey] = useState("");
  const [localName, setLocalName] = useState("");
  const [users, setUsers] = useState([]);
  const [someoneElse, setSomeoneElse] = useState(false);

  const getUsers = async () => {
    return axios.get(`/api/users/${localKey}`);
  };

  const createUser = async () => {
    return axios.post("/api/users", { key: localKey, name: localName });
  };

  return (
    <EnterKeyContext.Provider
      value={{
        setKey,
        setName,
        localKey,
        setLocalKey,
        localName,
        setLocalName,
        users,
        setUsers,
        someoneElse,
        setSomeoneElse,
        getUsers,
        createUser,
        close,
      }}
    >
      <BaseModal
        height={users.length && !someoneElse ? "260px" : "200px"}
        {...props}
      >
        <StepWizard>{children}</StepWizard>
      </BaseModal>
    </EnterKeyContext.Provider>
  );
};
