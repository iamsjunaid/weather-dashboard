import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import weatherRoutes from "./routes/weatherRoutes";
import { log } from "console";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/weather", weatherRoutes);
console.log("MongoDB URI:", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

export default app;
