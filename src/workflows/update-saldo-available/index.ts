import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import { createWorkflow, WorkflowResponse, createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { SALDO_MODULE } from "src/modules/saldo"
import SaldoModuleService from "src/modules/saldo/service"

type UpdateSaldoAvailableInput = {
  id: string
  amount: number  
}

const updateSaldoAvailableStep1 = createStep(
  "step-1update-saldo-available",
  async (input: UpdateSaldoAvailableInput, { container }) => {
    const saldoService: SaldoModuleService = container.resolve(SALDO_MODULE)
    const query = container.resolve(ContainerRegistrationKeys.QUERY)

    // First check if record exists
    const { data: [existing] } = await query.graph({
      entity: "saldo_available",
      fields: ["id"],
      filters: {
        id: input.id,
      },
    })

    if (!existing) {
      throw new Error(`Saldo available with id ${input.id} not found`)
    }

    // Update using service
    await saldoService.updateSaldoAvailables({
      selector: { id: input.id },
      data: {
        amount: input.amount,
      },
    })

    return new StepResponse({ id: input.id })
  }
)

export const updateSaldoAvailableWorkflow = createWorkflow(
  "update-saldo-available",
  (input: UpdateSaldoAvailableInput) => {
    const result = updateSaldoAvailableStep1(input)
    return new WorkflowResponse(result)
  }
) 