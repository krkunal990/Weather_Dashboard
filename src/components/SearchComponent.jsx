import './styles.css'

const SearchComponent = ({ city, setCity, fetchWeather }) => {

  return (
    <div className='search-container'>
      <input
      className='search-input'
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className='search-button' onClick={() => fetchWeather(city)}>Search</button>
    </div>
  );
};

export default SearchComponent;
