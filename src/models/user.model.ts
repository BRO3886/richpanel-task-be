import { Schema, model, ObjectId } from "mongoose"

interface User {
  id: ObjectId
  name: string
  email: string
  accessToken: string
}

const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  accessToken: { type: String, required: true },
})

const UserModel = model<User>("User", schema)

export default UserModel
