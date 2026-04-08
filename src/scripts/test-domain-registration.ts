import { ExecArgs } from "@medusajs/framework/types"
import { createDomainWorkflow } from "../workflows/create-domain"

export default async function ({ container }: ExecArgs) {
  console.log("--- Testing Domain Registration ---")
  try {
    const input = {
      name: "test-domain-" + Date.now() + ".com",
      slug: "test-domain-" + Date.now() + "-com",
      is_active: true,
      is_premium: false,
    }

    console.log("Attempting to register domain:", input.name)

    const { result } = await createDomainWorkflow(container).run({
      input: input,
    })

    console.log("Successfully registered domain!")
    console.log(JSON.stringify(result, null, 2))

    console.log("\nAttempting to register the SAME domain again (Should Fail):")
    try {
      await createDomainWorkflow(container).run({
        input: input,
      })
      console.error("❌ ERROR: Domain was registered twice! The bug is still present.")
    } catch (duplicateError: any) {
      console.log("✅ SUCCESS: Duplicate domain registration blocked as expected.")
      console.log("Error message received:", duplicateError.message)
    }

  } catch (e: any) {
    console.error("❌ Failed to run domain registration test:", e.message)
  }
}