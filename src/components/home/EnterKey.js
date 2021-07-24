import { KeyWizard } from "../../context/EnterKeyContext";
import FindAccount from "./FindAccount";
import SelectName from "./SelectName";
import NewName from "./NewName";

const labels = ["Enter code", "Who are you?", "Tell us your name"];
const EnterKey = (props) => {
  return (
    <KeyWizard labels={labels} {...props}>
      <FindAccount />
      <SelectName />
      <NewName />
    </KeyWizard>
  );
};

export default EnterKey;
