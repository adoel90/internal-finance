import type {
    MedusaRequest,
    MedusaResponse,
  } from "@medusajs/framework/http"
  import helloWorldWorkflow from "src/workflows/hello-world/hello-world"
  
  export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
  ) {
    const { result } = await helloWorldWorkflow(req.scope)
      .run({
        input: {
          name: "John",
        },
      })
  
    res.send(result)
  }