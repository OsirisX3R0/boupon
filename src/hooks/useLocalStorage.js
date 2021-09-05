import { useRef, useState, useEffect } from "react";

const useLocalStorage = (storageKey, initialValue = null) => {
  const key = useRef(storageKey);
  const initial = useRef(initialValue);
  let storageValue = localStorage.getItem(key.current)
    ? JSON.parse(localStorage.getItem(key.current))
    : initialValue && initialValue.current
    ? initialValue.current
    : initialValue;
  const [value, setValue] = useState(storageValue);

  useEffect(() => {
    if (initial.current && localStorage.getItem(key.current) === null)
      setStorage(initial.current);
  }, []);

  const setStorage = (newValue) => {
    localStorage.setItem(key.current, JSON.stringify(newValue));
    setValue(newValue);
  };

  const removeItem = () => {
    localStorage.removeItem(key.current);
  };

  return [value, setStorage, removeItem];
};

export default useLocalStorage;
