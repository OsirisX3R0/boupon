import { useContext, useEffect } from "react";
import { useHistory } from "react-router";

import { GlobalContext } from "../context/GlobalContext";

const useRedirect = () => {
  const history = useHistory();
  const { key } = useContext(GlobalContext);

  useEffect(() => {
    switch (history.location.pathname) {
      case "/":
        if (key) history.push("/coupons");
        break;
      default:
        if (!key) history.push("/");
    }
  }, [history, key]);
};

export default useRedirect;
