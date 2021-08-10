import express from "express"
import { log, reqLogger } from "./logging"

const app = express()

// allow only application/json
app.use((req, res, next) => {
  express.json()(req, res, (err) => {
    if (err) {
      log.error(err)
      return res.status(422).json({
        code: 422,
        message: "possibly malformed body",
      })
    }
    next()
  })
})
// does the same for URL-encoded requests
app.use(express.urlencoded({ extended: true }))
// morgan
app.use(reqLogger)

app.get("/", (req, res) => {
  return res.status(200).json({ ping: "pong" })
})

export default app
