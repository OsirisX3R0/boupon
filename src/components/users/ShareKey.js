import { Box, Typography } from "@material-ui/core";
import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalContext";
import BaseModal from "../core/modals/BaseModal";
import QRCode from "./QRCode";

const ShareKey = (props) => {
  const { key, colorTheme } = useContext(GlobalContext);
  return (
    <BaseModal {...props}>
      <Box display="flex" justifyContent="center" mb={3}>
        Scan your code
      </Box>
      <Box display="flex" justifyContent="center" mb={3}>
        <QRCode value={key} theme={colorTheme} />
      </Box>
      <Box display="flex" justifyContent="center" mb={3}>
        OR
      </Box>
      <Box display="flex" justifyContent="center" mb={3}>
        Click to copy the code below
      </Box>
      <Box
        backgroundColor="#111"
        border="1px solid #666"
        borderRadius="5px"
        p={1}
        display="flex"
        justifyContent="center"
      >
        {key}
      </Box>
    </BaseModal>
  );
};

export default ShareKey;
