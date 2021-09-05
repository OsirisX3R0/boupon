import { useRef } from "react";
import qs from "query-string";
import { useLocation } from "react-router";

const useQueryString = () => {
  let location = useLocation();
  let query = useRef(location.search);

  return qs.parse(query.current);
};

export default useQueryString;
