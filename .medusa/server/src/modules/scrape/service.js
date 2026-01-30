"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const profession_1 = __importDefault(require("./models/profession"));
class ScrapeModuleService extends (0, utils_1.MedusaService)({
    Profession: profession_1.default
}) {
}
exports.default = ScrapeModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3NjcmFwZS9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQXlEO0FBQ3pELHFFQUE0QztBQUU1QyxNQUFNLG1CQUFvQixTQUFRLElBQUEscUJBQWEsRUFBQztJQUM1QyxVQUFVLEVBQVYsb0JBQVU7Q0FDYixDQUFDO0NBRUQ7QUFFRCxrQkFBZSxtQkFBbUIsQ0FBQSJ9