import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import weatherRoutes from "./routes/weatherRoutes";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "https://weather-dashboard-navy-five.vercel.app/",
  methods: ["GET", "POST", "DELETE"],
  credentials: true
}));

dotenv.config();

app.use(express.json());

app.use("/api/weather", weatherRoutes);
mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

export default app;
