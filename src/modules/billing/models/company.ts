// src/modules/company-info/models/company.ts
import { model } from "@medusajs/framework/utils"

export const BillingCompany = model.define("company", {
  id: model.id().primaryKey(),
  user_id: model.text(),                // foreign-key ke user
  company_name: model.text(),
  company_logo: model.text().nullable(),
})


export default BillingCompany;