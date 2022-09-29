import {useState} from "react";

import Weather from "./components/Weather";
import SearchBar from "./components/SearchBar";
import WeatherForecastChart from "./components/WeatherForecastChart";
import {getWeatherFromApi} from "./utils/api";

import "./styles/main.scss";

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [forecastData, setForecastData] = useState({});

    async function handleSearch() {
        const data = await getWeatherFromApi(searchValue);
        setForecastData(data);
        setSearchValue('');
    }

    return (
        <main className="App">
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch}/>
            <Weather/>
            <WeatherForecastChart/>
        </main>
    );
}

export default App;
