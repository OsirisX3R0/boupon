import { useContext, useEffect } from "react";
import { useHistory } from "react-router";

import { GlobalContext } from "../context/GlobalContext";

const useRedirect = () => {
  const history = useHistory();
  const { key, name } = useContext(GlobalContext);

  useEffect(() => {
    switch (history.location.pathname) {
      case "/":
        if (key && name) history.push("/coupons");
        break;
      default:
        if (!key || !name) history.push("/");
    }
  }, [history, key, name]);
};

export default useRedirect;
