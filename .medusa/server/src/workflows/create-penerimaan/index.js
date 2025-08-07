"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPenerimaanWorkflow = exports.createPenerimaanStep1 = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const cashflow_1 = require("src/modules/cashflow");
const workflows_sdk_2 = require("@medusajs/framework/workflows-sdk");
exports.createPenerimaanStep1 = (0, workflows_sdk_1.createStep)("step1-create-penerimaan", async (input, { container }) => {
    const cashflowModuleService = container.resolve(cashflow_1.CASHFLOW_MODULE);
    const penerimaan = await cashflowModuleService.createPenerimaans(input);
    return new workflows_sdk_1.StepResponse(penerimaan, penerimaan.id);
}, 
//Rollback when error or failed
async (id, { container }) => {
    const cashflowModuleService = container.resolve(cashflow_1.CASHFLOW_MODULE);
    await cashflowModuleService.deletePenerimaans(id);
});
//TODO:
// export const updateSaldoBankStep2 = createStep(
//     "step2-update-saldo-bank",
//     async (input: UpdateSaldoBankInput,{container}) => {
//         const saldoModuleService: SaldoModuleService = container.resolve(SALDO_MODULE);
//         await saldoModuleService.updateSaldoAllbanks({
//             selector: { id: input.id },
//             data: {
//                 amount_saldo: input.amount_saldo,
//             },
//         })
//     }
// )
// export const createSummaryPenerimaanStep2 = createStep(
//     "step2-create-summary-penerimaan",
//     async (input: SummaryPenerimaanInput, { container }) => {
//         const cashflowModuleService: CashflowModuleService = container.resolve(
//             CASHFLOW_MODULE
//         )
//         const summaryPenerimaan = await cashflowModuleService.createSummaryPenerimaans(input)
//         return new StepResponse(summaryPenerimaan, summaryPenerimaan.id)
//     },
//     //Rollback when error or failed
//     async (id: string, { container }) => {
//         const cashflowModuleService: CashflowModuleService = container.resolve(
//             CASHFLOW_MODULE
//         )
//         await cashflowModuleService.deleteSummaryPenerimaans(id);
//     }
// )
exports.createPenerimaanWorkflow = (0, workflows_sdk_2.createWorkflow)("create-penerimaan", (input) => {
    // Step 1: Create penerimaan
    const penerimaan = (0, exports.createPenerimaanStep1)(input);
    //TODO: if one table is aplicable, so no need to create this step-2
    // Get service instance
    // const cashflowModuleService: CashflowModuleService = container.resolve(
    //     CASHFLOW_MODULE
    // )
    // // Get current total
    // const currentTotal = cashflowModuleService.getTotalSummaryPenerimaan();
    // // Create summary penerimaan with new total
    // currentTotal.then(total => {
    //     const newTotal = (total || 0) + (input.amount || 0);
    //     createSummaryPenerimaanStep2({
    //         total_penerimaan: newTotal
    //     });
    // });
    // if(penerimaan){
    //     // STEP-2
    //     updateSaldoBankStep2({
    //         id: input.payment_method,
    //         amount_saldo: ? //GW HARUS UPDATE "ANAK-nya" yaitu "detail_history"
    //     })
    // }
    // Return workflow response with penerimaan
    return new workflows_sdk_2.WorkflowResponse(penerimaan);
});
exports.default = exports.createPenerimaanWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1wZW5lcmltYWFuL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUc0QztBQUU1QyxtREFBc0Q7QUFNdEQscUVBQWtHO0FBVXJGLFFBQUEscUJBQXFCLEdBQUcsSUFBQSwwQkFBVSxFQUMzQyx5QkFBeUIsRUFDekIsS0FBSyxFQUFFLEtBQXNCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzVDLE1BQU0scUJBQXFCLEdBQTBCLFNBQVMsQ0FBQyxPQUFPLENBQ2xFLDBCQUFlLENBQ2xCLENBQUE7SUFFRCxNQUFNLFVBQVUsR0FBRyxNQUFNLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hFLE9BQU8sSUFBSSw0QkFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDdEQsQ0FBQztBQUNELCtCQUErQjtBQUMvQixLQUFLLEVBQUUsRUFBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNoQyxNQUFNLHFCQUFxQixHQUEwQixTQUFTLENBQUMsT0FBTyxDQUNsRSwwQkFBZSxDQUNsQixDQUFBO0lBQ0QsTUFBTSxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQ0osQ0FBQTtBQUVELE9BQU87QUFDUCxrREFBa0Q7QUFDbEQsaUNBQWlDO0FBQ2pDLDJEQUEyRDtBQUMzRCwwRkFBMEY7QUFFMUYseURBQXlEO0FBQ3pELDBDQUEwQztBQUMxQyxzQkFBc0I7QUFDdEIsb0RBQW9EO0FBQ3BELGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsUUFBUTtBQUVSLElBQUk7QUFFSiwwREFBMEQ7QUFDMUQseUNBQXlDO0FBQ3pDLGdFQUFnRTtBQUNoRSxrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLFlBQVk7QUFFWixnR0FBZ0c7QUFDaEcsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCxzQ0FBc0M7QUFDdEMsNkNBQTZDO0FBQzdDLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsWUFBWTtBQUNaLG9FQUFvRTtBQUNwRSxRQUFRO0FBQ1IsSUFBSTtBQUVTLFFBQUEsd0JBQXdCLEdBQUcsSUFBQSw4QkFBYyxFQUNsRCxtQkFBbUIsRUFDbkIsQ0FBQyxLQUFvQyxFQUFFLEVBQUU7SUFDckMsNEJBQTRCO0lBQzVCLE1BQU0sVUFBVSxHQUFHLElBQUEsNkJBQXFCLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFHaEQsbUVBQW1FO0lBQ25FLHVCQUF1QjtJQUN2QiwwRUFBMEU7SUFDMUUsc0JBQXNCO0lBQ3RCLElBQUk7SUFFSix1QkFBdUI7SUFDdkIsMEVBQTBFO0lBRTFFLDhDQUE4QztJQUM5QywrQkFBK0I7SUFDL0IsMkRBQTJEO0lBRTNELHFDQUFxQztJQUNyQyxxQ0FBcUM7SUFDckMsVUFBVTtJQUNWLE1BQU07SUFFTixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsOEVBQThFO0lBQzlFLFNBQVM7SUFFVCxJQUFJO0lBRUosMkNBQTJDO0lBQzNDLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQ0osQ0FBQTtBQUVELGtCQUFlLGdDQUF3QixDQUFDIn0=