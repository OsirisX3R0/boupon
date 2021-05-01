import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { LoginContainer, LoginForm } from "../styles";

const Login = () => {
  const { setAuthenticated } = useContext(GlobalContext);
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(process.env.REACT_APP_PASSWORD);
    if (password === process.env.REACT_APP_PASSWORD) {
      setAuthenticated("base");
    }

    if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
      setAuthenticated("admin");
    }
  }, [password, setAuthenticated]);

  return (
    <LoginContainer>
      <LoginForm>
        <h4>Please enter the password</h4>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
