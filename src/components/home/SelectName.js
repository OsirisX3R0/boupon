import { useContext } from "react";
import { Typography } from "@material-ui/core";

import { EnterKeyContext } from "../../context/EnterKeyContext";
import SimpleSelect from "../core/input/SimpleSelect";
import MarginButton from "../core/button/MarginButton";

const SelectName = () => {
  const {
    setKey,
    setId,
    setName,
    closeModal,
    localKey,
    localId,
    localName,
    setSomeoneElse,
    users,
    setLocalName,
    setLocalId,
    nextStep,
  } = useContext(EnterKeyContext);

  const selectUser = (e) => {
    let name = users.find((u) => u.ref["@ref"].id === e.target.value).data.name;

    setLocalId(e.target.value);
    setLocalName(name);
  };

  const innerSaveName = () => {
    setKey(localKey);
    setId(localId);
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
        itemValue="ref.@ref.id"
        itemText="data.name"
        fullWidth
        variant="outlined"
        centered
        value={localId}
        onChange={selectUser}
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
