import { useState, useEffect } from "react";
import axios from "axios";
import CityCard from "./components/CityCard";
import SearchBox from "./components/SearchBox";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  console.log(API_URL);

  const [cities, setCities] = useState<string[]>(["London", "New York"]);
  const [weather, setWeather] = useState<any>({});

  const fetchWeather = (city: string) => {
    axios.get(`${API_URL}/weather/${city}`).then(res => {
      setWeather((prev: any) => ({ ...prev, [city]: res.data }));
    });
  };

  useEffect(() => {
    cities.forEach(city => fetchWeather(city));
  }, [cities]);

  const addCity = (city: string) => {
    if (!cities.includes(city)) {
      setCities([...cities, city]);
      fetchWeather(city);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🌤️ Weather Dashboard</h1>
      <SearchBox onSearch={addCity} />
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {cities.map(city => (
          <CityCard key={city} city={city} data={weather[city]} />
        ))}
      </div>
    </div>
  );
}

export default App;
