import {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"

import {
  ContainerRegistrationKeys,
} from "@medusajs/framework/utils"

import { createRoleWorkflow } from "../../workflows/create-role"


// export const POST = async (
//   req: MedusaRequest,
//   res: MedusaResponse
// ) => {
//   const workflow = createRoleWorkflow(req.scope);
//   const result = await workflow.run({
//     input: req.body as { name: string}
//   });
//   res.json(result);
// }


export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);


  const result = await query.graph({
    entity: "user",
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
