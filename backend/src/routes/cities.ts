import { Router } from "express";
import City from "../models/City";

const router = Router();

// Default starter cities
const DEFAULT_CITIES = ["London", "Paris", "New York"];

// Get all cities
router.get("/", async (req, res) => {
  let cities = await City.find().sort({ name: 1 });

  // Seed defaults if empty
  if (cities.length === 0) {
    await City.insertMany(DEFAULT_CITIES.map(name => ({ name })));
    cities = await City.find().sort({ name: 1 });
  }

  res.json(cities.map(c => c.name));
});

// Add a city
router.post("/", async (req, res) => {
  const { city } = req.body;
  if (!city) return res.status(400).json({ message: "City required" });

  const exists = await City.findOne({ name: city });
  if (!exists) {
    await City.create({ name: city });
  }

  const cities = await City.find().sort({ name: 1 });
  res.json(cities.map(c => c.name));
});

// Remove a city
router.delete("/:city", async (req, res) => {
  const { city } = req.params;
  await City.deleteOne({ name: city });

  const cities = await City.find().sort({ name: 1 });
  res.json(cities.map(c => c.name));
});

export default router;
