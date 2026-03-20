"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const domain_1 = __importDefault(require("../modules/domain"));
const customer_1 = __importDefault(require("@medusajs/medusa/customer"));
exports.default = (0, utils_1.defineLink)({
    linkable: domain_1.default.linkable.domain,
    isList: true,
}, customer_1.default.linkable.customer);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWN1c3RvbWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpbmtzL2RvbWFpbi1jdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFzRDtBQUN0RCwrREFBNEM7QUFDNUMseUVBQXNEO0FBRXRELGtCQUFlLElBQUEsa0JBQVUsRUFDdkI7SUFDRSxRQUFRLEVBQUUsZ0JBQVksQ0FBQyxRQUFRLENBQUMsTUFBTTtJQUN0QyxNQUFNLEVBQUUsSUFBSTtDQUNiLEVBQ0Qsa0JBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNqQyxDQUFBIn0=