import UserModel from "../models/user.model"
import { ApiResponse } from "../types"

export const updateUser = async (name: string, accessToken: string, email: string): Promise<ApiResponse> => {
  const exists = await UserModel.findOne({
    email: email,
    name: name,
  })
  if (exists) {
    let u = exists
    u.accessToken = accessToken
    let saved = await u.save().then((savedDoc) => {
      return savedDoc === u
    })
    if (saved) {
      return {
        code: 200,
        message: "updated",
        data: {
          email: u.email,
          token: u.accessToken,
          name: u.name,
        },
      }
    } else {
      return {
        code: 400,
        message: "unable to update",
      }
    }
  } else {
    const user = new UserModel({
      email: email,
      name: name,
      accessToken: accessToken,
    })

    let saved = await user.save().then((savedDoc) => {
      return savedDoc === user
    })

    if (saved) {
      return {
        code: 200,
        message: "updated",
        data: {
          email: user.email,
          token: user.accessToken,
          name: user.name,
        },
      }
    } else {
      return {
        code: 400,
        message: "unable to update",
      }
    }
  }
}
