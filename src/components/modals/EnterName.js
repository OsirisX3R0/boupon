import axios from "axios";

import BaseModal from "../modals/BaseModal";
import { BlockButton, CenteredTextField } from "../../styles";

const EnterName = ({ setKey, ...props }) => {
  const createAccount = () => {
    axios.post("/api/account/create").then((res) => {
      setKey(res.data.key);
    });
  };

  return (
    <BaseModal title="Tell us your name" {...props}>
      <CenteredTextField type="text" />
      <BlockButton topMargin="1.5rem" primary onClick={createAccount}>
        Let's Go!
      </BlockButton>
    </BaseModal>
  );
};

export default EnterName;
