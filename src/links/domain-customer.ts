import { defineLink } from "@medusajs/framework/utils"
import DomainModule from "../modules/domain"
import CustomerModule from "@medusajs/medusa/customer"

export default defineLink(
  DomainModule.linkable.domain,
  CustomerModule.linkable.customer
)
