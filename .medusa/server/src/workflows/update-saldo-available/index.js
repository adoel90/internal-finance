"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSaldoAvailableWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const saldo_1 = require("src/modules/saldo");
const updateSaldoAvailableStep1 = (0, workflows_sdk_1.createStep)("step-1update-saldo-available", async (input, { container }) => {
    const saldoService = container.resolve(saldo_1.SALDO_MODULE);
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    // First check if record exists
    const { data: [existing] } = await query.graph({
        entity: "saldo_available",
        fields: ["id"],
        filters: {
            id: input.id,
        },
    });
    if (!existing) {
        throw new Error(`Saldo available with id ${input.id} not found`);
    }
    // Update using service
    await saldoService.updateSaldoAvailables({
        selector: { id: input.id },
        data: {
            amount: input.amount,
        },
    });
    return new workflows_sdk_1.StepResponse({ id: input.id });
});
exports.updateSaldoAvailableWorkflow = (0, workflows_sdk_1.createWorkflow)("update-saldo-available", (input) => {
    const result = updateSaldoAvailableStep1(input);
    return new workflows_sdk_1.WorkflowResponse(result);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3VwZGF0ZS1zYWxkby1hdmFpbGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQXFFO0FBQ3JFLHFFQUE4RztBQUM5Ryw2Q0FBZ0Q7QUFRaEQsTUFBTSx5QkFBeUIsR0FBRyxJQUFBLDBCQUFVLEVBQzFDLDhCQUE4QixFQUM5QixLQUFLLEVBQUUsS0FBZ0MsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDeEQsTUFBTSxZQUFZLEdBQXVCLFNBQVMsQ0FBQyxPQUFPLENBQUMsb0JBQVksQ0FBQyxDQUFBO0lBQ3hFLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsK0JBQStCO0lBQy9CLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM3QyxNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztRQUNkLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtTQUNiO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsS0FBSyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUE7SUFDbEUsQ0FBQztJQUVELHVCQUF1QjtJQUN2QixNQUFNLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQztRQUN2QyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUMxQixJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07U0FDckI7S0FDRixDQUFDLENBQUE7SUFFRixPQUFPLElBQUksNEJBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtBQUMzQyxDQUFDLENBQ0YsQ0FBQTtBQUVZLFFBQUEsNEJBQTRCLEdBQUcsSUFBQSw4QkFBYyxFQUN4RCx3QkFBd0IsRUFDeEIsQ0FBQyxLQUFnQyxFQUFFLEVBQUU7SUFDbkMsTUFBTSxNQUFNLEdBQUcseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFHL0MsT0FBTyxJQUFJLGdDQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3JDLENBQUMsQ0FDRixDQUFBIn0=