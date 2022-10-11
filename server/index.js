import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import carRoutes from "./routes/cars.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(carRoutes);

app.listen(PORT);
console.log("Server on port " + PORT);
