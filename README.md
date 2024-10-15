# Weather Dashboard

This Weather Dashboard is a React application that allows users to search for current weather and a 5-day forecast for any city using the OpenWeatherMap API. Users can switch between Celsius and Fahrenheit, add cities to their favorites, and retrieve weather data for their favorite cities.

## Features

- **Search for City**: Users can search for the weather of any city, and the app displays the current temperature and 5-day forecast.
- **Temperature Unit Toggle**: Users can toggle between Celsius and Fahrenheit units for displaying the temperature.
- **Add/Remove Favorite Cities**: Users can add the searched city to their list of favorite cities or remove it if it is already in the favorites.
- **Favorite Cities Management**: View, search, and retrieve weather data for favorite cities stored on a local JSON server.
- **Debounced Search**: The search feature has a debounce mechanism to prevent unnecessary API calls on every keystroke.

## Project Structure

The project is organized into the following components:

1. **`App.js`**: The main application component that holds the state and renders the weather data, search bar, and favorite cities.
2. **`SearchComponent.js`**: A component for searching the city. Includes a debounce to optimize API requests.
3. **`WeatherDisplayComponent.js`**: Displays the current weather and 5-day forecast for the selected city. Also includes the ability to switch temperature units and add the current city to the favorite list.
4. **`FavoriteComponent.js`**: Manages the list of favorite cities, allowing users to view, search, and remove cities from the list.

## Technologies Used

- **React**: For building the frontend user interface.
- **Axios**: For making HTTP requests to the OpenWeatherMap API and the local JSON server.
- **OpenWeatherMap API**: Used to fetch weather data for searched cities.
- **JSON Server**: For handling favorite cities storage locally.

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or above)
- npm (Node package manager)

### Installing Dependencies

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/krkunal990/Weather_Dashboard.git
   cd Weather_Dashboard
   ```

2. Install the required npm packages:

   ```bash
   npm install

### Running the JSON Server

The project uses JSON Server to store and manage favorite cities.

1. Install JSON Server globally (if not already installed):

   ```bash
   npm install -g json-server
   ```

2. Create a `db.json` file in the root of your project with the following structure:

   ```json
   {
     "favorites": []
   }
   ```

3. Start the JSON server by running:

   ```bash
   json-server --watch db.json --port 5000
   ```

### Running the React Application

1. In a separate terminal, start the React development server:

   ```bash
   npm start
   ```

2. The app will be available at [http://localhost:3000](http://localhost:3000).

### Key Features

- **Search Weather**: Use the search bar to look up the current weather and 5-day forecast for any city.
- **Temperature Unit Toggle**: Switch between Celsius and Fahrenheit by clicking the toggle button in the weather display.
- **Manage Favorites**: Add or remove cities from your list of favorites and view their weather.


## Additional Notes

- The weather data is refreshed when the user switches between Celsius and Fahrenheit.
- Make sure your JSON server is running to store and retrieve favorite cities.
