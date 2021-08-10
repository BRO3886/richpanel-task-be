import express from "express"
import { updateUser } from "../controllers/user.controller"
import { ApiResponse, ReqRes } from "../types"

const userRouter = express.Router()

type UpdateReq = { email: string; name: string; accessToken: string }

var updateUserRouter: ReqRes<UpdateReq, ApiResponse> = async (req, res) => {
  const email = req.body.email
  const name = req.body.name
  const token = req.body.accessToken

  if (!email || !name || !token) {
    res.status(400).send({
      code: 400,
      message: "required fields missing",
    })
    return
  }

  var response = await updateUser(name, token, email)
  res.status(response.code).send(response)
}

userRouter.put("/update", updateUserRouter)
export default userRouter
