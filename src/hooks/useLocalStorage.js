import { useRef, useState, useEffect } from "react";

const useLocalStorage = (storageKey, initialValue = null) => {
  const key = useRef(storageKey);
  let storageValue = localStorage.getItem(key.current)
    ? JSON.parse(localStorage.getItem(key.current))
    : initialValue;
  const [value, setValue] = useState(storageValue);

  // useEffect(() => {
  //   if (initialValue) setStorage(initialValue);
  // }, [initialValue]);

  const setStorage = (newValue) => {
    localStorage.setItem(key.current, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setStorage];
};

export default useLocalStorage;
