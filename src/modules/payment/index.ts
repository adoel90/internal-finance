import PaymentModuleService from "./service"
import { ModuleProvider, Modules } from "@medusajs/framework/utils"
// export const PAYMENT_MODULE = "midtrans_payment"

// export default Module(PAYMENT_MODULE, {
//   services: [PaymentModuleService],
// })


export default ModuleProvider(Modules.PAYMENT, {
  services: [PaymentModuleService]
})

// const services = [PaymentModuleService]

// const providerExport: ModuleProviderExports = {
//   services,
// }

// export default providerExport