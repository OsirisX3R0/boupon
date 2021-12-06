import { useRef } from "react";
import qs from "query-string";
import { useRouter } from "next/router";
/// REACT ROUTER REFACTOR HERE

const useQueryString = () => {
  let router = useRouter();
  let query = useRef(router.query);

  return query.current;
};

export default useQueryString;
