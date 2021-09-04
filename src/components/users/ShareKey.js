import { Box } from "@material-ui/core";
import { useContext, useEffect } from "react";

import { GlobalContext } from "../../context/GlobalContext";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import BaseModal from "../core/modals/BaseModal";
import QRCode from "./QRCode";

const ShareKey = (props) => {
  const { key, colorTheme } = useContext(GlobalContext);
  const [copied, copy] = useCopyToClipboard(key);
  let border = "1px solid #666";
  useEffect(() => {
    if (copied) {
      border = "1px solid #53a318";
    }
  }, [copied]);

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
        border={border}
        borderRadius="5px"
        p={1}
        display="flex"
        justifyContent="center"
        onClick={() => copy()}
      >
        {key}
      </Box>
    </BaseModal>
  );
};

export default ShareKey;
