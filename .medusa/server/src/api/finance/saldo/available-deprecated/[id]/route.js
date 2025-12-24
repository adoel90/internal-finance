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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2Uvc2FsZG8vYXZhaWxhYmxlLWRlcHJlY2F0ZWQvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDRSxxREFBcUU7QUFFdkUsaUZBQW1GO0FBTTVFLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDcEIsR0FBdUQsRUFDdkQsR0FBbUIsRUFDbkIsRUFBRTtJQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFBO0lBRS9CLE1BQU0sUUFBUSxHQUFHLElBQUEscURBQTRCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3hELE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDcEMsS0FBSyxFQUFFO1lBQ0wsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNqQixNQUFNO1NBQ1A7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUMsTUFBTSxFQUFFLGlCQUFpQjtRQUMzQixNQUFNLEVBQUU7WUFDTixJQUFJO1lBQ0osUUFBUTtTQUNUO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUNsQjtLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDbkIsQ0FBQyxDQUFBO0FBM0JVLFFBQUEsR0FBRyxPQTJCYiJ9