import type { 
    AuthenticatedMedusaRequest,
    MedusaResponse,
    MedusaRequest    
  } from "@medusajs/framework/http"
  import { MedusaError, ContainerRegistrationKeys } from "@medusajs/framework/utils"
  import createMemberWorkflow from "../../workflows/create-member"
  
  type RequestBody = {
    name: string    
    role_id: string
    email: string
  }
  
  export async function POST(
    req: AuthenticatedMedusaRequest<RequestBody>, 
    res: MedusaResponse
  ) {
    // If `actor_id` is present, the request carries 
    // authentication for an existing member
    if (req.auth_context.actor_id) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Request already authenticated as a member."
      )
    }
  
    const authorization = req.headers['authorization'];
    
    if (!authorization) {
      return res.status(401).json({ error: "Missing Authorization header" });
    }

    if (req.auth_context.actor_id) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Request already authenticated as a member."
      )
    }



    const workflow = createMemberWorkflow(req.scope);
    const result = await workflow.run({
      input: {
        member: req.body ,
        authIdentityId: req.auth_context.auth_identity_id,
      }
    });
    res.json(result);
  }

  
  export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
  ) => {
    const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);
  
  
    const result = await query.graph({
      entity: "member",
      fields: ["*"],
      // pagination,
      // filters
    })
  
    res.json({ 
      roles: result.data,
      pagination: {
      //   take: take,
      //   skip: skip,
        total: result.metadata?.count || result?.data?.length || 0
      }
    })
  }
  