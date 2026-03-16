import { ExecArgs } from "@medusajs/framework/types"

export default async function ({ container }: ExecArgs) {
  const query = container.resolve("query")

  const { data: domains } = await query.graph({
    entity: "domain",
    fields: [
      "id",
      "name",
      "customer.id",
      "customer.email"
    ]
  })
  console.log("--- All Domains ---")
  console.log(JSON.stringify(domains, null, 2))

  const { data: customers } = await query.graph({
    entity: "customer",
    fields: [
      "id",
      "email",
      "domain.*",
      "domain.product.id",
      "domain.product_variant.id",
      "domain.order.id",
    ],
  })

  console.log("--- All Customers with Domains ---")
  console.log(JSON.stringify(customers.filter(c => c.domain && c.domain.length > 0), null, 2))
}