"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const utils_1 = require("@medusajs/framework/utils");
const create_manager_1 = __importDefault(require("../../workflows/create-manager"));
async function POST(req, res) {
    // If `actor_id` is present, the request carries 
    // authentication for an existing manager
    if (req.auth_context.actor_id) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Request already authenticated as a manager.");
    }
    // Mengakses header, misal: 'x-custom-header'
    // const customHeader = req.headers['x-custom-header'];
    // // Contoh penggunaan header
    // if (!customHeader) {
    //   return res.status(400).json({ error: "Missing x-custom-header" });
    // }
    // Ambil header Authorization
    const authorization = req.headers['authorization'];
    // Contoh validasi: pastikan header Authorization ada
    if (!authorization) {
        return res.status(401).json({ error: "Missing Authorization header" });
    }
    if (req.auth_context.actor_id) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Request already authenticated as a manager.");
    }
    const workflow = (0, create_manager_1.default)(req.scope);
    const result = await workflow.run({
        input: {
            manager: req.body,
            authIdentityId: req.auth_context.auth_identity_id,
        }
    });
    res.json(result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL21hbmFnZXIvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFhRSxvQkFnREM7QUF6REQscURBQXVEO0FBQ3ZELG9GQUFrRTtBQVEzRCxLQUFLLFVBQVUsSUFBSSxDQUN4QixHQUE0QyxFQUM1QyxHQUFtQjtJQUVuQixpREFBaUQ7SUFDakQseUNBQXlDO0lBQ3pDLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5Qiw2Q0FBNkMsQ0FDOUMsQ0FBQTtJQUNILENBQUM7SUFHQyw2Q0FBNkM7SUFDL0MsdURBQXVEO0lBRXZELDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsdUVBQXVFO0lBQ3ZFLElBQUk7SUFHRiw2QkFBNkI7SUFDL0IsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUVuRCxxREFBcUQ7SUFDckQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25CLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsOEJBQThCLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDOUIsNkNBQTZDLENBQzlDLENBQUE7SUFDSCxDQUFDO0lBSUQsTUFBTSxRQUFRLEdBQUcsSUFBQSx3QkFBcUIsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ2hDLEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSTtZQUNqQixjQUFjLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0I7U0FDbEQ7S0FDRixDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25CLENBQUMifQ==