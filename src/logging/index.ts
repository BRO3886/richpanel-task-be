import morgan from "morgan"
import winston from "winston"
import { Logger } from "winston"

const logStream = {
  write: (message: string): Logger => log.info(message),
}

const reqLogger = morgan(":method :url :status :res[content-length] - :response-time ms", {
  stream: logStream,
})

const log = winston.createLogger({
  level: "silly",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      level: "silly",
      handleExceptions: true,
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    }),
  ],
})

export { log, reqLogger }
