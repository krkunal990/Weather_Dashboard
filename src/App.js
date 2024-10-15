import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SearchComponent from "./components/SearchComponent";
import FavoriteComponent from "./components/FavoriteComponent";
import WeatherDisplayComponent from "./components/WeatherDisplayComponent";

const apiKey = "330ed3854b52e297f828161feccf6d15";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [unit, setUnit] = useState("metric");
  const [city, setCity] = useState("");
  console.log(city)

  const fetchWeather = async (city, unitOverride = unit) => {
    if (city) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unitOverride}&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [unit]);

  const fetchFavorites = async () => {
    const response = await axios.get("http://localhost:5000/favorites");
    setFavoriteCities(response.data);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const addFavorite = async (city) => {
    const newFavorite = { city };
    if (newFavorite.city) {
      await axios.post("http://localhost:5000/favorites", newFavorite);
      fetchFavorites();
    }
  };

  const removeFavorite = async (id) => {
    await axios.delete(`http://localhost:5000/favorites/${id}`);
    fetchFavorites();
  };

  return (
    <div>
      <SearchComponent
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />
      <div
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-evenly",
        }}
      >
        {weatherData && (
          <WeatherDisplayComponent
            weatherData={weatherData}
            unit={unit}
            setUnit={setUnit}
            fetchWeather={fetchWeather}
            city={city}
            favoriteCities={favoriteCities}
            fetchFavorites={fetchFavorites}
          />
        )}
        <FavoriteComponent
          favoriteCities={favoriteCities}
          removeFavorite={removeFavorite}
          fetchWeather={fetchWeather}
          addFavorite={addFavorite}
          setCity={setCity}
          city={city}
        />
      </div>
    </div>
  );
}

export default App;
