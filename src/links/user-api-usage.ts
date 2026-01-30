import { defineLink } from "@medusajs/framework/utils"
import UserModule from "@medusajs/medusa/user"
import BillingApiUsageModule from "../modules/billing"

export default defineLink(
  {
    linkable: UserModule.linkable.user,
    deleteCascade: true
  },
  BillingApiUsageModule.linkable.apiUsage
)
