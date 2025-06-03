import { createWorkflow, WorkflowResponse, WorkflowData, createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { SALDO_MODULE } from "src/modules/saldo";
import SaldoModuleService from "src/modules/saldo/service";
import { ISaldoAvailableInput } from "src/modules/cashflow/types";

export const createSaldoAvailableStep1 = createStep(
    "step-1-create-saldo-available",
    async (input: ISaldoAvailableInput, { container }) => {
        const saldoModuleService: SaldoModuleService = container.resolve(SALDO_MODULE);
        const saldoAvailable = await saldoModuleService.createSaldoAvailables(input);
        return new StepResponse(saldoAvailable);
    }
)

export const createSaldoAvailableWorkflow = createWorkflow(
    "create-saldo-available",
    (input: WorkflowData<ISaldoAvailableInput>) => {
        // Step 1: Create Saldo Available
        const saldoAvailable = createSaldoAvailableStep1(input);
        return new WorkflowResponse(saldoAvailable);
    }
)

export default createSaldoAvailableWorkflow;
