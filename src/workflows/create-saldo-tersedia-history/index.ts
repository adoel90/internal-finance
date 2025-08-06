import { createWorkflow, WorkflowResponse, WorkflowData, createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { SALDO_MODULE } from "src/modules/saldo";
import SaldoModuleService from "src/modules/saldo/service";
import { ISaldoHistoryInput } from "src/modules/saldo/types";

export const    creatStep1 = createStep(
    "step-1-create-saldo-history-tersedia",
    async (input: ISaldoHistoryInput, { container }) => {
        
        const saldoModuleService: SaldoModuleService = container.resolve(SALDO_MODULE);
        const saldoHistory = await saldoModuleService.createSaldoHistoryTersedias(input)
        return new StepResponse(saldoHistory);
    },
    // async ({ id }, { container }) => {
    //     const saldoModuleService: SaldoModuleService = container.resolve(SALDO_MODULE)
    
    //     await saldoModuleService.deleteSaldoAllbanks(id)
    //   }
)

export const createSaldoHistoryTersediaWorkflow = createWorkflow(
    "create-saldo-history-tersedia",
    (input: WorkflowData<ISaldoHistoryInput>) => {

        // Step 1: Create Saldo All Rekening
        const saldoHistory = creatStep1(input);
     
        return new WorkflowResponse(saldoHistory);
    }
)

export default createSaldoHistoryTersediaWorkflow;
