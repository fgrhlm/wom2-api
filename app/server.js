import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Dotenv
dotenv.config()

// Port
const PORT = process.env.APP_PORT || 8080;

// MongoDB anslutning
mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`)

app.listen(PORT);