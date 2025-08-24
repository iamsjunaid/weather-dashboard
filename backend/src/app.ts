import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import weatherRoutes from "./routes/weatherRoutes";
import cors from "cors";

const app = express();

// allow your frontend origin
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
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
