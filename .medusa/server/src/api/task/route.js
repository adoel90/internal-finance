"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const create_task_1 = __importDefault(require("../../workflows/create-task"));
async function POST(req, res) {
    const authorization = req.headers['authorization'];
    if (!authorization) {
        return res.status(401).json({ error: "Missing Authorization header" });
    }
    const workflow = (0, create_task_1.default)(req.scope);
    const result = await workflow.run({
        input: req.body
    });
    res.json(result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3Rhc2svcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFVRSxvQkFpQkM7QUFwQkQsOEVBQTREO0FBR3JELEtBQUssVUFBVSxJQUFJLENBQ3hCLEdBQThDLEVBQzlDLEdBQW1CO0lBSW5CLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFbkQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25CLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsOEJBQThCLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFBLHFCQUFrQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxNQUFNLE1BQU0sR0FBRyxNQUFNLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDOUIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFxQjtLQUNuQyxDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25CLENBQUMifQ==