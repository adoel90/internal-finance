import { ExecArgs } from "@medusajs/framework/types"

export default async function ({ container }: ExecArgs) {
  const query = container.resolve("query")

  console.log("--- Query all domains with customers ---")
  try {
    const { data: domains } = await query.graph({
      entity: "domain",
      fields: ["id", "name", "customer.*"],
    })
    console.log(JSON.stringify(domains, null, 2))
  } catch (e) {
    console.error("Failed:", e.message)
  }
}