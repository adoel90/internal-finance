import PaymentProviderService from "./service"
import { ModuleProvider, Modules } from "@medusajs/framework/utils"

export default ModuleProvider(Modules.PAYMENT, {
  services: [PaymentProviderService as unknown as new (...args: any[]) => any],
})
