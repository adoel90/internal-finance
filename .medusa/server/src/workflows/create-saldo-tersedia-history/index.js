"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSaldoHistoryTersediaWorkflow = exports.creatStep1 = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const saldo_1 = require("src/modules/saldo");
exports.creatStep1 = (0, workflows_sdk_1.createStep)("step-1-create-saldo-history-tersedia", async (input, { container }) => {
    const saldoModuleService = container.resolve(saldo_1.SALDO_MODULE);
    const saldoHistory = await saldoModuleService.createSaldoHistoryTersedias(input);
    return new workflows_sdk_1.StepResponse(saldoHistory);
});
exports.createSaldoHistoryTersediaWorkflow = (0, workflows_sdk_1.createWorkflow)("create-saldo-history-tersedia", (input) => {
    // Step 1: Create Saldo All Rekening
    const saldoHistory = (0, exports.creatStep1)(input);
    return new workflows_sdk_1.WorkflowResponse(saldoHistory);
});
exports.default = exports.createSaldoHistoryTersediaWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1zYWxkby10ZXJzZWRpYS1oaXN0b3J5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2SDtBQUM3SCw2Q0FBaUQ7QUFJakMsUUFBQSxVQUFVLEdBQUcsSUFBQSwwQkFBVSxFQUNuQyxzQ0FBc0MsRUFDdEMsS0FBSyxFQUFFLEtBQXlCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBRS9DLE1BQU0sa0JBQWtCLEdBQXVCLFNBQVMsQ0FBQyxPQUFPLENBQUMsb0JBQVksQ0FBQyxDQUFDO0lBQy9FLE1BQU0sWUFBWSxHQUFHLE1BQU0sa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEYsT0FBTyxJQUFJLDRCQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQU1KLENBQUE7QUFFWSxRQUFBLGtDQUFrQyxHQUFHLElBQUEsOEJBQWMsRUFDNUQsK0JBQStCLEVBQy9CLENBQUMsS0FBdUMsRUFBRSxFQUFFO0lBRXhDLG9DQUFvQztJQUNwQyxNQUFNLFlBQVksR0FBRyxJQUFBLGtCQUFVLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFFdkMsT0FBTyxJQUFJLGdDQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FDSixDQUFBO0FBRUQsa0JBQWUsMENBQWtDLENBQUMifQ==