import { useContext, useMemo } from "react";
import { Modal, Typography } from "@material-ui/core";

import { GlobalContext } from "../../../context/GlobalContext";

const BaseModal = ({ children, title, height, ...props }) => {
  const { colorTheme, prefersDarkMode } = useContext(GlobalContext);
  const modalStyles = useMemo(
    () => ({
      backgroundColor:
        colorTheme === "dark" || prefersDarkMode ? "#333" : "#f5f5f5",
      color: colorTheme === "dark" || prefersDarkMode ? "#f5f5f5" : "#333",
      height: height || "200px",
      border: "1px solid #aaa",
      borderRadius: "3px",
      margin: "1.5rem",
      padding: "1rem",
    }),
    [height, colorTheme, prefersDarkMode]
  );

  return (
    <Modal {...props}>
      <div style={modalStyles}>
        {title ? <Typography variant="h3">{title}</Typography> : null}
        {children}
      </div>
    </Modal>
  );
};

export default BaseModal;
