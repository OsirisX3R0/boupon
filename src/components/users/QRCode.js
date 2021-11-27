import { useContext } from "react";
import ReactQRCode from "qrcode.react";

import { GlobalContext } from "../../context/GlobalContext";

const QRCode = ({ value }) => {
  const { prefersDarkMode, colorTheme } = useContext(GlobalContext);
  const bgColor = colorTheme === "dark" || prefersDarkMode ? "#333" : "#f5f5f5";
  const fgColor = colorTheme === "dark" || prefersDarkMode ? "#f5f5f5" : "#000";

  return (
    <ReactQRCode
      renderAs="svg"
      bgColor={bgColor}
      fgColor={fgColor}
      value={value}
    />
  );
};

export default QRCode;
