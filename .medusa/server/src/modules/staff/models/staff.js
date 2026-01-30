"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const Staff = utils_1.model.define("staff", {
    id: utils_1.model.id().primaryKey(),
    firstName: utils_1.model.text(),
    lastName: utils_1.model.text(),
    email: utils_1.model.text(),
});
exports.default = Staff;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZmYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zdGFmZi9tb2RlbHMvc3RhZmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBaUQ7QUFFakQsTUFBTSxLQUFLLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7SUFDbEMsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsU0FBUyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDdkIsUUFBUSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDdEIsS0FBSyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7Q0FDcEIsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsS0FBSyxDQUFBIn0=