"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0YWZmL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBYUUsb0JBa0RDO0FBM0RELHFEQUF1RDtBQUN2RCxnRkFBOEQ7QUFRdkQsS0FBSyxVQUFVLElBQUksQ0FDeEIsR0FBNEMsRUFDNUMsR0FBbUI7SUFHbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsaURBQWlEO0lBQ2pELHVDQUF1QztJQUN2QyxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDL0IsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDOUIsMkNBQTJDLENBQzVDLENBQUE7SUFDSCxDQUFDO0lBR0MsNkNBQTZDO0lBQy9DLHVEQUF1RDtJQUV2RCw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHVFQUF1RTtJQUN2RSxJQUFJO0lBR0YsNkJBQTZCO0lBQy9CLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFbkQscURBQXFEO0lBQ3JELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLDhCQUE4QixFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQy9CLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzlCLDJDQUEyQyxDQUM1QyxDQUFBO0lBQ0gsQ0FBQztJQUlELE1BQU0sUUFBUSxHQUFHLElBQUEsc0JBQW1CLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELE1BQU0sTUFBTSxHQUFHLE1BQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNoQyxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUk7WUFDZixjQUFjLEVBQUUsR0FBRyxDQUFDLFlBQVksRUFBRSxnQkFBZ0I7U0FDbkQ7S0FDRixDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25CLENBQUMifQ==