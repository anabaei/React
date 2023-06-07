import React, { useState, useEffect } from 'react';

const useThrottle = (callback, delay) => {
  const [lastExecuted, setLastExecuted] = useState(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      const now = Date.now();
      if (now - lastExecuted >= delay) {
        callback();
        setLastExecuted(now);
      }
    }, delay - (Date.now() - lastExecuted));

    return () => clearTimeout(timer);
  }, [callback, delay, lastExecuted]);

  return callback;
};

const ThrottledButton = () => {
  const handleClick = useThrottle(() => {
    console.log('Button clicked!');
    // Your logic here
  }, 1000000);

  return (
    <button onClick={handleClick}>
      Click me (throttled)
    </button>
  );
};

export default ThrottledButton;
