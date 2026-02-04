"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const payment_proof_1 = __importDefault(require("./models/payment-proof"));
class PaymentProofService extends (0, utils_1.MedusaService)({
    PaymentProof: payment_proof_1.default
}) {
}
exports.default = PaymentProofService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3BheW1lbnQtcHJvb2Yvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUF5RDtBQUN6RCwyRUFBaUQ7QUFFakQsTUFBTSxtQkFBb0IsU0FBUSxJQUFBLHFCQUFhLEVBQUM7SUFDNUMsWUFBWSxFQUFaLHVCQUFZO0NBQ2YsQ0FBQztDQUVEO0FBRUQsa0JBQWUsbUJBQW1CLENBQUEifQ==