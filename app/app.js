import compression from "compression";
import express from "express";
import helmet from "helmet";
import router from "./routes/index.js";
import dotenv from "dotenv";
import logger from "./utilities/logger.js";

// Dotenv
dotenv.config()

// Express
const app = express();

app.use(logger);

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

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes
app.use(router);

export default app;