import mongoose from "mongoose";

const WeatherSchema = new mongoose.Schema({
  city: { type: String, required: true, unique: true },
  data: { type: Object, required: true },
  updatedAt: { type: Date, default: Date.now },
});

export const Weather = mongoose.model("Weather", WeatherSchema);
