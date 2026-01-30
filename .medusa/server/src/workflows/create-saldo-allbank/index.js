"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSaldoAllBankWorkflow = exports.createSaldoAllBankStep1 = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const saldo_1 = require("src/modules/saldo");
exports.createSaldoAllBankStep1 = (0, workflows_sdk_1.createStep)("step-1-create-saldo-all-bank", async (input, { container }) => {
    const saldoModuleService = container.resolve(saldo_1.SALDO_MODULE);
    const saldoAllBank = await saldoModuleService.createSaldoAllbanks(input);
    return new workflows_sdk_1.StepResponse(saldoAllBank);
});
exports.createSaldoAllBankWorkflow = (0, workflows_sdk_1.createWorkflow)("create-saldo-all-bank", (input) => {
    // Step 1: Create Saldo All Bank
    const saldoAllBank = (0, exports.createSaldoAllBankStep1)(input);
    return new workflows_sdk_1.WorkflowResponse(saldoAllBank);
});
exports.default = exports.createSaldoAllBankWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1zYWxkby1hbGxiYW5rL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2SDtBQUM3SCw2Q0FBaUQ7QUFJcEMsUUFBQSx1QkFBdUIsR0FBRyxJQUFBLDBCQUFVLEVBQzdDLDhCQUE4QixFQUM5QixLQUFLLEVBQUUsS0FBeUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDL0MsTUFBTSxrQkFBa0IsR0FBdUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxvQkFBWSxDQUFDLENBQUM7SUFDL0UsTUFBTSxZQUFZLEdBQUcsTUFBTSxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN4RSxPQUFPLElBQUksNEJBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQ0osQ0FBQTtBQUVZLFFBQUEsMEJBQTBCLEdBQUcsSUFBQSw4QkFBYyxFQUNwRCx1QkFBdUIsRUFDdkIsQ0FBQyxLQUF1QyxFQUFFLEVBQUU7SUFDeEMsZ0NBQWdDO0lBQ2hDLE1BQU0sWUFBWSxHQUFHLElBQUEsK0JBQXVCLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsT0FBTyxJQUFJLGdDQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FDSixDQUFBO0FBRUQsa0JBQWUsa0NBQTBCLENBQUMifQ==