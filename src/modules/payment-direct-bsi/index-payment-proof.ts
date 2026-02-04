import PaymentProofService from "./payment-proof-service"
import { Module } from "@medusajs/framework/utils"

export const PAYMENT_PROOF_MODULE = "payment-proof"

export default Module(PAYMENT_PROOF_MODULE, {
    service: PaymentProofService
})
