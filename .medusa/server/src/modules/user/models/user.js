"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const User = utils_1.model.define("user", {
    id: utils_1.model.id().primaryKey(),
    name: utils_1.model.text(),
    email: utils_1.model.text(),
    role_id: utils_1.model.text(),
});
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXIvbW9kZWxzL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBaUQ7QUFFakQsTUFBTSxJQUFJLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7SUFDaEMsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsSUFBSSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDbEIsS0FBSyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDbkIsT0FBTyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7Q0FDdEIsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsSUFBSSxDQUFBIn0=