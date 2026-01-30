import PaymentDirectMidtransModuleService from "./service"
import { Module } from "@medusajs/framework/utils"
export const PAYMENT_DIRECT_MIDTRANS_MODULE = "midtrans_payment_direct"

export default Module(PAYMENT_DIRECT_MIDTRANS_MODULE, {
  service: PaymentDirectMidtransModuleService
})
