"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const domain_1 = __importDefault(require("../modules/domain"));
const order_1 = __importDefault(require("@medusajs/medusa/order"));
exports.default = (0, utils_1.defineLink)({
    linkable: domain_1.default.linkable.domain,
    isList: true,
}, order_1.default.linkable.order);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLW9yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpbmtzL2RvbWFpbi1vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFzRDtBQUN0RCwrREFBNEM7QUFDNUMsbUVBQWdEO0FBRWhELGtCQUFlLElBQUEsa0JBQVUsRUFDdkI7SUFDRSxRQUFRLEVBQUUsZ0JBQVksQ0FBQyxRQUFRLENBQUMsTUFBTTtJQUN0QyxNQUFNLEVBQUUsSUFBSTtDQUNiLEVBQ0QsZUFBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQzNCLENBQUEifQ==