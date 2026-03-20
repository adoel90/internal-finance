import { defineLink } from "@medusajs/framework/utils"
import DomainModule from "../modules/domain"
import ProductModule from "@medusajs/medusa/product"

export default defineLink(
  {
    linkable: DomainModule.linkable.domain,
    isList: true,
  },
  ProductModule.linkable.product
)
