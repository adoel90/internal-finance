import { model } from "@medusajs/framework/utils"

const User = model.define("user", {
  id: model.id().primaryKey(),
  name: model.text(),  
  email: model.text(),
  role_id: model.text(),
})

export default User