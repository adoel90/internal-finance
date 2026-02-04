import PaymentProofService from "./service"
import { Module } from "@medusajs/framework/utils"

export const PAYMENT_PROOF_MODULE = "payment_proof"

export default Module(PAYMENT_PROOF_MODULE, {
    service: PaymentProofService
})