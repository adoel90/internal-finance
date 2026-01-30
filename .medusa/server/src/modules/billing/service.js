"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const company_1 = __importDefault(require("./models/company"));
const api_usage_1 = __importDefault(require("./models/api-usage"));
const subscription_1 = __importDefault(require("./models/subscription"));
const plan_1 = __importDefault(require("./models/plan"));
class BillingModuleService extends (0, utils_1.MedusaService)({
    BillingCompany: company_1.default,
    ApiUsage: api_usage_1.default,
    Subscription: subscription_1.default,
    Plan: plan_1.default
}) {
}
exports.default = BillingModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2JpbGxpbmcvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUF5RDtBQUN6RCwrREFBNkM7QUFDN0MsbUVBQXlDO0FBQ3pDLHlFQUFnRDtBQUNoRCx5REFBZ0M7QUFHaEMsTUFBTSxvQkFBcUIsU0FBUSxJQUFBLHFCQUFhLEVBQUM7SUFDN0MsY0FBYyxFQUFkLGlCQUFjO0lBQ2QsUUFBUSxFQUFSLG1CQUFRO0lBQ1IsWUFBWSxFQUFaLHNCQUFZO0lBQ1osSUFBSSxFQUFKLGNBQUk7Q0FDUCxDQUFDO0NBR0Q7QUFFRCxrQkFBZSxvQkFBb0IsQ0FBQSJ9