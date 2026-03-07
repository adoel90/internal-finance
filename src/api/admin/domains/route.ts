import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { createDomainWorkflow } from "../../../workflows/create-domain"
import { DOMAIN_MODULE } from "../../../modules/domain"

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
) {
  const { result } = await createDomainWorkflow(req.scope).run({
    input: req.body as any,
  })

  res.json({ domain: result })
}

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
) {
  const domainModuleService: any = req.scope.resolve(DOMAIN_MODULE)
  const domains = await domainModuleService.listDomains()

  res.json({ domains })
}
