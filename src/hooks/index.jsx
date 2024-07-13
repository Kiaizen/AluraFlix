import { useState } from 'react';

export const useFormState = (initialState, validate) => {
  const [inputs, setInputs] = useState(initialState);
  const [errors, setErrors] = useState({});

  const aoMudar = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const aoLimpar = () => {
    setInputs(initialState);
    setErrors({});
  };

  const aoValidar = () => {
    const validationErrors = validate(inputs);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return {
    inputs,
    errors,
    aoMudar,
    aoLimpar,
    aoValidar,
    setInputs
  };
};
