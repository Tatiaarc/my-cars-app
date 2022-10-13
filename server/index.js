import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import carRoutes from "./routes/cars.routes.js";

const app = express();

const corsOptions = {
  origin: "https://my-cars-app-production-6336.up.railway.app",
  optionsSuccessStatus: 200,
};

// app.use(cors());
app.get("/cars/:id", cors(corsOptions), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for only gorgeous_fall." });
});
app.use(express.json());

app.use(indexRoutes);
app.use(carRoutes);

app.listen(PORT);
console.log("Server on port " + PORT);
