
import type { 
    AuthenticatedMedusaRequest,
    MedusaResponse,
    MedusaRequest    
  } from "@medusajs/framework/http"
  import { MedusaError, ContainerRegistrationKeys } from "@medusajs/framework/utils"
  import createTaskStatusWorkflow from "../../../workflows/create-task-status"
  import { ITaskStatusInput } from "src/modules/task/types"

  export async function POST(
    req: AuthenticatedMedusaRequest<ITaskStatusInput>, 
    res: MedusaResponse
  ) {

  
    const authorization = req.headers['authorization'];
    
    if (!authorization) {
      return res.status(401).json({ error: "Missing Authorization header" });
    }

    const workflow = createTaskStatusWorkflow(req.scope);
    const result = await workflow.run({
        input: req.body as ITaskStatusInput
    });
    res.json(result);
  }

  
    export const GET = async (
      req: MedusaRequest,
      res: MedusaResponse
    ) => {
      const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);
    
    
      const result = await query.graph({
        entity: "status",
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
