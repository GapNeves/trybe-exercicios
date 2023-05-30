import { useState } from 'react'

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

  function handChange(e) {
    setValue(e.target.value);
  }

  return {
    value: value,
    onChange:handChange,
  };
}

export default useFormInput