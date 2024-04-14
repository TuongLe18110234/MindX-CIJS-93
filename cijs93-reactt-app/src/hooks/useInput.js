import { useState } from "react";
import { useLocalStorage  } from "@uidotdev/usehooks";


const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [localValue, setLocalValue] = useLocalStorage("email", null);

  const onChange = (e) => {
    setValue(e.target.value);
    setLocalValue(value);
    console.log('Value: ', value);
    console.log('Local value: ', localValue);
  };

  return { value, onChange };
}

export { useInput };