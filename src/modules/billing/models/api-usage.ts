import { model } from "@medusajs/framework/utils"

export const ApiUsage = model.define("api_usage", {
  id: model.id().primaryKey(),
  user_id: model.text(),                // foreign-key ke user
  api_key_id: model.text().index(),

  api_name: model.text(),

  date: model.dateTime(),
  // format: YYYY-MM-DD (daily aggregation)

  request_count: model.number().default(0),

  success_count: model.number().default(0),

  failed_count: model.number().default(0),

  plan_id: model.text().nullable(),

  metadata: model.json().nullable(),
})

export default ApiUsage;
