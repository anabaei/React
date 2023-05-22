import { useState, useEffect } from "react";
import axios from "axios";

// now import later find the reason why import json is different
// than the requlare one
export default function Weather() {
  const [weatherData, setWeather] = useState("");
  const apiUrl = `weather.json`;

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(apiUrl);
      // const data = await response.json();
      console.log(response.data);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const callme = () => {
    console.log("called callme");
  };

  useEffect(() => {
    fetchWeatherData();

    const intervalId = setInterval(fetchWeatherData, 6000); // Refresh every 10 minutes
    console.log(intervalId);
    return () => {
      clearInterval(intervalId);
      console.log("clear ide", intervalId);
    };
  }, []);

  return (
      <div>
      {weatherData ? (
        <>
          <h1>{weatherData.location.name}</h1>
          <p>Description: {weatherData.current.temp_c} C</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
     </div>
   
  );
}
