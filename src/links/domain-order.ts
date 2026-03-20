import { defineLink } from "@medusajs/framework/utils"
import DomainModule from "../modules/domain"
import OrderModule from "@medusajs/medusa/order"

export default defineLink(
  {
    linkable: DomainModule.linkable.domain,
    isList: true,
  },
  OrderModule.linkable.order
)
