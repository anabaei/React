import React, { useState, useEffect } from 'react';

const DebouncedInput = () => {
  const [inputValue, setInputValue] = useState('');
  
  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    
    return (...args) => {
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Debounced input change handler
  const debouncedHandleInputChange = debounce(handleInputChange, 300);

  // Attach debounced handler to input
  useEffect(() => {
    const inputElement = document.getElementById('inputId');
    inputElement.addEventListener('input', debouncedHandleInputChange);

    return () => {
      inputElement.removeEventListener('input', debouncedHandleInputChange);
    };
  }, [debouncedHandleInputChange]);

  return (
    <div>
      <input id="inputId" type="text" value={inputValue} />
    </div>
  );
};

export default DebouncedInput;
