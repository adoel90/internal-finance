import { 
    MedusaRequest, 
    MedusaResponse,
  } from "@medusajs/framework"
  import { 
    Modules,
    ContainerRegistrationKeys,
    MedusaError,
  } from "@medusajs/framework/utils"

  import { updatePengeluaranProyeksiCashcallWorkflow } from "src/workflows/update-pengeluaran-proyeksi-cashcall"
  
  interface UpdateProyeksiCashcallBody {
    amount: number
    created_note_at: string
  }
  
  export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
  ) => {
    const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  
    const { data: [detail] } = await query.graph({
      entity: "pengeluaran_proyeksi_cashcall",
      fields: [
        "id",
        "amount",
        "created_note_at",
      ],
      filters: {
        id: req.params.id,
      },
    })

    res.json(detail)
  }

  export const PUT = async (
    req: MedusaRequest & { body: UpdateProyeksiCashcallBody },
    res: MedusaResponse
  ) => {
    const { amount, created_note_at } = req.body

    const workflow = updatePengeluaranProyeksiCashcallWorkflow(req.scope)
    const { result } = await workflow.run({
      input: {
        id: req.params.id,
        amount,
        created_note_at,
      },
    })    

    const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
    const { data: [updated] } = await query.graph({
      entity: "pengeluaran_proyeksi_cashcall",
      fields: [
        "id",
        "amount", 
        "created_note_at"
      ],
      filters: {
        id: req.params.id
      }
    })

    res.json(updated)
  } 