"use strict";
// import { MedusaRequest, MedusaResponse } from "@medusajs"
// import { CartService } from "@medusajs/medusa"
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXRheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wbHVnaW5zL2dsb2JhbC10YXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDREQUE0RDtBQUM1RCxpREFBaUQ7O0FBRWpELGlEQUFpRDtBQUNqRCx3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLFNBQVM7QUFDVCxNQUFNO0FBQ04sc0VBQXNFO0FBRXRFLGtCQUFrQjtBQUNsQiw0RUFBNEU7QUFDNUUsc0NBQXNDO0FBQ3RDLE9BQU87QUFFUCx3Q0FBd0M7QUFFeEMsK0JBQStCO0FBQy9CLGlEQUFpRDtBQUVqRCw2RkFBNkY7QUFDN0YsNEJBQTRCO0FBQzVCLCtCQUErQjtBQUUvQix5Q0FBeUM7QUFDekMsdUJBQXVCO0FBRXZCLFdBQVc7QUFDWCxJQUFJO0FBRUosbUNBQW1DO0FBQ25DLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIsYUFBYTtBQUNiLE9BQU87QUFDUCxlQUFlO0FBQ2Ysd0JBQXdCO0FBQ3hCLE9BQU87QUFDUCxjQUFjO0FBQ2QsUUFBUTtBQUNSLHVCQUF1QjtBQUN2QiwrQ0FBK0M7QUFDL0MsOERBQThEO0FBQzlELFNBQVM7QUFDVCxNQUFNO0FBQ04sSUFBSTtBQUVKLDRIQUE0SCJ9