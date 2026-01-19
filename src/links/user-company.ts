// src/links/user-company.ts
import { defineLink } from "@medusajs/framework/utils"
import UserModule from "@medusajs/medusa/user"
import BillingCompanyModule from "../modules/billing"

export default defineLink(
    {
        linkable: UserModule.linkable.user,
        deleteCascade: true
    },
    BillingCompanyModule.linkable.company
)
