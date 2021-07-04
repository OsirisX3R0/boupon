import Modal from "react-modal";
import { TextField } from "../../styles";

const EnterKey = (props) => {
  return (
    <Modal {...props}>
      <TextField type="text" />
    </Modal>
  );
};

export default EnterKey;
