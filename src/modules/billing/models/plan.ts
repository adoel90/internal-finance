import { model } from "@medusajs/framework/utils"
import Subscription from "./subscription"

export default model.define("plan", {
  id: model.id({ prefix: "plan" }).primaryKey(),
  name: model.text().searchable(),
  subscriptions: model.hasMany(() => Subscription, {
    mappedBy: "plan",
  }),
})