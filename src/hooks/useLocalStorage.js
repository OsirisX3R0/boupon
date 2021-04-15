import { useRef, useState } from "react";

const useLocalStorage = (storageKey) => {
  const key = useRef(storageKey);
  let storageValue = localStorage.getItem(key.current)
    ? JSON.parse(localStorage.getItem(key.current))
    : null;
  const [value, setValue] = useState(storageValue);

  const setStorage = (newValue) => {
    localStorage.setItem(key.current, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setStorage];
};

export default useLocalStorage;
