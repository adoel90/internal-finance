"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSaldoAllRekeningWorkflow = exports.createSaldoHistoryStep = exports.createSaldoAllRekeningStep1 = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const saldo_1 = require("src/modules/saldo");
const create_saldo_history_1 = __importDefault(require("src/workflows/create-saldo-history"));
const types_1 = require("src/modules/cashflow/types");
exports.createSaldoAllRekeningStep1 = (0, workflows_sdk_1.createStep)("step-1-create-saldo-all-rekening", async (input, { container }) => {
    const saldoModuleService = container.resolve(saldo_1.SALDO_MODULE);
    const saldoAllRekeningBank = await saldoModuleService.createSaldoAllrekenings(input);
    return new workflows_sdk_1.StepResponse(saldoAllRekeningBank);
}, async ({ id }, { container }) => {
    const saldoModuleService = container.resolve(saldo_1.SALDO_MODULE);
    await saldoModuleService.deleteSaldoAllrekenings(id);
});
exports.createSaldoHistoryStep = (0, workflows_sdk_1.createStep)("step-2-create-saldo-history", async ({ saldoRekening, payload }, { container }) => {
    const result = await (0, create_saldo_history_1.default)(container).run({
        input: {
            amount: payload.amount_saldo,
            amount_saldo_id: saldoRekening.id,
            updated_saldo_at: payload.updated_saldo_at,
            currency_code: types_1.Currencies.ID
        }
    });
    return new workflows_sdk_1.StepResponse(result);
});
exports.createSaldoAllRekeningWorkflow = (0, workflows_sdk_1.createWorkflow)("create-saldo-all-rekening", (input) => {
    // Step 1: Create Saldo All Rekening
    const saldoRekening = (0, exports.createSaldoAllRekeningStep1)(input);
    //Step 2: Create Saldo spesifik ID of rekening
    /**
     *
     * Komunikasi antar workflow bisa menggunakan beberapa cara :
     *
     * https://chatgpt.com/share/685147ac-cd94-8000-b4b9-8fb72c3d2e83
     *
     */
    (0, exports.createSaldoHistoryStep)({
        saldoRekening,
        payload: {
            amount_saldo: input.amount_saldo,
            updated_saldo_at: input.updated_saldo_at,
        }
    });
    return new workflows_sdk_1.WorkflowResponse(saldoRekening);
});
exports.default = exports.createSaldoAllRekeningWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1zYWxkby1hbGxyZWtlbmluZy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxRUFBNkg7QUFDN0gsNkNBQWlEO0FBR2pELDhGQUEyRTtBQUMzRSxzREFBd0Q7QUFFM0MsUUFBQSwyQkFBMkIsR0FBRyxJQUFBLDBCQUFVLEVBQ2pELGtDQUFrQyxFQUNsQyxLQUFLLEVBQUUsS0FBNkIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDbkQsTUFBTSxrQkFBa0IsR0FBdUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxvQkFBWSxDQUFDLENBQUM7SUFDL0UsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRXBGLE9BQU8sSUFBSSw0QkFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDbEQsQ0FBQyxFQUNELEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM1QixNQUFNLGtCQUFrQixHQUF1QixTQUFTLENBQUMsT0FBTyxDQUFDLG9CQUFZLENBQUMsQ0FBQTtJQUU5RSxNQUFNLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ3RELENBQUMsQ0FDTixDQUFBO0FBVVksUUFBQSxzQkFBc0IsR0FBRyxJQUFBLDBCQUFVLEVBQzlDLDZCQUE2QixFQUM3QixLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUErQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUUvRSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsOEJBQTBCLEVBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzdELEtBQUssRUFBRTtZQUNMLE1BQU0sRUFBRSxPQUFPLENBQUMsWUFBWTtZQUM1QixlQUFlLEVBQUUsYUFBYSxDQUFDLEVBQUU7WUFDakMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLGdCQUFnQjtZQUMxQyxhQUFhLEVBQUUsa0JBQVUsQ0FBQyxFQUFFO1NBQzdCO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxJQUFJLDRCQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUNGLENBQUM7QUFFVyxRQUFBLDhCQUE4QixHQUFHLElBQUEsOEJBQWMsRUFDeEQsMkJBQTJCLEVBQzNCLENBQUMsS0FBMkMsRUFBRSxFQUFFO0lBRTVDLG9DQUFvQztJQUNwQyxNQUFNLGFBQWEsR0FBRyxJQUFBLG1DQUEyQixFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXpELDhDQUE4QztJQUM5Qzs7Ozs7O09BTUc7SUFDSCxJQUFBLDhCQUFzQixFQUFDO1FBQ25CLGFBQWE7UUFDYixPQUFPLEVBQUU7WUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtTQUMzQztLQUNKLENBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQ0osQ0FBQTtBQUVELGtCQUFlLHNDQUE4QixDQUFDIn0=