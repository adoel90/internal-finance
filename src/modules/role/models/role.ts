import { model } from "@medusajs/framework/utils"

const Role = model.define("role", {
  id: model.id().primaryKey(),
  name: model.text()
})

export default Role