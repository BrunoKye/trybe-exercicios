import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || initialValue);

  const setStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  const clearStorage = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  }
  
  return [value, setStorage, clearStorage]
}
