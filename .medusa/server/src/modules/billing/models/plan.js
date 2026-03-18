"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const subscription_1 = __importDefault(require("./subscription"));
exports.default = utils_1.model.define("plan", {
    id: utils_1.model.id({ prefix: "plan" }).primaryKey(),
    name: utils_1.model.text().searchable(),
    subscriptions: utils_1.model.hasMany(() => subscription_1.default, {
        mappedBy: "plan",
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2JpbGxpbmcvbW9kZWxzL3BsYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBaUQ7QUFDakQsa0VBQXlDO0FBRXpDLGtCQUFlLGFBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQ2xDLEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFO0lBQzdDLElBQUksRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQy9CLGFBQWEsRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFZLEVBQUU7UUFDL0MsUUFBUSxFQUFFLE1BQU07S0FDakIsQ0FBQztDQUNILENBQUMsQ0FBQSJ9