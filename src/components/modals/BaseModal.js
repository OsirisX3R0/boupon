import Modal from "react-modal";

Modal.setAppElement("#root");

Modal.defaultStyles.content.height = "190px";
Modal.defaultStyles.content.marginTop = "50px";

const BaseModal = ({ children, ...props }) => (
  <Modal {...props}>{children}</Modal>
);

export default BaseModal;
