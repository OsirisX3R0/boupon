import { useContext } from "react";
import { Typography } from "@material-ui/core";
import { EnterKeyContext } from "../../context/EnterKeyContext";
import { BlockButton, CenteredTextField, ModalHead } from "../../styles";
import MarginButton from "../core/button/MarginButton";
import MarginTextField from "../core/input/MarginTextField";

const FindAccount = () => {
  const { getUsers, setUsers, setLocalName, localKey, setLocalKey, nextStep } =
    useContext(EnterKeyContext);

  const innerGetAccount = () => {
    getUsers().then((res) => {
      setUsers(res.data);
      setLocalName(res.data[0].data.name);
      nextStep();
    });
  };

  return (
    <>
      <Typography variant="h3">Enter code</Typography>
      <MarginTextField
        label="code"
        centered
        variant="outlined"
        fullWidth
        value={localKey}
        onChange={(e) => setLocalKey(e.target.value)}
      />
      <MarginButton
        top="1.5rem"
        color="primary"
        fullWidth
        variant="contained"
        onClick={innerGetAccount}
      >
        Find account
      </MarginButton>
    </>
  );
};

export default FindAccount;
