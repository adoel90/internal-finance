import SaldoModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const SALDO_MODULE = "saldo"

export default Module(SALDO_MODULE, {
    service: SaldoModuleService
})

