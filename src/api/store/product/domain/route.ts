import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const { name } = req.query

    if (!name) {
      return res.status(400).json({ error: "Domain name is required" })
    }

    const vercelToken = process.env.VERCEL_PUBLIC_TOKEN
    const baseUrlVercel = process.env.VERCEL_ENDPOINT
    if (!vercelToken) { 
        return res.status(500).json({ error: "Vercel token is not configured" })
        }
    if (!process.env.VERCEL_ENDPOINT) {
      return res.status(500).json({ error: "Vercel endpoint is not configured       " })
    }

    const response = await fetch(
      `${baseUrlVercel}/domains/status?name=${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${vercelToken}`,
        },
      }
    )

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: `Vercel API error: ${response.statusText}` })
    }

    const result = await response.json()

    return res.json(result)
  } catch (error: any) {
    console.error("Failed when checking domain status:", error)
    return res.status(500).json({ error: "Internal Server Error" })
  }
}
