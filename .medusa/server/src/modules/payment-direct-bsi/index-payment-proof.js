"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAYMENT_PROOF_MODULE = void 0;
const payment_proof_service_1 = __importDefault(require("./payment-proof-service"));
const utils_1 = require("@medusajs/framework/utils");
exports.PAYMENT_PROOF_MODULE = "payment-proof";
exports.default = (0, utils_1.Module)(exports.PAYMENT_PROOF_MODULE, {
    service: payment_proof_service_1.default
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtcGF5bWVudC1wcm9vZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3BheW1lbnQtZGlyZWN0LWJzaS9pbmRleC1wYXltZW50LXByb29mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9GQUF5RDtBQUN6RCxxREFBa0Q7QUFFckMsUUFBQSxvQkFBb0IsR0FBRyxlQUFlLENBQUE7QUFFbkQsa0JBQWUsSUFBQSxjQUFNLEVBQUMsNEJBQW9CLEVBQUU7SUFDeEMsT0FBTyxFQUFFLCtCQUFtQjtDQUMvQixDQUFDLENBQUEifQ==