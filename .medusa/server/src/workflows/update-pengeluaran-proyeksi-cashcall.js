"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePengeluaranProyeksiCashcallWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const cashflow_1 = require("src/modules/cashflow");
const updateProyeksiCashcallStep = (0, workflows_sdk_1.createStep)("update-proyeksi-cashcall", async (input, { container }) => {
    const cashflowService = container.resolve(cashflow_1.CASHFLOW_MODULE);
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    // First check if record exists
    const { data: [existing] } = await query.graph({
        entity: "pengeluaran_proyeksi_cashcall",
        fields: ["id"],
        filters: {
            id: input.id,
        },
    });
    if (!existing) {
        throw new Error(`Pengeluaran proyeksi cashcall with id ${input.id} not found`);
    }
    // Update using service
    await cashflowService.updatePengeluaranProyeksiCashcalls({
        selector: { id: input.id },
        data: {
            amount: input.amount,
            created_note_at: new Date(input.created_note_at),
        },
    });
    return new workflows_sdk_1.StepResponse({ id: input.id });
});
exports.updatePengeluaranProyeksiCashcallWorkflow = (0, workflows_sdk_1.createWorkflow)("update-pengeluaran-proyeksi-cashcall", (input) => {
    const result = updateProyeksiCashcallStep(input);
    return new workflows_sdk_1.WorkflowResponse(result);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBlbmdlbHVhcmFuLXByb3lla3NpLWNhc2hjYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy91cGRhdGUtcGVuZ2VsdWFyYW4tcHJveWVrc2ktY2FzaGNhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQXFFO0FBQ3JFLHFFQUE4RztBQUM5RyxtREFBc0Q7QUFTdEQsTUFBTSwwQkFBMEIsR0FBRyxJQUFBLDBCQUFVLEVBQzNDLDBCQUEwQixFQUMxQixLQUFLLEVBQUUsS0FBNkMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDckUsTUFBTSxlQUFlLEdBQTBCLFNBQVMsQ0FBQyxPQUFPLENBQUMsMEJBQWUsQ0FBQyxDQUFBO0lBQ2pGLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsK0JBQStCO0lBQy9CLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM3QyxNQUFNLEVBQUUsK0JBQStCO1FBQ3ZDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztRQUNkLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtTQUNiO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsS0FBSyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUE7SUFDaEYsQ0FBQztJQUVELHVCQUF1QjtJQUN2QixNQUFNLGVBQWUsQ0FBQyxrQ0FBa0MsQ0FBQztRQUN2RCxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUMxQixJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsZUFBZSxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7U0FDakQ7S0FDRixDQUFDLENBQUE7SUFFRixPQUFPLElBQUksNEJBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtBQUMzQyxDQUFDLENBQ0YsQ0FBQTtBQUVZLFFBQUEseUNBQXlDLEdBQUcsSUFBQSw4QkFBYyxFQUNyRSxzQ0FBc0MsRUFDdEMsQ0FBQyxLQUE2QyxFQUFFLEVBQUU7SUFDaEQsTUFBTSxNQUFNLEdBQUcsMEJBQTBCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEQsT0FBTyxJQUFJLGdDQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3JDLENBQUMsQ0FDRixDQUFBIn0=