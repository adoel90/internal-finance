import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import { createDomainWorkflow } from "../../../workflows/create-domain"
import { DOMAIN_MODULE } from "../../../modules/domain"

export async function POST(
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) {
  const customerId = req.auth_context?.actor_id

  if (!customerId) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  const { result } = await createDomainWorkflow(req.scope).run({
    input: {
      ...(req.body as any),
      customer_id: customerId,
    },
  })

  res.json({ domain: result })
}


// export async function GET(
//   req: MedusaRequest,
//   res: MedusaResponse
// ) {
//   const domainModuleService: any = req.scope.resolve(DOMAIN_MODULE)
//   const domains = await domainModuleService.listDomains()

//   res.json({ domains })
// }


export async function GET(
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) {
  const customerId = req.auth_context?.actor_id;

  if (!customerId) {
    return res
      .status(401)
      .json({ message: "Route Unauthorized: missing actor_id" });
  }

  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);

  const { data: customers } = await query.graph({
    entity: "customer",
    fields: [
      "id",
      "email",
      "domains.*",
      "domains.order.id",
      "domains.product.id",
      "domains.product_variant.id",
      "domains.product_variant.product_id"
    ],
    filters: {
      id: customerId,
    },
  });

  if (!customers || customers.length === 0) {
    return res.json({ domains: [] });
  }

  const customer = customers[0] as any;
  let domains = customer.domains || [];
  if (!Array.isArray(domains)) {
    domains = [domains];
  }

  // Format domains to attach customer data back if frontend relies on it
  const formattedDomains = domains.map((domain: any) => ({
    ...domain,
    customer: {
      id: customer.id,
      email: customer.email
    }
  }));

  res.json({ domains: formattedDomains });
}
