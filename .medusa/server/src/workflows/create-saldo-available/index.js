"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSaldoAvailableWorkflow = exports.createSaldoAvailableStep1 = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const saldo_1 = require("src/modules/saldo");
exports.createSaldoAvailableStep1 = (0, workflows_sdk_1.createStep)("step-1-create-saldo-available", async (input, { container }) => {
    const saldoModuleService = container.resolve(saldo_1.SALDO_MODULE);
    const saldoAvailable = await saldoModuleService.createSaldoAvailables(input);
    return new workflows_sdk_1.StepResponse(saldoAvailable);
});
exports.createSaldoAvailableWorkflow = (0, workflows_sdk_1.createWorkflow)("create-saldo-available", (input) => {
    // Step 1: Create Saldo Available
    const saldoAvailable = (0, exports.createSaldoAvailableStep1)(input);
    return new workflows_sdk_1.WorkflowResponse(saldoAvailable);
});
exports.default = exports.createSaldoAvailableWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1zYWxkby1hdmFpbGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTZIO0FBQzdILDZDQUFpRDtBQUlwQyxRQUFBLHlCQUF5QixHQUFHLElBQUEsMEJBQVUsRUFDL0MsK0JBQStCLEVBQy9CLEtBQUssRUFBRSxLQUEyQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNqRCxNQUFNLGtCQUFrQixHQUF1QixTQUFTLENBQUMsT0FBTyxDQUFDLG9CQUFZLENBQUMsQ0FBQztJQUMvRSxNQUFNLGNBQWMsR0FBRyxNQUFNLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdFLE9BQU8sSUFBSSw0QkFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FDSixDQUFBO0FBRVksUUFBQSw0QkFBNEIsR0FBRyxJQUFBLDhCQUFjLEVBQ3RELHdCQUF3QixFQUN4QixDQUFDLEtBQXlDLEVBQUUsRUFBRTtJQUMxQyxpQ0FBaUM7SUFDakMsTUFBTSxjQUFjLEdBQUcsSUFBQSxpQ0FBeUIsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxPQUFPLElBQUksZ0NBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUNKLENBQUE7QUFFRCxrQkFBZSxvQ0FBNEIsQ0FBQyJ9