import app from "./app";
import cityRoutes from "./routes/cities";

const PORT = process.env.PORT || 4000;

app.use("/api/cities", cityRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
