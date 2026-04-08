import { ExecArgs } from "@medusajs/framework/types"
import { createDomainWorkflow } from "../workflows/create-domain"
import { Modules } from "@medusajs/framework/utils"

export default async function ({ container }: ExecArgs) {
  console.log("--- Testing Multiple Domain Registrations per Customer ---")
  try {
    const customerId = "cus_01KMPNRH82BVHJ856NVN6RSCDC" // using a dummy ID, or I should create a dummy customer if needed
    // Let's create a dummy customer first using customer module service.
    const customerModuleService = container.resolve(Modules.CUSTOMER)
    
    // Create a customer
    const customer = await customerModuleService.createCustomers({
      email: `test-multi-domain-${Date.now()}@example.com`,
      first_name: "Test",
      last_name: "Multi-Domain",
    })
    console.log("Created test customer:", customer.id)

    // Register Domain 1
    const input1 = {
      name: "multi-test-domain-1-" + Date.now() + ".com",
      slug: "multi-test-domain-1-" + Date.now() + "-com",
      customer_id: customer.id,
    }
    console.log("Registering domain 1:", input1.name)
    const { result: domain1 } = await createDomainWorkflow(container).run({ input: input1 })
    console.log("Success Domain 1 ID:", domain1.id)

    // Register Domain 2
    const input2 = {
      name: "multi-test-domain-2-" + Date.now() + ".com",
      slug: "multi-test-domain-2-" + Date.now() + "-com",
      customer_id: customer.id,
    }
    console.log("Registering domain 2:", input2.name)
    const { result: domain2 } = await createDomainWorkflow(container).run({ input: input2 })
    console.log("Success Domain 2 ID:", domain2.id)

    // Query via GraphQL to see what the customer holds
    const query = container.resolve("query")
    const { data: queryResult } = await query.graph({
      entity: "customer",
      fields: ["id", "email", "domains.*"],
      filters: {
        id: customer.id
      }
    })
    
    const queriedCustomer = queryResult[0]
    console.log("\n--- Query Result ---")
    console.log(`Customer ${queriedCustomer.id} has domains:`)
    console.log(JSON.stringify(queriedCustomer.domains, null, 2))
    
    console.log("\nIs customer.domains an array?", Array.isArray(queriedCustomer.domains))
    console.log("Number of domains:", Array.isArray(queriedCustomer.domains) ? queriedCustomer.domains.length : (queriedCustomer.domains ? 1 : 0))

  } catch (e: any) {
    console.error("❌ Failed to run multiple domain registration test:", e.message)
    console.error(e.stack)
  }
}
