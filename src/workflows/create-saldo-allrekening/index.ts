import { createWorkflow, WorkflowResponse, WorkflowData, createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { SALDO_MODULE } from "src/modules/saldo";
import SaldoModuleService from "src/modules/saldo/service";
import { ISaldoAllRekeningInput } from "src/modules/saldo/types";
import createSaldoHistoryWorkflow from "src/workflows/create-saldo-history"
import { Currencies } from "src/modules/cashflow/types";

export const createSaldoAllRekeningStep1 = createStep(
    "step-1-create-saldo-all-rekening",
    async (input: ISaldoAllRekeningInput, { container }) => {
        const saldoModuleService: SaldoModuleService = container.resolve(SALDO_MODULE);
        const saldoAllRekeningBank = await saldoModuleService.createSaldoAllrekenings(input)

        return new StepResponse(saldoAllRekeningBank);
    },
    async ({ id }, { container }) => {
        const saldoModuleService: SaldoModuleService = container.resolve(SALDO_MODULE)
    
        await saldoModuleService.deleteSaldoAllrekenings(id)
      }
)

interface CreateSaldoHistoryStepInput {
  saldoRekening: any;
  payload: {
    amount_saldo: number;
    updated_saldo_at: Date;
  };
}

export const createSaldoHistoryStep = createStep(
  "step-2-create-saldo-history",
  async ({ saldoRekening, payload }: CreateSaldoHistoryStepInput, { container }) => {
    
    const result = await createSaldoHistoryWorkflow.run({
      input: {
        amount: payload.amount_saldo,
        amount_saldo_id: saldoRekening.id,
        updated_saldo_at: payload.updated_saldo_at,
        currency_code: Currencies.ID
      }
    });
    return new StepResponse(result);
  }
);

export const createSaldoAllRekeningWorkflow = createWorkflow(
    "create-saldo-all-rekening",
    (input: WorkflowData<ISaldoAllRekeningInput>) => {
        
        // Step 1: Create Saldo All Rekening
        const saldoRekening = createSaldoAllRekeningStep1(input);
        
        //Step 2: Create Saldo spesifik ID of rekening
        /**
         * 
         * Komunikasi antar workflow bisa menggunakan beberapa cara :
         * 
         * https://chatgpt.com/share/685147ac-cd94-8000-b4b9-8fb72c3d2e83
         * 
         */       
        createSaldoHistoryStep({
            saldoRekening,
            payload: {
                amount_saldo: input.amount_saldo,
                updated_saldo_at: input.updated_saldo_at,
            }
        });
        
        return new WorkflowResponse(saldoRekening);
    }
)

export default createSaldoAllRekeningWorkflow;
