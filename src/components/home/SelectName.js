import { useContext } from "react";
import { Typography } from "@material-ui/core";

import { EnterKeyContext } from "../../context/EnterKeyContext";
import SimpleSelect from "../core/input/SimpleSelect";
import MarginButton from "../core/button/MarginButton";

const SelectName = () => {
  const {
    setKey,
    setName,
    closeModal,
    localKey,
    localName,
    setSomeoneElse,
    users,
    setLocalName,
    nextStep,
  } = useContext(EnterKeyContext);

  const innerSaveName = () => {
    setKey(localKey);
    setName(localName);
    closeModal();
  };
  const innerSomeoneElse = () => {
    setSomeoneElse(true);
    nextStep();
  };
  return (
    <>
      <Typography variant="h3">Who are you?</Typography>
      <SimpleSelect
        items={users}
        itemText="data.name"
        fullWidth
        variant="outlined"
        centered
        value={localName}
        onChange={(e) => setLocalName(e.target.value)}
      />
      <MarginButton
        top="1.5rem"
        fullWidth
        color="primary"
        variant="contained"
        onClick={innerSaveName}
      >
        Select User
      </MarginButton>
      <MarginButton
        top="1.5rem"
        fullWidth
        color="primary"
        variant="contained"
        onClick={innerSomeoneElse}
      >
        Someone else
      </MarginButton>
    </>
  );
};

export default SelectName;
