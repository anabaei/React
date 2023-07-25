import React, { useState, useEffect } from 'react';
import axios from 'axios'

const useThrottle = (callback, delay) => {
  const [lastExecuted, setLastExecuted] = useState(Date.now());

  useEffect(()=>{
    const fetchAPI = async() =>{
      const response= await fetch('https://weatherapi-com.p.rapidapi.com/astronomy.json?q=Vancouver',{
       headers: {
         'X-RapidAPI-Key': 'edceda2db3msh108f2ee9faf40a7p162e2ajsn545dda337957',
         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
       }
      })
      return response  
   }
   fetchAPI()
  },[])

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

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/astronomy.json',
  params: {q: 'Vancouver'},
  headers: {
    'X-RapidAPI-Key': 'edceda2db3msh108f2ee9faf40a7p162e2ajsn545dda337957',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

const fetchAPI = async() =>{
   const response= await fetch('https://weatherapi-com.p.rapidapi.com/astronomy.json?q=Vancouver',{
    headers: {
      'X-RapidAPI-Key': 'edceda2db3msh108f2ee9faf40a7p162e2ajsn545dda337957',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
   })
  
   const data = await response.json();

   return data  
}

const ThrottledButton = () => {
  const handleClick = useThrottle(() => {

    console.log('Button clicked!');
    // Your logic here
  }, 0);

  return (
    <button onClick={handleClick}>
      Click me (throttled)
    </button>
  );
};

export default ThrottledButton;
