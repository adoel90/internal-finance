"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPengeluaranProyeksiCashcallWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const cashflow_1 = require("src/modules/cashflow");
const createProyeksiCashcallStep1 = (0, workflows_sdk_1.createStep)("step1create-proyeksi-cashcall", async (input, { container }) => {
    const cashflowModuleService = container.resolve(cashflow_1.CASHFLOW_MODULE);
    const proyeksiPengeluaranCashcall = await cashflowModuleService.createPengeluaranProyeksiCashcalls(input);
    return new workflows_sdk_1.StepResponse(proyeksiPengeluaranCashcall);
});
exports.createPengeluaranProyeksiCashcallWorkflow = (0, workflows_sdk_1.createWorkflow)("create-pengeluaran-proyeksi-cashcall", (input) => {
    // Step 1: Create  Proyeksi Pengeluaran Cashcall
    const penerimaan = createProyeksiCashcallStep1(input);
    return new workflows_sdk_1.WorkflowResponse(penerimaan);
});
exports.default = exports.createPengeluaranProyeksiCashcallWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1wZW5nZWx1YXJhbi1wcm95ZWtzaS1jYXNoY2FsbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNkg7QUFHN0gsbURBQXNEO0FBRXRELE1BQU0sMkJBQTJCLEdBQUcsSUFBQSwwQkFBVSxFQUMxQywrQkFBK0IsRUFDL0IsS0FBSyxFQUFFLEtBQXVDLEVBQUUsRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFFO0lBRTVELE1BQU0scUJBQXFCLEdBQTBCLFNBQVMsQ0FBQyxPQUFPLENBQ2xFLDBCQUFlLENBQ2xCLENBQUE7SUFDRCxNQUFNLDJCQUEyQixHQUFHLE1BQU0scUJBQXFCLENBQUMsa0NBQWtDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUcsT0FBTyxJQUFJLDRCQUFZLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQ0osQ0FBQTtBQUdZLFFBQUEseUNBQXlDLEdBQUcsSUFBQSw4QkFBYyxFQUNuRSxzQ0FBc0MsRUFDdEMsQ0FBQyxLQUFxRCxFQUFFLEVBQUU7SUFDdEQsZ0RBQWdEO0lBQ2hELE1BQU0sVUFBVSxHQUFHLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQ0osQ0FBQTtBQUVELGtCQUFlLGlEQUF5QyxDQUFDIn0=