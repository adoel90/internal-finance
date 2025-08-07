"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
const hello_world_1 = __importDefault(require("src/workflows/hello-world/hello-world"));
async function GET(req, res) {
    const { result } = await (0, hello_world_1.default)(req.scope)
        .run({
        input: {
            name: "John",
        },
    });
    res.send(result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2hlbGxvd29ybGQvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNRSxrQkFZQztBQWRELHdGQUFzRTtBQUUvRCxLQUFLLFVBQVUsR0FBRyxDQUN2QixHQUFrQixFQUNsQixHQUFtQjtJQUVuQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLHFCQUFrQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDbkQsR0FBRyxDQUFDO1FBQ0gsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07U0FDYjtLQUNGLENBQUMsQ0FBQTtJQUVKLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDbEIsQ0FBQyJ9