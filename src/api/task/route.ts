
import type { 
    AuthenticatedMedusaRequest,
    MedusaResponse,
    MedusaRequest    
  } from "@medusajs/framework/http"
  import { MedusaError, ContainerRegistrationKeys } from "@medusajs/framework/utils"
  import createTaskWorkflow from "../../workflows/create-task"
  import { IPayloadInput } from "src/modules/task/types"

  export async function POST(
    req: AuthenticatedMedusaRequest<IPayloadInput>, 
    res: MedusaResponse
  ) {

  
    const authorization = req.headers['authorization'];
    
    if (!authorization) {
      return res.status(401).json({ error: "Missing Authorization header" });
    }

    const workflow = createTaskWorkflow(req.scope);
    const result = await workflow.run({
        input: req.body as IPayloadInput
    });
    res.json(result);
  }
