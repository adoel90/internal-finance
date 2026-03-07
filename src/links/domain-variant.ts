import { defineLink } from "@medusajs/framework/utils"
import DomainModule from "../modules/domain"
import ProductModule from "@medusajs/medusa/product"

export default defineLink(
  DomainModule.linkable.domain,
  ProductModule.linkable.productVariant
)
