import winston from "winston";
import expressWinston from "express-winston";

// Logging - https://www.npmjs.com/package/express-winston
const logger = new expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.cli(),
        winston.format.colorize()
    ),
    meta: false,
    msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    colorize: true,
})

export default logger;