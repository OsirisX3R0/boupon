import { useState } from "react";

const useCopyToClipboard = (text, copyTimeout = 2000) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), copyTimeout);
  };

  return [copied, copy];
};

export default useCopyToClipboard;
