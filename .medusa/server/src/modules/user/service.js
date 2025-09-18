"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const user_1 = __importDefault(require("./models/user"));
class UserModuleService extends (0, utils_1.MedusaService)({
    User: user_1.default
}) {
}
exports.default = UserModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXIvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUF5RDtBQUN6RCx5REFBZ0M7QUFFaEMsTUFBTSxpQkFBa0IsU0FBUSxJQUFBLHFCQUFhLEVBQUM7SUFDMUMsSUFBSSxFQUFKLGNBQUk7Q0FDUCxDQUFDO0NBRUQ7QUFFRCxrQkFBZSxpQkFBaUIsQ0FBQSJ9