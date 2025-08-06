import PaymentModuleService from "./service"
import { Module } from "@medusajs/framework/utils"
import { ModuleProviderExports } from "@medusajs/framework/types"
export const PAYMENT_MODULE = "payment"

export default Module(PAYMENT_MODULE, {
  service: PaymentModuleService,
})


// const services = [PaymentModuleService]

// const providerExport: ModuleProviderExports = {
//   services,
// }

// export default providerExport