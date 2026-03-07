import { model } from "@medusajs/framework/utils"

 const Domain = model.define("domain", {
  id: model.id().primaryKey(),
  name: model.text(),
  slug: model.text(),
  is_active: model.boolean().default(true),
  is_premium: model.boolean().default(false),
  metadata: model.json(),

})

export default Domain;