import { MedusaRequest, MedusaResponse} from "@medusajs/framework"
  import { ContainerRegistrationKeys } from "@medusajs/framework/utils"

import { updateSaldoAvailableWorkflow } from "src/workflows/update-saldo-available"

interface UpdateSaldoAvailableBody {
    amount: number    
  }

export const PUT = async (
    req: MedusaRequest & { body: UpdateSaldoAvailableBody },
    res: MedusaResponse
  ) => {
        const { amount } = req.body

    const workflow = updateSaldoAvailableWorkflow(req.scope)
    const { result } = await workflow.run({
      input: {
        id: req.params.id,
        amount        
      },
    })    

    const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
    const { data: [updated] } = await query.graph({
        entity: "saldo_available",
      fields: [
        "id",
        "amount"
      ],
      filters: {
        id: req.params.id
      }
    })

    res.json(updated)
  } 