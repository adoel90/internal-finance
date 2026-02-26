"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSaldoAllRekeningWorkflow = exports.createSaldoHistoryStep = exports.createSaldoAllRekeningStep1 = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const saldo_1 = require("../../modules/saldo");
const create_saldo_history_1 = __importDefault(require("../../workflows/create-saldo-history"));
const types_1 = require("../../modules/cashflow/types");
exports.createSaldoAllRekeningStep1 = (0, workflows_sdk_1.createStep)("step-1-create-saldo-all-rekening", async (input, { container }) => {
    const saldoModuleService = container.resolve(saldo_1.SALDO_MODULE);
    const saldoAllRekeningBank = await saldoModuleService.createSaldoAllrekenings({
        ...input,
        no_rek: String(input.no_rek)
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1zYWxkby1hbGxyZWtlbmluZy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxRUFBNkg7QUFDN0gsK0NBQW1EO0FBR25ELGdHQUE2RTtBQUM3RSx3REFBMEQ7QUFFN0MsUUFBQSwyQkFBMkIsR0FBRyxJQUFBLDBCQUFVLEVBQ2pELGtDQUFrQyxFQUNsQyxLQUFLLEVBQUUsS0FBNkIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDbkQsTUFBTSxrQkFBa0IsR0FBdUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxvQkFBWSxDQUFDLENBQUM7SUFDL0UsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDO1FBQzFFLEdBQUcsS0FBSztRQUNSLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztLQUMvQixDQUFDLENBQUE7SUFFRixPQUFPLElBQUksNEJBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2xELENBQUMsRUFDRCxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDNUIsTUFBTSxrQkFBa0IsR0FBdUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxvQkFBWSxDQUFDLENBQUE7SUFFOUUsTUFBTSxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUN0RCxDQUFDLENBQ04sQ0FBQTtBQVVZLFFBQUEsc0JBQXNCLEdBQUcsSUFBQSwwQkFBVSxFQUM5Qyw2QkFBNkIsRUFDN0IsS0FBSyxFQUFFLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBK0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFFL0UsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLDhCQUEwQixFQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM3RCxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUUsT0FBTyxDQUFDLFlBQVk7WUFDNUIsZUFBZSxFQUFFLGFBQWEsQ0FBQyxFQUFFO1lBQ2pDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0I7WUFDMUMsYUFBYSxFQUFFLGtCQUFVLENBQUMsRUFBRTtTQUM3QjtLQUNGLENBQUMsQ0FBQztJQUNILE9BQU8sSUFBSSw0QkFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FDRixDQUFDO0FBRVcsUUFBQSw4QkFBOEIsR0FBRyxJQUFBLDhCQUFjLEVBQ3hELDJCQUEyQixFQUMzQixDQUFDLEtBQTJDLEVBQUUsRUFBRTtJQUU1QyxvQ0FBb0M7SUFDcEMsTUFBTSxhQUFhLEdBQUcsSUFBQSxtQ0FBMkIsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUV6RCw4Q0FBOEM7SUFDOUM7Ozs7OztPQU1HO0lBQ0gsSUFBQSw4QkFBc0IsRUFBQztRQUNuQixhQUFhO1FBQ2IsT0FBTyxFQUFFO1lBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7U0FDM0M7S0FDSixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksZ0NBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUNKLENBQUE7QUFFRCxrQkFBZSxzQ0FBOEIsQ0FBQyJ9