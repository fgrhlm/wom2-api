import compression from "compression";
import express from "express";
import helmet from "helmet";
import router from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 8080;


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