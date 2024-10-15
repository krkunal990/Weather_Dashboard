import React from "react";
import "./styles.css";
import axios from "axios";

const WeatherDisplayComponent = ({
  weatherData,
  unit,
  setUnit,
  fetchWeather,
  city,
  favoriteCities,
  fetchFavorites,
}) => {
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
    fetchWeather(city, newUnit);
  };

  const favButton = async () => {
    try {
      const newFavorite = { city: city };
      console.log(newFavorite) 
      if(newFavorite){
      await axios.post("http://localhost:5000/favorites", newFavorite);
      fetchFavorites();}
    } catch (error) {
      console.error("Error adding city to favorites:", error);
    }
  };
  const presentCity = favoriteCities?.filter(
    (fav) => fav.city.toLowerCase() === city.toLowerCase()
  );

  return (
    <div className="weather-container">
      <h2>Current Weather for {weatherData.city.name}</h2>
      <p>
        Temperature: {weatherData.list[0].main.temp}{" "}
        {unit === "metric" ? "°C" : "°F"}
      </p>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: '2%'}}>
      <button className="unit-toggle-button" onClick={toggleUnit}>
        Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
      </button>
      {presentCity[0]?.city?.toLowerCase() !== city?.toLowerCase() && (
        <button className="unit-toggle-button" onClick={favButton}>
          {"Add to favorite"}
        </button>
      )}
      </div>
      <h3>5-Day Forecast</h3>
      <ul className="forecast-list">
        {weatherData.list.slice(0, 5).map((forecast, index) => (
          <li key={index}>
            {forecast.dt_txt}: {forecast.main.temp}{" "}
            {unit === "metric" ? "°C" : "°F"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherDisplayComponent;
