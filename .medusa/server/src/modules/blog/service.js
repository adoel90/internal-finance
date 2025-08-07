"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const post_1 = __importDefault(require("./models/post"));
class BlogModuleService extends (0, utils_1.MedusaService)({
    Post: post_1.default,
}) {
    // TODO implement custom methods
    async getMessage() {
        return "Hello POST";
    }
}
exports.default = BlogModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Jsb2cvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUF5RDtBQUN6RCx5REFBZ0M7QUFFaEMsTUFBTSxpQkFBa0IsU0FBUSxJQUFBLHFCQUFhLEVBQUM7SUFDNUMsSUFBSSxFQUFKLGNBQUk7Q0FDTCxDQUFDO0lBQ0EsZ0NBQWdDO0lBRWhDLEtBQUssQ0FBQyxVQUFVO1FBRWQsT0FBTyxZQUFZLENBQUE7SUFDckIsQ0FBQztDQUNGO0FBRUQsa0JBQWUsaUJBQWlCLENBQUEifQ==