import { defineLink } from "@medusajs/framework/utils"
import DomainModule from "../modules/domain"
import OrderModule from "@medusajs/medusa/order"

export default defineLink(
  DomainModule.linkable.domain,
  OrderModule.linkable.order
)
