"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const task_1 = __importDefault(require("./models/task"));
const status_1 = __importDefault(require("./models/status"));
class TaskModuleService extends (0, utils_1.MedusaService)({
    Task: task_1.default,
    Status: status_1.default
}) {
}
exports.default = TaskModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rhc2svc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUF5RDtBQUN6RCx5REFBZ0M7QUFDaEMsNkRBQW9DO0FBRXBDLE1BQU0saUJBQWtCLFNBQVEsSUFBQSxxQkFBYSxFQUFDO0lBQzFDLElBQUksRUFBSixjQUFJO0lBQ0osTUFBTSxFQUFOLGdCQUFNO0NBQ1QsQ0FBQztDQUVEO0FBRUQsa0JBQWUsaUJBQWlCLENBQUEifQ==