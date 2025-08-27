"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("./service"));
const utils_1 = require("@medusajs/framework/utils");
// export const PAYMENT_MODULE = "midtrans_payment"
// export default Module(PAYMENT_MODULE, {
//   services: [PaymentModuleService],
// })
exports.default = (0, utils_1.ModuleProvider)(utils_1.Modules.PAYMENT, {
    services: [service_1.default]
});
// const services = [PaymentModuleService]
// const providerExport: ModuleProviderExports = {
//   services,
// }
// export default providerExport
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wYXltZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTRDO0FBQzVDLHFEQUFtRTtBQUNuRSxtREFBbUQ7QUFFbkQsMENBQTBDO0FBQzFDLHNDQUFzQztBQUN0QyxLQUFLO0FBR0wsa0JBQWUsSUFBQSxzQkFBYyxFQUFDLGVBQU8sQ0FBQyxPQUFPLEVBQUU7SUFDN0MsUUFBUSxFQUFFLENBQUMsaUJBQW9CLENBQUM7Q0FDakMsQ0FBQyxDQUFBO0FBRUYsMENBQTBDO0FBRTFDLGtEQUFrRDtBQUNsRCxjQUFjO0FBQ2QsSUFBSTtBQUVKLGdDQUFnQyJ9