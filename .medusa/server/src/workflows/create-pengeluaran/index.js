"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPengeluaranWorkflow = exports.createPengeluaranStep1 = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const cashflow_1 = require("src/modules/cashflow");
const workflows_sdk_2 = require("@medusajs/framework/workflows-sdk");
exports.createPengeluaranStep1 = (0, workflows_sdk_1.createStep)("step1-create-pengeluaran", async (input, { container }) => {
    const cashflowModuleService = container.resolve(cashflow_1.CASHFLOW_MODULE);
    const pengeluaran = await cashflowModuleService.createPengeluarans(input);
    return new workflows_sdk_1.StepResponse(pengeluaran, pengeluaran.id);
}, 
//Rollback when error or failed
async (id, { container }) => {
    const cashflowModuleService = container.resolve(cashflow_1.CASHFLOW_MODULE);
    await cashflowModuleService.deletePengeluarans(id);
});
exports.createPengeluaranWorkflow = (0, workflows_sdk_2.createWorkflow)("create-pengeluaran", (input) => {
    // Step 1: Create pengeluaran
    const pengeluaran = (0, exports.createPengeluaranStep1)(input);
    // Return workflow response with pengeluaran
    return new workflows_sdk_2.WorkflowResponse(pengeluaran);
});
exports.default = exports.createPengeluaranWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1wZW5nZWx1YXJhbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFHNEM7QUFFNUMsbURBQXNEO0FBR3RELHFFQUFrRztBQUdyRixRQUFBLHNCQUFzQixHQUFHLElBQUEsMEJBQVUsRUFDNUMsMEJBQTBCLEVBQzFCLEtBQUssRUFBRSxLQUF1QixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM3QyxNQUFNLHFCQUFxQixHQUEwQixTQUFTLENBQUMsT0FBTyxDQUNsRSwwQkFBZSxDQUNsQixDQUFBO0lBRUQsTUFBTSxXQUFXLEdBQUcsTUFBTSxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRSxPQUFPLElBQUksNEJBQVksQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ3hELENBQUM7QUFDRCwrQkFBK0I7QUFDL0IsS0FBSyxFQUFFLEVBQVUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDaEMsTUFBTSxxQkFBcUIsR0FBMEIsU0FBUyxDQUFDLE9BQU8sQ0FDbEUsMEJBQWUsQ0FDbEIsQ0FBQTtJQUNELE1BQU0scUJBQXFCLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkQsQ0FBQyxDQUNKLENBQUE7QUFHWSxRQUFBLHlCQUF5QixHQUFHLElBQUEsOEJBQWMsRUFDbkQsb0JBQW9CLEVBQ3BCLENBQUMsS0FBcUMsRUFBRSxFQUFFO0lBQ3RDLDZCQUE2QjtJQUM3QixNQUFNLFdBQVcsR0FBRyxJQUFBLDhCQUFzQixFQUFDLEtBQUssQ0FBQyxDQUFDO0lBR2xELDRDQUE0QztJQUM1QyxPQUFPLElBQUksZ0NBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUNKLENBQUE7QUFFRCxrQkFBZSxpQ0FBeUIsQ0FBQyJ9