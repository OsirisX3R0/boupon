import { Box } from "@material-ui/core";
import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalContext";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import BaseModal from "../core/BaseModal";
import QRCode from "./QRCode";

const ShareKey = (props) => {
  const { key } = useContext(GlobalContext);
  const [copied, copy] = useCopyToClipboard(key);

  const copyText = (
    <Box
      display="flex"
      justifyContent="center"
      color={copied ? "#53a318" : "#f5f5f5"}
      mb={3}
    >
      {copied ? "Copied!" : "Click to copy the code below"}
    </Box>
  );

  return (
    <BaseModal {...props}>
      <Box
        display="flex"
        justifyContent="center"
        borderBottom="1px solid #666"
        mb={3}
        pb={1}
      >
        Scan your code
      </Box>
      <Box display="flex" justifyContent="center" mb={3}>
        <QRCode value={`${window.location.origin}?key=${key}`} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        borderTop="1px solid #666"
        mb={3}
        pt={1}
      >
        OR
      </Box>
      {copyText}
      <Box
        border={`1px solid ${copied ? "#53a318" : "#666"}`}
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
