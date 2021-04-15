import { useRef, useState } from "react";

const useLocalStorage = (storageKey) => {
  const key = useRef(storageKey);
  let storageValue = JSON.parse(localStorage.getItem(key.current));
  const [value, setValue] = useState(storageValue);

  const setStorage = (newValue) => {
    localStorage.setItem(key.current, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setStorage];
};

export default useLocalStorage;
