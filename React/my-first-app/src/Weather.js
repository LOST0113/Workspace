// src/Weather.js
import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '264ea4e8250c55662db59bd1cfaf1022';

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
      />
      <button onClick={getWeatherData}>Get Weather</button>

      {weatherData && (
        <div>
          <h3>Weather in {weatherData.name}, {weatherData.sys.country}</h3>
          <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)} C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
