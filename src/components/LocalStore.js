/** @format */
import React, { useState, useEffect } from "react";

const prefix = "code-pen-";


function LocalStore(key, initialValue) {
  const prefixKey = prefix + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixKey);
    
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixKey, JSON.stringify(value));
  }, [value, prefixKey]);

  return [value, setValue];
}

export default LocalStore;
