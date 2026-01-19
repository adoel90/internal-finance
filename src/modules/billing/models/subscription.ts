import { model } from "@medusajs/framework/utils"
import Plan from "./plan"

export default model.define("subscription", {
  id: model.id({ prefix: "sub" }).primaryKey(),
  organization_id: model.text(),
  plan: model.belongsTo(() => Plan),
  current_period_start: model.dateTime(),
  current_period_end: model.dateTime(),
  started_at: model.dateTime(),
})
