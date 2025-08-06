import {
    createStep,
    StepResponse,
  } from "@medusajs/framework/workflows-sdk"

import { CASHFLOW_MODULE } from "src/modules/cashflow"
import CashflowModuleService from "src/modules/cashflow/service"

import { SALDO_MODULE } from "src/modules/saldo"
import SaldoModuleService from "src/modules/saldo/service"

import { WorkflowResponse, createWorkflow, WorkflowData } from '@medusajs/framework/workflows-sdk'
import { PenerimaanInput} from '../../modules/cashflow/types'
import { ISaldoAllBankInput } from "src/modules/saldo/types"

type UpdateSaldoBankInput = {
    id: string
    amount_saldo: number  
  }
  

export const createPenerimaanStep1 = createStep(
    "step1-create-penerimaan",
    async (input: PenerimaanInput, { container }) => {
        const cashflowModuleService: CashflowModuleService = container.resolve(
            CASHFLOW_MODULE
        )
    
        const penerimaan = await cashflowModuleService.createPenerimaans(input);
        return new StepResponse(penerimaan, penerimaan.id)
    },
    //Rollback when error or failed
    async (id: string, { container }) => {
        const cashflowModuleService: CashflowModuleService = container.resolve(
            CASHFLOW_MODULE
        )
        await cashflowModuleService.deletePenerimaans(id);
    }
)

//TODO:
// export const updateSaldoBankStep2 = createStep(
//     "step2-update-saldo-bank",
//     async (input: UpdateSaldoBankInput,{container}) => {
//         const saldoModuleService: SaldoModuleService = container.resolve(SALDO_MODULE);

//         await saldoModuleService.updateSaldoAllbanks({
//             selector: { id: input.id },
//             data: {
//                 amount_saldo: input.amount_saldo,
//             },
//         })
//     }

// )

// export const createSummaryPenerimaanStep2 = createStep(
//     "step2-create-summary-penerimaan",
//     async (input: SummaryPenerimaanInput, { container }) => {
//         const cashflowModuleService: CashflowModuleService = container.resolve(
//             CASHFLOW_MODULE
//         )
    
//         const summaryPenerimaan = await cashflowModuleService.createSummaryPenerimaans(input)
//         return new StepResponse(summaryPenerimaan, summaryPenerimaan.id)
//     },
//     //Rollback when error or failed
//     async (id: string, { container }) => {
//         const cashflowModuleService: CashflowModuleService = container.resolve(
//             CASHFLOW_MODULE
//         )
//         await cashflowModuleService.deleteSummaryPenerimaans(id);
//     }
// )

export const createPenerimaanWorkflow = createWorkflow(
    "create-penerimaan",
    (input: WorkflowData<PenerimaanInput>) => {
        // Step 1: Create penerimaan
        const penerimaan = createPenerimaanStep1(input);


        //TODO: if one table is aplicable, so no need to create this step-2
        // Get service instance
        // const cashflowModuleService: CashflowModuleService = container.resolve(
        //     CASHFLOW_MODULE
        // )

        // // Get current total
        // const currentTotal = cashflowModuleService.getTotalSummaryPenerimaan();
        
        // // Create summary penerimaan with new total
        // currentTotal.then(total => {
        //     const newTotal = (total || 0) + (input.amount || 0);
            
        //     createSummaryPenerimaanStep2({
        //         total_penerimaan: newTotal
        //     });
        // });

        // if(penerimaan){
        //     // STEP-2
        //     updateSaldoBankStep2({
        //         id: input.payment_method,
        //         amount_saldo: ? //GW HARUS UPDATE "ANAK-nya" yaitu "detail_history"
        //     })
            
        // }

        // Return workflow response with penerimaan
        return new WorkflowResponse(penerimaan);
    }
)

export default createPenerimaanWorkflow;

