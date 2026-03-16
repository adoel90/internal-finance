import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import { updateDomainWorkflow } from "../../../../workflows/update-domain"
import { deleteDomainWorkflow } from "../../../../workflows/delete-domain"
import { DOMAIN_MODULE } from "../../../../modules/domain"

async function verifyDomainOwnership(req: AuthenticatedMedusaRequest, domainId: string) {
  const customerId = req.auth_context?.actor_id
  if (!customerId) return false

  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: [domain] } = await query.graph({
    entity: "domain",
    fields: [
      "id",
      "customer.id"
    ],
    filters: {
      id: domainId,
    },
  })

  if (!domain) return false

  const linkedCustomers = domain.customer || []
  const customersArray = Array.isArray(linkedCustomers) ? linkedCustomers : [linkedCustomers]

  return customersArray.some((c: any) => c?.id === customerId)
}

export async function GET(
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) {
  const isOwner = await verifyDomainOwnership(req, req.params.id)
  if (!isOwner) {
    return res.status(404).json({ message: "Domain not found" })
  }

  const domainModuleService: any = req.scope.resolve(DOMAIN_MODULE)
  const domain = await domainModuleService.retrieveDomain(req.params.id)

  res.json({ domain })
}

export async function POST(
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) {
  const isOwner = await verifyDomainOwnership(req, req.params.id)
  if (!isOwner) {
    return res.status(404).json({ message: "Domain not found" })
  }

  const { result } = await updateDomainWorkflow(req.scope).run({
    input: {
      id: req.params.id,
      ...req.body as any,
    },
  })

  res.json({ domain: result })
}

export async function DELETE(
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) {
  const isOwner = await verifyDomainOwnership(req, req.params.id)
  if (!isOwner) {
    return res.status(404).json({ message: "Domain not found" })
  }

  await deleteDomainWorkflow(req.scope).run({
    input: req.params.id,
  })

  res.json({ id: req.params.id, object: "domain", deleted: true })
}
