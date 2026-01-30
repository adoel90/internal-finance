"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const Post = utils_1.model.define("post", {
    id: utils_1.model.id().primaryKey(),
    title: utils_1.model.text(),
});
exports.default = Post;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Jsb2cvbW9kZWxzL3Bvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBaUQ7QUFFakQsTUFBTSxJQUFJLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7SUFDaEMsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsS0FBSyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7Q0FDcEIsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsSUFBSSxDQUFBIn0=