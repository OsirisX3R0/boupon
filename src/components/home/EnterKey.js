import { KeyWizard } from "../../context/EnterKeyContext";
import FindAccount from "./FindAccount";
import SelectName from "./SelectName";
import NewName from "./NewName";

const EnterKey = (props) => {
  return (
    <KeyWizard {...props}>
      <FindAccount />
      <SelectName />
      <NewName />
    </KeyWizard>
  );
};

export default EnterKey;
