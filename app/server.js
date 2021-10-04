import compression from "compression";
import express from "express";
import helmet from "helmet";
import router from "./routes/index.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "./utilities/logger.js";

// Dotenv
dotenv.config()

// Express
const app = express();
const PORT = process.env.APP_PORT || 8080;

app.use(logger);

// MongoDB anslutning
mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`)

// Helmet
// Rekommendation från https://expressjs.com/en/advanced/best-practice-security.html
// https://www.npmjs.com/package/helmet
app.use(helmet());

// Rekommendation från https://expressjs.com/en/advanced/best-practice-performance.html
// gzip kompression för response bodies
// https://www.npmjs.com/package/compression
app.use(compression());

// JSON middleware
app.use(express.json());

// Routes
app.use(router);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));