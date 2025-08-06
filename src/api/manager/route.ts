import type { 
    AuthenticatedMedusaRequest,
    MedusaResponse,
  } from "@medusajs/framework/http"
  import { MedusaError } from "@medusajs/framework/utils"
  import createManagerWorkflow from "../../workflows/create-manager"
  
  type RequestBody = {
    firstName?: string
    lastName?: string
    email: string
  }
  
  export async function POST(
    req: AuthenticatedMedusaRequest<RequestBody>, 
    res: MedusaResponse
  ) {
    // If `actor_id` is present, the request carries 
    // authentication for an existing manager
    if (req.auth_context.actor_id) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Request already authenticated as a manager."
      )
    }
  

      // Mengakses header, misal: 'x-custom-header'
    // const customHeader = req.headers['x-custom-header'];

    // // Contoh penggunaan header
    // if (!customHeader) {
    //   return res.status(400).json({ error: "Missing x-custom-header" });
    // }


      // Ambil header Authorization
    const authorization = req.headers['authorization'];

    // Contoh validasi: pastikan header Authorization ada
    if (!authorization) {
      return res.status(401).json({ error: "Missing Authorization header" });
    }

    if (req.auth_context.actor_id) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Request already authenticated as a manager."
      )
    }



    const workflow = createManagerWorkflow(req.scope);
    const result = await workflow.run({
      input: {
        manager: req.body ,
        authIdentityId: req.auth_context.auth_identity_id,
      }
    });
    res.json(result);
  }