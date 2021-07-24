import { createContext, useContext, useState } from "react";
import axios from "axios";
import { Step, Stepper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { GlobalContext } from "./GlobalContext";
import BaseModal from "../components/core/modals/BaseModal";

export const EnterKeyContext = createContext();

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
}));

export const KeyWizard = ({ close, children, ...props }) => {
  const stepClasses = useStyles();
  const { setKey, setName } = useContext(GlobalContext);
  const [localKey, setLocalKey] = useState("");
  const [localName, setLocalName] = useState("");
  const [users, setUsers] = useState([]);
  const [someoneElse, setSomeoneElse] = useState(false);
  const [active, setActive] = useState(0);

  const getUsers = async () => {
    return axios.get(`/api/users/${localKey}`);
  };

  const createUser = async () => {
    return axios.post("/api/users", { key: localKey, name: localName });
  };

  const steps = children.map((step, i) => <Step key={i}>{step}</Step>);

  const firstStep = () => setActive(0);
  const prevStep = () => setActive((prevActive) => prevActive - 1);
  const nextStep = () => setActive((prevActive) => prevActive + 1);
  const lastStep = () => setActive(steps.length - 1);

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
        firstStep,
        prevStep,
        nextStep,
        lastStep,
      }}
    >
      <BaseModal
        height={users.length && !someoneElse ? "260px" : "200px"}
        {...props}
      >
        <div className={stepClasses.root}>
          <Stepper activeStep={active}>{steps}</Stepper>
        </div>
      </BaseModal>
    </EnterKeyContext.Provider>
  );
};
