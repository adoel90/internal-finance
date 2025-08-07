"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSaldoHistoryWorkflow = exports.createSaldoHistoryStep1 = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const saldo_1 = require("src/modules/saldo");
exports.createSaldoHistoryStep1 = (0, workflows_sdk_1.createStep)("step-1-create-saldo-history", async (input, { container }) => {
    const saldoModuleService = container.resolve(saldo_1.SALDO_MODULE);
    const saldoHistory = await saldoModuleService.createSaldoHistories(input);
    return new workflows_sdk_1.StepResponse(saldoHistory);
});
exports.createSaldoHistoryWorkflow = (0, workflows_sdk_1.createWorkflow)("create-saldo-history", (input) => {
    // Step 1: Create Saldo All Rekening
    const saldoHistory = (0, exports.createSaldoHistoryStep1)(input);
    return new workflows_sdk_1.WorkflowResponse(saldoHistory);
});
exports.default = exports.createSaldoHistoryWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1zYWxkby1oaXN0b3J5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2SDtBQUM3SCw2Q0FBaUQ7QUFJcEMsUUFBQSx1QkFBdUIsR0FBRyxJQUFBLDBCQUFVLEVBQzdDLDZCQUE2QixFQUM3QixLQUFLLEVBQUUsS0FBeUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDL0MsTUFBTSxrQkFBa0IsR0FBdUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxvQkFBWSxDQUFDLENBQUM7SUFFL0UsTUFBTSxZQUFZLEdBQUcsTUFBTSxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN6RSxPQUFPLElBQUksNEJBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBTUosQ0FBQTtBQUVZLFFBQUEsMEJBQTBCLEdBQUcsSUFBQSw4QkFBYyxFQUNwRCxzQkFBc0IsRUFDdEIsQ0FBQyxLQUF1QyxFQUFFLEVBQUU7SUFFeEMsb0NBQW9DO0lBQ3BDLE1BQU0sWUFBWSxHQUFHLElBQUEsK0JBQXVCLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFFcEQsT0FBTyxJQUFJLGdDQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FDSixDQUFBO0FBRUQsa0JBQWUsa0NBQTBCLENBQUMifQ==