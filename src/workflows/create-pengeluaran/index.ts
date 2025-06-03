import {
    createStep,
    StepResponse,
  } from "@medusajs/framework/workflows-sdk" 

import { CASHFLOW_MODULE } from "src/modules/cashflow"
import CashflowModuleService from "src/modules/cashflow/service"

import { WorkflowResponse, createWorkflow, WorkflowData } from '@medusajs/framework/workflows-sdk'
import { PengeluaranInput} from '../../modules/cashflow/types'

export const createPengeluaranStep1 = createStep(
    "step1-create-pengeluaran",
    async (input: PengeluaranInput, { container }) => {
        const cashflowModuleService: CashflowModuleService = container.resolve(
            CASHFLOW_MODULE
        )
    
        const pengeluaran = await cashflowModuleService.createPengeluarans(input);
        return new StepResponse(pengeluaran, pengeluaran.id)
    },
    //Rollback when error or failed
    async (id: string, { container }) => {
        const cashflowModuleService: CashflowModuleService = container.resolve(
            CASHFLOW_MODULE
        )
        await cashflowModuleService.deletePengeluarans(id);
    }
)


export const createPengeluaranWorkflow = createWorkflow(
    "create-pengeluaran",
    (input: WorkflowData<PengeluaranInput>) => {
        // Step 1: Create pengeluaran
        const pengeluaran = createPengeluaranStep1(input);


        // Return workflow response with pengeluaran
        return new WorkflowResponse(pengeluaran);
    }
)

export default createPengeluaranWorkflow;

