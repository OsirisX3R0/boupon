import { createContext, useContext, useState } from "react";
import axios from "axios";
import { Stepper, Step } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { GlobalContext } from "./GlobalContext";
import BaseModal from "../components/core/modals/BaseModal";

export const EnterKeyContext = createContext();

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  stepper: {
    display: "none",
  },
}));

export const KeyWizard = ({ close, labels, children, ...props }) => {
  const classes = useStyles();
  const { setKey, setName, setId } = useContext(GlobalContext);
  const [localKey, setLocalKey] = useState("");
  const [localId, setLocalId] = useState("");
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

  const steps = children.map((_, i) => <Step key={i}>{labels[i]}</Step>);

  const stepper =
    children && children.length ? (
      <>
        <Stepper activeStep={active} className={classes.stepper}>
          {steps}
        </Stepper>
        {children[active]}
      </>
    ) : null;

  const firstStep = () => setActive(0);
  const prevStep = () => setActive((prevActive) => prevActive - 1);
  const nextStep = () => setActive((prevActive) => prevActive + 1);
  const lastStep = () => setActive(steps.length - 1);

  const reset = () => {
    setActive(0);
    setLocalKey("");
    setLocalName("");
    setUsers([]);
    setSomeoneElse(false);
  };

  const closeModal = () => {
    close();
    reset();
  };

  return (
    <EnterKeyContext.Provider
      value={{
        setKey,
        setName,
        setId,
        localKey,
        setLocalKey,
        localId,
        setLocalId,
        localName,
        setLocalName,
        users,
        setUsers,
        someoneElse,
        setSomeoneElse,
        getUsers,
        createUser,
        firstStep,
        prevStep,
        nextStep,
        lastStep,
        closeModal,
      }}
    >
      <BaseModal
        height={users.length && !someoneElse ? "260px" : "200px"}
        {...props}
      >
        {stepper}
      </BaseModal>
    </EnterKeyContext.Provider>
  );
};
