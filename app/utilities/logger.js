import winston from "winston";
import expressWinston from "express-winston";

// Logging
// Lånat härifrån https://www.npmjs.com/package/express-winston


const logger = new expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.cli(),
        winston.format.colorize()
    ),
    meta: false,
    msg: "HTTP {{req.method}} {{req.url}}",
    colorize: true,
})

export default logger;