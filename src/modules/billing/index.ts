import BillingModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const BILLING_MODULE = "billing"

export default Module(BILLING_MODULE, {
    service: BillingModuleService
})

