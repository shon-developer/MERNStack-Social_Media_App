import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/auth", postRoutes);

// starting a server
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

export default app;
