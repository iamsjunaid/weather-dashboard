import axios from "axios";

const API_URL = "http://localhost:4000/api/cities";

export const getCities = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch cities:", err);
    return []; // return empty list on error
  }
};

export const addCity = async (city: string) => {
  try {
    const res = await axios.post(API_URL, { city });
    return res.data;
  } catch (err) {
    console.error(`Failed to add city "${city}":`, err);
    throw new Error("Could not add city. Please try again.");
  }
};

export const removeCity = async (city: string) => {
  try {
    const res = await axios.delete(`${API_URL}/${city}`);
    return res.data;
  } catch (err) {
    console.error(`Failed to remove city "${city}":`, err);
    throw new Error("Could not remove city. Please try again.");
  }
};
