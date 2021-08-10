import { Schema, model, ObjectId } from "mongoose"

interface Page {
  id: ObjectId
  uID: string
  name: string
  fbID: string
  token: string
}

const schema = new Schema<Page>({
  uID: { type: String, required: true },
  name: { type: String, required: true },
  fbID: { type: String, required: true },
  token: { type: String, required: true },
})

const PageModel = model<Page>("Page", schema)

export default PageModel
