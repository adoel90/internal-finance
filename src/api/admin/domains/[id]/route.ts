import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { updateDomainWorkflow } from "../../../../workflows/update-domain"
import { deleteDomainWorkflow } from "../../../../workflows/delete-domain"
import { DOMAIN_MODULE } from "../../../../modules/domain"

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
) {
  const domainModuleService: any = req.scope.resolve(DOMAIN_MODULE)
  const domain = await domainModuleService.retrieveDomain(req.params.id)

  res.json({ domain })
}

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
) {
  const { result } = await updateDomainWorkflow(req.scope).run({
    input: {
      id: req.params.id,
      ...req.body as any,
    },
  })

  res.json({ domain: result })
}

export async function DELETE(
  req: MedusaRequest,
  res: MedusaResponse
) {
  await deleteDomainWorkflow(req.scope).run({
    input: req.params.id,
  })

  res.json({ id: req.params.id, object: "domain", deleted: true })
}
