import { useContext } from "react";

import { EnterKeyContext } from "../../context/EnterKeyContext";
import { BlockButton, ModalHead } from "../../styles";
import SimpleSelect from "../core/select/SimpleSelect";

const SelectName = () => {
  const {
    setKey,
    setName,
    close,
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
    close();
  };
  const innerSomeoneElse = () => {
    setSomeoneElse(true);
    nextStep();
  };
  return (
    <>
      <ModalHead>Who are you?</ModalHead>
      <SimpleSelect
        items={users}
        itemText="data.name"
        fullWidth
        variant="outlined"
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

export default SelectName;
