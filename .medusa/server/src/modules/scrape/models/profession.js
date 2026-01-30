"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profession = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.Profession = utils_1.model.define("profession", {
    id: utils_1.model.id().primaryKey(),
    name: utils_1.model.text(),
});
exports.default = exports.Profession;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3NjcmFwZS9tb2RlbHMvcHJvZmVzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBa0Q7QUFPckMsUUFBQSxVQUFVLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7SUFDakQsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsSUFBSSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7Q0FFckIsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsa0JBQVUsQ0FBQyJ9