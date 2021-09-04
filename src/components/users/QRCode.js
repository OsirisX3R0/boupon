import { useContext } from "react";
import QrCode from "qrcode.react";

import { GlobalContext } from "../../context/GlobalContext";

const QRCode = (value, theme) => {
  const { prefersDarkMode } = useContext(GlobalContext);
  const bgColor = theme === "dark" || prefersDarkMode ? "#333" : "#f5f5f5";
  const fgColor = theme === "dark" || prefersDarkMode ? "#f5f5f5" : "#000";

  return (
    <QrCode renderAs="svg" bgColor={bgColor} fgColor={fgColor} value={value} />
  );
};

export default QRCode;
