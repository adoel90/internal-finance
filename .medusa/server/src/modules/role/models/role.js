"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const Role = utils_1.model.define("role", {
    id: utils_1.model.id().primaryKey(),
    name: utils_1.model.text()
});
exports.default = Role;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3JvbGUvbW9kZWxzL3JvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBaUQ7QUFFakQsTUFBTSxJQUFJLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7SUFDaEMsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsSUFBSSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7Q0FDbkIsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsSUFBSSxDQUFBIn0=