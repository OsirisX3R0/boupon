import BaseModal from "../modals/BaseModal";
import { CenteredTextField } from "../../styles";

const EnterKey = (props) => {
  return (
    <BaseModal {...props}>
      <h2>Enter code</h2>
      <CenteredTextField type="text" />
    </BaseModal>
  );
};

export default EnterKey;
