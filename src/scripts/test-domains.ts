import { ExecArgs } from "@medusajs/framework/types"

export default async function ({ container }: ExecArgs) {
  const query = container.resolve("query")

  console.log("--- Filter customers by customer_id ---")
  try {
    const { data: customers } = await query.graph({
      entity: "customer",
      fields: ["id", "email", "domains.*"],
      filters: {
        id: "cus_01KMPNRH82BVHJ856NVN6RSCDC"
      }
    })
    console.log("Success with customer.domains:", customers.length > 0 ? customers[0].domains?.length : 0)
    console.log(JSON.stringify(customers, null, 2))
  } catch (e) {
    console.error("Failed with customer.domains:", e.message)
  }
}