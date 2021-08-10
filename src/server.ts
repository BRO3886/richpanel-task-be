import http from "http"
import app from "./app"
import * as dotenv from "dotenv"
import { log } from "./logging"

dotenv.config()
const PORT: number = Number(process.env.PORT) || 8001

const server = http.createServer(app)
server.listen(PORT, async () => {
  log.info(`server started on port: ${PORT}`)
})
