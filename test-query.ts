import { MedusaApp } from "@medusajs/modules-sdk"
import { resolve } from "path"
import { initialize as initializeMedusaApp } from "@medusajs/framework"

async function run() {
  console.log("Initializing Medusa...")
  
  // Wait, `query` can be resolved from MedusaApp or container
  // A better way is to use the Medusa dev environment or an API route
}
run()