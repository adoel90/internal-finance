"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
exports.GET = GET;
const utils_1 = require("@medusajs/framework/utils");
const create_staff_1 = __importDefault(require("../../workflows/create-staff"));
async function POST(req, res) {
    console.log('req.auth_context', req.auth_context);
    // If `actor_id` is present, the request carries 
    // authentication for an existing staff
    if (req.auth_context?.actor_id) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Request already authenticated as a staff.");
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
    if (req.auth_context?.actor_id) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Request already authenticated as a staff.");
    }
    const workflow = (0, create_staff_1.default)(req.scope);
    const result = await workflow.run({
        input: {
            staff: req.body,
            authIdentityId: req.auth_context?.auth_identity_id,
        }
    });
    res.json(result);
}
async function GET(req, res) {
    const query = req.scope.resolve("query");
    const { data: staffList } = await query.graph({
        entity: "staff",
        fields: ["*"],
    });
    res.json({ staff: staffList });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0YWZmL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBYUUsb0JBa0RDO0FBRUQsa0JBWUM7QUF6RUQscURBQXVEO0FBQ3ZELGdGQUE4RDtBQVF2RCxLQUFLLFVBQVUsSUFBSSxDQUN4QixHQUE0QyxFQUM1QyxHQUFtQjtJQUduQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRCxpREFBaUQ7SUFDakQsdUNBQXVDO0lBQ3ZDLElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUMvQixNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5QiwyQ0FBMkMsQ0FDNUMsQ0FBQTtJQUNILENBQUM7SUFHQyw2Q0FBNkM7SUFDL0MsdURBQXVEO0lBRXZELDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsdUVBQXVFO0lBQ3ZFLElBQUk7SUFHRiw2QkFBNkI7SUFDL0IsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUVuRCxxREFBcUQ7SUFDckQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25CLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsOEJBQThCLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDL0IsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDOUIsMkNBQTJDLENBQzVDLENBQUE7SUFDSCxDQUFDO0lBSUQsTUFBTSxRQUFRLEdBQUcsSUFBQSxzQkFBbUIsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ2hDLEtBQUssRUFBRTtZQUNMLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtZQUNmLGNBQWMsRUFBRSxHQUFHLENBQUMsWUFBWSxFQUFFLGdCQUFnQjtTQUNuRDtLQUNGLENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUVNLEtBQUssVUFBVSxHQUFHLENBQ3ZCLEdBQStCLEVBQy9CLEdBQW1CO0lBRW5CLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRXhDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzVDLE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO0tBQ2QsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO0FBQ2hDLENBQUMifQ==