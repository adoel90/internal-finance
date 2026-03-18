"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const plan_1 = __importDefault(require("./plan"));
exports.default = utils_1.model.define("subscription", {
    id: utils_1.model.id({ prefix: "sub" }).primaryKey(),
    organization_id: utils_1.model.text(),
    plan: utils_1.model.belongsTo(() => plan_1.default),
    current_period_start: utils_1.model.dateTime(),
    current_period_end: utils_1.model.dateTime(),
    started_at: utils_1.model.dateTime(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYmlsbGluZy9tb2RlbHMvc3Vic2NyaXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQWlEO0FBQ2pELGtEQUF5QjtBQUV6QixrQkFBZSxhQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtJQUMxQyxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRTtJQUM1QyxlQUFlLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUM3QixJQUFJLEVBQUUsYUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFJLENBQUM7SUFDakMsb0JBQW9CLEVBQUUsYUFBSyxDQUFDLFFBQVEsRUFBRTtJQUN0QyxrQkFBa0IsRUFBRSxhQUFLLENBQUMsUUFBUSxFQUFFO0lBQ3BDLFVBQVUsRUFBRSxhQUFLLENBQUMsUUFBUSxFQUFFO0NBQzdCLENBQUMsQ0FBQSJ9