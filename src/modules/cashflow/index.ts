import CashflowModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const CASHFLOW_MODULE = "cashflow"

export default Module(CASHFLOW_MODULE, {
  service: CashflowModuleService,
})