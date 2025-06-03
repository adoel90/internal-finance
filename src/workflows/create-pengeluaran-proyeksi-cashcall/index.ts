import { createWorkflow, WorkflowResponse, WorkflowData, createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { PengeluaranProyeksiCashcallInput } from "../../modules/cashflow/types/index"
import CashflowModuleService from "src/modules/cashflow/service";
import { CASHFLOW_MODULE } from "src/modules/cashflow"

const createProyeksiCashcallStep1 = createStep(
    "step1create-proyeksi-cashcall",
    async (input: PengeluaranProyeksiCashcallInput, { container}) => {

        const cashflowModuleService: CashflowModuleService = container.resolve(
            CASHFLOW_MODULE 
        )
        const proyeksiPengeluaranCashcall = await cashflowModuleService.createPengeluaranProyeksiCashcalls(input);
        return new StepResponse(proyeksiPengeluaranCashcall);
    }
)


export const createPengeluaranProyeksiCashcallWorkflow = createWorkflow(
    "create-pengeluaran-proyeksi-cashcall",
    (input: WorkflowData<PengeluaranProyeksiCashcallInput>) => {
        // Step 1: Create  Proyeksi Pengeluaran Cashcall
        const penerimaan = createProyeksiCashcallStep1(input);
        return new WorkflowResponse(penerimaan);
    }
)

export default createPengeluaranProyeksiCashcallWorkflow;
