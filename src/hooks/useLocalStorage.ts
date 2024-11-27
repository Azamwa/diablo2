import { useState } from "react";

export const useLocalStorage = (key: string) => {
  const [storageItem, setStorageItem] = useState({ key, value: localStorage.getItem(key) });

  const setLocalStorage = (value: unknown) => {
    setStorageItem({ key, value: JSON.stringify(value) });
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { storageItem, setLocalStorage };
};