"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAYMENT_MODULE = void 0;
const service_1 = __importDefault(require("./service"));
const utils_1 = require("@medusajs/framework/utils");
exports.PAYMENT_MODULE = "payment";
exports.default = (0, utils_1.Module)(exports.PAYMENT_MODULE, {
    service: service_1.default,
});
// const services = [PaymentModuleService]
// const providerExport: ModuleProviderExports = {
//   services,
// }
// export default providerExport
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wYXltZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdEQUE0QztBQUM1QyxxREFBa0Q7QUFFckMsUUFBQSxjQUFjLEdBQUcsU0FBUyxDQUFBO0FBRXZDLGtCQUFlLElBQUEsY0FBTSxFQUFDLHNCQUFjLEVBQUU7SUFDcEMsT0FBTyxFQUFFLGlCQUFvQjtDQUM5QixDQUFDLENBQUE7QUFHRiwwQ0FBMEM7QUFFMUMsa0RBQWtEO0FBQ2xELGNBQWM7QUFDZCxJQUFJO0FBRUosZ0NBQWdDIn0=