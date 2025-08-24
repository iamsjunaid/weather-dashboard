import { Router } from "express";
import axios from "axios";
import { Weather } from "../models/Weather";

const router = Router();

router.get("/:city", async (req, res) => {
  const { city } = req.params;
  try {
    const cached = await Weather.findOne({ city });

    // Cache for 10 minutes
    if (cached && Date.now() - cached.updatedAt.getTime() < 10 * 60 * 1000) {
      return res.json(cached.data);
    }

    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          q: city,
          appid: process.env.OPENWEATHER_KEY,
          units: "metric",
        },
      }
    );

    await Weather.findOneAndUpdate(
      { city },
      { data: response.data, updatedAt: new Date() },
      { upsert: true }
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

export default router;
