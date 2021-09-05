import { useContext } from "react";
import { Typography, Box, Button } from "@material-ui/core";

import { EnterKeyContext } from "../../context/EnterKeyContext";
import SimpleSelect from "../core/input/SimpleSelect";

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
        itemValue="id"
        itemText="name"
        fullWidth
        variant="outlined"
        centered
        value={localId}
        onChange={selectUser}
      />
      <Box mt={3}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={innerSaveName}
        >
          Select User
        </Button>
      </Box>
      <Box mt={3}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={innerSomeoneElse}
        >
          Someone else
        </Button>
      </Box>
    </>
  );
};

export default SelectName;
