import { MedusaApp } from "@medusajs/framework/modules-sdk"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import express from "express"
import { modules } from "./src/modules-config"

async function run() {
  const { query } = await MedusaApp({
    modules
  })
  
  // Try querying customer
  try {
    const { data } = await query.graph({
      entity: "customer",
      fields: [
        "id",
        "domain.*"
      ],
      // We don't have a specific customer id, just get the first one that has a domain
    })
    console.log("Customer query success:")
    console.log(JSON.stringify(data.slice(0, 2), null, 2))
  } catch (e) {
    console.error("Customer query failed:", e.message)
  }

  process.exit(0)
}

run()
