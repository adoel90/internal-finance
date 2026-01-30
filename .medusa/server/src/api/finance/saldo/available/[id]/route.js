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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2Uvc2FsZG8vYXZhaWxhYmxlL1tpZF0vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0UscURBQXFFO0FBRXZFLGlGQUFtRjtBQU01RSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3BCLEdBQXVELEVBQ3ZELEdBQW1CLEVBQ25CLEVBQUU7SUFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQTtJQUUvQixNQUFNLFFBQVEsR0FBRyxJQUFBLHFEQUE0QixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN4RCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ3BDLEtBQUssRUFBRTtZQUNMLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakIsTUFBTTtTQUNQO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFDLE1BQU0sRUFBRSxpQkFBaUI7UUFDM0IsTUFBTSxFQUFFO1lBQ04sSUFBSTtZQUNKLFFBQVE7U0FDVDtRQUNELE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7U0FDbEI7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ25CLENBQUMsQ0FBQTtBQTNCVSxRQUFBLEdBQUcsT0EyQmIifQ==