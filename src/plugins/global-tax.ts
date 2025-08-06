// import { MedusaRequest, MedusaResponse } from "@medusajs"
// import { CartService } from "@medusajs/medusa"

// export default async function globalTaxPlugin(
//   req: MedusaRequest,
//   res: MedusaResponse,
//   next
// ) {
//   const cartService: CartService = req.scope.resolve("cartService")

//   // Ambil cart
//   const cart = await cartService.retrieveWithTotals(req.params.cart_id, {
//     relations: ["items", "region"],
//   })

//   const subtotal = cart.subtotal || 0

//   // Hitung pajak global 10%
//   const globalTax = Math.round(subtotal * 0.1)

//   // Tambahkan pajak ke dalam custom field cart (jika perlu) atau langsung modify response
//   cart.total += globalTax
//   cart.tax_total = globalTax

//   // Return cart dengan pajak tambahan
//   res.json({ cart })

//   return
// }

//REGISTRASIKAN DI medusa-config.js
// module.exports = {
//   projectConfig: {
//     // ...
//   },
//   plugins: [
//     // plugin lainnya
//   ],
//   routes: [
//     {
//       method: "get",
//       path: "/custom/carts/:cart_id/totals",
//       handler: require("./src/plugins/global-tax").default,
//     },
//   ]
// }

// Sekarang, ketika kamu hit /custom/carts/:cart_id/totals, kamu akan mendapatkan total cart dengan pajak 10% dari subtotal.