import Modal from "react-modal";
import { ModalHead } from "../../../styles";

Modal.setAppElement("#root");

const BaseModal = ({ children, title, height, ...props }) => {
  Modal.defaultStyles.content.height = height || "200px";
  Modal.defaultStyles.content.marginTop = "50px";

  return (
    <Modal {...props}>
      {title ? <ModalHead>{title}</ModalHead> : null}
      {children}
    </Modal>
  );
};

export default BaseModal;
