import { createWorkflow, WorkflowResponse, WorkflowData, createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { SALDO_MODULE } from "src/modules/saldo";
import SaldoModuleService from "src/modules/saldo/service";
import { ISaldoAllBankInput } from "src/modules/saldo/types";

export const createSaldoAllBankStep1 = createStep(
    "step-1-create-saldo-all-bank",
    async (input: ISaldoAllBankInput, { container }) => {
        const saldoModuleService: SaldoModuleService = container.resolve(SALDO_MODULE);
        const saldoAllBank = await saldoModuleService.createSaldoAllbanks(input)
        return new StepResponse(saldoAllBank);
    }
)

export const createSaldoAllBankWorkflow = createWorkflow(
    "create-saldo-all-bank",
    (input: WorkflowData<ISaldoAllBankInput>) => {
        // Step 1: Create Saldo All Bank
        const saldoAllBank = createSaldoAllBankStep1(input);
        return new WorkflowResponse(saldoAllBank);
    }
)

export default createSaldoAllBankWorkflow;
