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
  
  const customerId = req.auth_context?.actor_id

  if (!customerId) {
    return res.status(401).json({ message: "Route Unauthorized: missing actor_id" })
  }

  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  // const { data: customers } = await query.graph({
  //   entity: "customer",
  //   fields: [
  //     "id",
  //     "email",
  //     "domain.*",
  //     "domain.product.id",
  //     "domain.product_variant.id",
  //     "domain.order.id"
  //   ],
  //   filters: {
  //     id: customerId,
  //   },
  // })

  // if (!customers || customers.length === 0) {
  //   return res.json({ domains: [] })
  // }

  // const customer = customers[0] as any
  // let rawDomains = customer.domain || []
  // if (!Array.isArray(rawDomains)) {
  //   rawDomains = [rawDomains]
  // }

  // const domains = rawDomains.map((domain: any) => {
  //   const customer_id = customer.id || null;
  //   const user_email = customer.email || null;
  //   const product_id = domain.product?.id || null;
  //   const variant_id = domain.product_variant?.id || null;
  //   const order_id = domain.order?.id || null;

  //   const { product, product_variant, order, ...domainData } = domain;

  //   return {
  //     ...domainData,
  //     id: domain.id,
  //     customer_id,
  //     user_email,
  //     product_id,
  //     variant_id,
  //     order_id
  //   }
  // })


  const { data: domains } = await query.graph({
    entity: "domain",
    fields: [
      "id",
      "name",
      "slug",
      "is_premium",
      "is_active",
      "customer.id",
      "customer.email",
      "order.id",
      "product.id",
      "product_variant.id",
      "product_variant.product_id",
      "metadata",
      "created_at",
      "updated_at",
      "deleted_at"
    ]
  })
  
  // console.log("--- All Domains ---")
  // console.log(JSON.stringify(domains, null, 2))

  // const { data: customers } = await query.graph({
  //   entity: "customer",
  //   fields: [
  //     "id",
  //     "email",
  //     "domain.*",
  //     "domain.product.id",
  //     "domain.product_variant.id",
  //     "domain.order.id",
  //   ],
  // })

  // console.log("--- All Customers with Domains ---")
  // console.log(JSON.stringify(customers.filter(c => c.domain && c.domain.length > 0), null, 2))

  res.json({ domains })
}
