import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import blogRoutes from "./routes/blog.routes.mjs";

const app = express();

const corsOptions = {
  origin: true, // Replace with your allowed origin(s)
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], // Specify the HTTP methods allowed
  allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed request headers
  credentials: true, // Enable sending cookies across different domains
  preflightContinue: false, // Disable preflight requests caching
  optionsSuccessStatus: 200, // Set the response status code for successful OPTIONS requests
}

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ limit: "1mb", extended: false }));

app.use("/api/blog", blogRoutes);

export default app;
