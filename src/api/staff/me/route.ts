import { 
    AuthenticatedMedusaRequest,
    MedusaResponse,
  } from "@medusajs/framework/http"
  
  
  export async function GET(
    req: AuthenticatedMedusaRequest,
    res: MedusaResponse
  ): Promise<void> {
    const query = req.scope.resolve("query")
    const staffId = req.auth_context?.actor_id
  
    const { data: [staff] } = await query.graph({
      entity: "staff",
      fields: ["*"],
      filters: {
        id: staffId,
      },
    }, {
      throwIfKeyNotFound: true,
    })
  
    res.json({ staff })
  }