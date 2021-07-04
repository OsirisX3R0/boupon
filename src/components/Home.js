import { useEffect } from "react";
import { useHistory } from "react-router";

import useLocalStorage from "../hooks/useLocalStorage";

const Home = () => {
  const history = useHistory();
  const [key] = useLocalStorage("bouponKey");

  useEffect(() => {
    if (key) history.push("/coupons");
  }, [history, key]);

  return (
    <>
      <h3>Welcome!</h3>
      <button>Get Started</button>
      <button>I have a code</button>
    </>
  );
};

export default Home;
