import Modal from "react-modal";
import { ModalHead } from "../../styles";

Modal.setAppElement("#root");

Modal.defaultStyles.content.height = "200px";
Modal.defaultStyles.content.marginTop = "50px";

const BaseModal = ({ children, title, ...props }) => (
  <Modal {...props}>
    <ModalHead>{title}</ModalHead>
    {children}
  </Modal>
);

export default BaseModal;
