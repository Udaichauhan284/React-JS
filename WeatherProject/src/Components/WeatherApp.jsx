const apiKey = "98b31ce64b42bb102551088b707d96c8";

import "./WeatherApp.css";
import searchIcon from "./Assets/search.png";
import clearIcon from "./Assets/clear.png";
import cloudIcon from "./Assets/cloud.png";
import drizzleIcon from "./Assets/drizzle.png";
import humidityIcon from "./Assets/humidity.png";
import rainIcon from "./Assets/rain.png";
import snowIcon from "./Assets/snow.png";
import windIcon from "./Assets/wind.png";
import { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [error, setError] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState("")
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

  const search = async () => {
    try {
      const response = await fetch(apiURL);

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setError(null);
        setCity("");

        // Set weather icon based on weather condition
        if (data.weather[0].main === 'Clouds') {
          setWeatherIcon(cloudIcon);
        } else if (data.weather[0].main === 'Clear') {
          setWeatherIcon(clearIcon);
        } else if (data.weather[0].main === 'Drizzle') {
          setWeatherIcon(drizzleIcon);
        } else if (data.weather[0].main === 'Rain') {
          setWeatherIcon(rainIcon);
        } else if (data.weather[0].main === 'Snow') {
          setWeatherIcon(snowIcon);
        }
      } else if (response.status === 404) {
        setError("City Not Found");
        setWeatherData(null);
      } else {
        setError("Error fetching weather data");
        setWeatherData(null);
      }
    } catch (error) {
      setError("Error fetching weather data");
      setWeatherData(null);
    }
  };

  return (
    <>
      <div className="container">
        <div className="top-bar">
          <input
            className="cityInput"
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <div className="search-icon">
            <img
              src={searchIcon}
              className="searchIcon"
              onClick={() => search()}
            />
          </div>
        </div>

        {weatherData && (
          <>
            <div className="weather-image">
              <img src={weatherIcon} className="weatherIcon" />
            </div>
            <div className="weather-temp">{Math.floor(weatherData.main.temp)}&deg;C</div>
            <div className="weather-location">{weatherData.name}</div>

            <div className="data-container">
              <div className="element">
                <img className="icon" src={windIcon}></img>
                <div className="data">
                  <div className="text">{Math.floor(weatherData.wind.speed)}km/h</div>
                  <div className="wind-present">Wind</div>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={humidityIcon}></img>
                <div className="data">
                  <div className="text">{weatherData.main.humidity}%</div>
                  <div className="humidity-present">Humidity</div>
                </div>
              </div>
            </div>
          </>
        )}

        {error && <div className='error-message'>{error}</div>}
      </div>
    </>
  );
}
export default WeatherApp;
