import { 
    AuthenticatedMedusaRequest,
    MedusaResponse,
  } from "@medusajs/framework/http"
  
  
  export async function GET(
    req: AuthenticatedMedusaRequest,
    res: MedusaResponse
  ): Promise<void> {
    const query = req.scope.resolve("query")
    const memberId = req.auth_context?.actor_id
  
    const { data: [member] } = await query.graph({
      entity: "member",
      fields: ["*"],
      filters: {
        id: memberId,
      },
    }, {
      throwIfKeyNotFound: true,
    })
  
    res.json({ member })
  }