import Modal from "react-modal";
import { CenteredTextField } from "../../styles";

Modal.setAppElement("#root");

const EnterKey = (props) => {
  return (
    <Modal {...props}>
      <h2>Enter code</h2>
      <CenteredTextField type="text" />
    </Modal>
  );
};

export default EnterKey;
