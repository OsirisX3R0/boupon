import { useEffect } from "react";
import { useHistory } from "react-router";

const useRedirect = (key, name) => {
  const history = useHistory();

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
