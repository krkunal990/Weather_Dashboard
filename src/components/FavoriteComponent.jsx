import React from 'react';
import './styles.css';

const FavoriteComponent = ({ favoriteCities, removeFavorite, fetchWeather, addFavorite, setCity }) => {
  return (
    <div className="favorite-container">
      <h2>Favorite Cities</h2>
      <ul className="favorite-list">
        {favoriteCities.map((fav) => (
          <li key={fav.id}>
            {fav.city}
            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
              <button onClick={() => {
                setCity(fav.city)
                fetchWeather(fav.city)
              }}>Show Weather</button>
              <button onClick={() => removeFavorite(fav.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="add-favorite-button" onClick={() => addFavorite(prompt('Enter a city to add:'))}>
        Add Favorite
      </button>
    </div>
  );
};

export default FavoriteComponent;