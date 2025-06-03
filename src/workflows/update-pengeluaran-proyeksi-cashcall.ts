import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import { createWorkflow, WorkflowResponse, createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { CASHFLOW_MODULE } from "src/modules/cashflow"
import CashflowModuleService from "src/modules/cashflow/service"

type UpdatePengeluaranProyeksiCashcallInput = {
  id: string
  amount: number
  created_note_at: string
}

const updateProyeksiCashcallStep = createStep(
  "update-proyeksi-cashcall",
  async (input: UpdatePengeluaranProyeksiCashcallInput, { container }) => {
    const cashflowService: CashflowModuleService = container.resolve(CASHFLOW_MODULE)
    const query = container.resolve(ContainerRegistrationKeys.QUERY)

    // First check if record exists
    const { data: [existing] } = await query.graph({
      entity: "pengeluaran_proyeksi_cashcall",
      fields: ["id"],
      filters: {
        id: input.id,
      },
    })

    if (!existing) {
      throw new Error(`Pengeluaran proyeksi cashcall with id ${input.id} not found`)
    }

    // Update using service
    await cashflowService.updatePengeluaranProyeksiCashcalls({
      selector: { id: input.id },
      data: {
        amount: input.amount,
        created_note_at: new Date(input.created_note_at),
      },
    })

    return new StepResponse({ id: input.id })
  }
)

export const updatePengeluaranProyeksiCashcallWorkflow = createWorkflow(
  "update-pengeluaran-proyeksi-cashcall",
  (input: UpdatePengeluaranProyeksiCashcallInput) => {
    const result = updateProyeksiCashcallStep(input)
    return new WorkflowResponse(result)
  }
) 