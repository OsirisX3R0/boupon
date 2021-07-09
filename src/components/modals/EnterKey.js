import BaseModal from "../modals/BaseModal";
import { CenteredTextField } from "../../styles";

const EnterKey = ({ props }) => {
  return (
    <BaseModal title="Enter code" {...props}>
      <CenteredTextField type="text" />
    </BaseModal>
  );
};

export default EnterKey;
