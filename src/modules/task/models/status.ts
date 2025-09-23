import { model } from "@medusajs/framework/utils"

const Status = model.define("status", {
  id: model.id().primaryKey(),
  name: model.text()
})

export default Status