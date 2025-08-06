import { createWorkflow, WorkflowResponse, WorkflowData, createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { SALDO_MODULE } from "src/modules/saldo";
import SaldoModuleService from "src/modules/saldo/service";
import { ISaldoHistoryInput } from "src/modules/saldo/types";

export const createSaldoHistoryStep1 = createStep(
    "step-1-create-saldo-history",
    async (input: ISaldoHistoryInput, { container }) => {
        const saldoModuleService: SaldoModuleService = container.resolve(SALDO_MODULE);
        
        const saldoHistory = await saldoModuleService.createSaldoHistories(input)
        return new StepResponse(saldoHistory);
    },
    // async ({ id }, { container }) => {
    //     const saldoModuleService: SaldoModuleService = container.resolve(SALDO_MODULE)
    
    //     await saldoModuleService.deleteSaldoAllbanks(id)
    //   }
)

export const createSaldoHistoryWorkflow = createWorkflow(
    "create-saldo-history",
    (input: WorkflowData<ISaldoHistoryInput>) => {

        // Step 1: Create Saldo All Rekening
        const saldoHistory = createSaldoHistoryStep1(input);
     
        return new WorkflowResponse(saldoHistory);
    }
)

export default createSaldoHistoryWorkflow;
