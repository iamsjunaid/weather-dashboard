import axios from "axios";

const fetchWeather = async (city: string) => {
  try {
    const res = await axios.get(`http://localhost:4000/api/weather/${city}`);
    return res.data;
  } catch (err) {
    console.error(`Failed to fetch weather for "${city}":`, err);
    throw new Error(`Weather data for "${city}" is not available.`);
  }
};

export default fetchWeather;
