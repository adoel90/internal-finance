import { model } from "@medusajs/framework/utils"

const Staff = model.define("staff", {
  id: model.id().primaryKey(),
  firstName: model.text(),
  lastName: model.text(),
  email: model.text(),
})

export default Staff