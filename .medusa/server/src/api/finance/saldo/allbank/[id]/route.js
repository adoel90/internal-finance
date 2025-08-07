"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUT = void 0;
const utils_1 = require("@medusajs/framework/utils");
const update_saldo_available_1 = require("src/workflows/update-saldo-available");
const PUT = async (req, res) => {
    const { amount } = req.body;
    const workflow = (0, update_saldo_available_1.updateSaldoAvailableWorkflow)(req.scope);
    const { result } = await workflow.run({
        input: {
            id: req.params.id,
            amount
        },
    });
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [updated] } = await query.graph({
        entity: "saldo_available",
        fields: [
            "id",
            "amount"
        ],
        filters: {
            id: req.params.id
        }
    });
    res.json(updated);
};
exports.PUT = PUT;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2Uvc2FsZG8vYWxsYmFuay9baWRdL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNFLHFEQUFxRTtBQUV2RSxpRkFBbUY7QUFNNUUsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUNwQixHQUF1RCxFQUN2RCxHQUFtQixFQUNuQixFQUFFO0lBQ0UsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUE7SUFFL0IsTUFBTSxRQUFRLEdBQUcsSUFBQSxxREFBNEIsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDeEQsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxLQUFLLEVBQUU7WUFDTCxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pCLE1BQU07U0FDUDtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQyxNQUFNLEVBQUUsaUJBQWlCO1FBQzNCLE1BQU0sRUFBRTtZQUNOLElBQUk7WUFDSixRQUFRO1NBQ1Q7UUFDRCxPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUNuQixDQUFDLENBQUE7QUEzQlUsUUFBQSxHQUFHLE9BMkJiIn0=