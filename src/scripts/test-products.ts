import { ExecArgs } from "@medusajs/framework/types"

export default async function ({ container }: ExecArgs) {
  const query = container.resolve("query")
  
  const collectionId = "pcol_01K1F1H84FHGNSYHNK7SG1B7X1"
  const regionId = "reg_01KKXAZYDD9635DZANW5KHV3B6"

  console.log(`Checking products for collection: ${collectionId}`)

  const { data: products } = await query.graph({
    entity: "product",
    fields: [
      "id",
      "title",
      "status",
      "collection_id",
      "sales_channels.id",
      "variants.id",
      "variants.prices.currency_code",
      "variants.prices.amount"
    ],
    filters: {
      collection_id: collectionId
    }
  })

  console.log(`Found ${products.length} products in this collection.`)
  if (products.length > 0) {
    console.log(JSON.stringify(products, null, 2))
  } else {
    console.log("No products found in the database for this collection.")
  }

  console.log(`\nChecking Region: ${regionId}`)
  try {
    const { data: regions } = await query.graph({
      entity: "region",
      fields: ["id", "name", "currency_code", "countries.iso_2"],
      filters: {
        id: regionId
      }
    })
    console.log(`Found region:`, JSON.stringify(regions, null, 2))
  } catch (e) {
    console.error("Error querying region:", e.message)
  }
}
