"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
exports.GET = GET;
const utils_1 = require("@medusajs/framework/utils");
const create_domain_1 = require("../../../workflows/create-domain");
async function POST(req, res) {
    const customerId = req.auth_context?.actor_id;
    if (!customerId) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const { result } = await (0, create_domain_1.createDomainWorkflow)(req.scope).run({
        input: {
            ...req.body,
            customer_id: customerId,
        },
    });
    res.json({ domain: result });
}
// export async function GET(
//   req: MedusaRequest,
//   res: MedusaResponse
// ) {
//   const domainModuleService: any = req.scope.resolve(DOMAIN_MODULE)
//   const domains = await domainModuleService.listDomains()
//   res.json({ domains })
// }
async function GET(req, res) {
    const customerId = req.auth_context?.actor_id;
    if (!customerId) {
        return res.status(401).json({ message: "Route Unauthorized: missing actor_id" });
    }
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    // const { data: customers } = await query.graph({
    //   entity: "customer",
    //   fields: [
    //     "id",
    //     "email",
    //     "domain.*",
    //     "domain.product.id",
    //     "domain.product_variant.id",
    //     "domain.order.id"
    //   ],
    //   filters: {
    //     id: customerId,
    //   },
    // })
    // if (!customers || customers.length === 0) {
    //   return res.json({ domains: [] })
    // }
    // const customer = customers[0] as any
    // let rawDomains = customer.domain || []
    // if (!Array.isArray(rawDomains)) {
    //   rawDomains = [rawDomains]
    // }
    // const domains = rawDomains.map((domain: any) => {
    //   const customer_id = customer.id || null;
    //   const user_email = customer.email || null;
    //   const product_id = domain.product?.id || null;
    //   const variant_id = domain.product_variant?.id || null;
    //   const order_id = domain.order?.id || null;
    //   const { product, product_variant, order, ...domainData } = domain;
    //   return {
    //     ...domainData,
    //     id: domain.id,
    //     customer_id,
    //     user_email,
    //     product_id,
    //     variant_id,
    //     order_id
    //   }
    // })
    const { data: domains } = await query.graph({
        entity: "domain",
        fields: [
            "id",
            "name",
            "slug",
            "is_premium",
            "is_active",
            "customer.id",
            "customer.email",
            "order.id",
            "product.id",
            "product_variant.id",
            "product_variant.product_id",
            "metadata",
            "created_at",
            "updated_at",
            "deleted_at"
        ]
    });
    // console.log("--- All Domains ---")
    // console.log(JSON.stringify(domains, null, 2))
    // const { data: customers } = await query.graph({
    //   entity: "customer",
    //   fields: [
    //     "id",
    //     "email",
    //     "domain.*",
    //     "domain.product.id",
    //     "domain.product_variant.id",
    //     "domain.order.id",
    //   ],
    // })
    // console.log("--- All Customers with Domains ---")
    // console.log(JSON.stringify(customers.filter(c => c.domain && c.domain.length > 0), null, 2))
    res.json({ domains });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2RvbWFpbnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxvQkFrQkM7QUFjRCxrQkFtR0M7QUF2SUQscURBQXFFO0FBQ3JFLG9FQUF1RTtBQUdoRSxLQUFLLFVBQVUsSUFBSSxDQUN4QixHQUErQixFQUMvQixHQUFtQjtJQUVuQixNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQTtJQUU3QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFFRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLG9DQUFvQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDM0QsS0FBSyxFQUFFO1lBQ0wsR0FBSSxHQUFHLENBQUMsSUFBWTtZQUNwQixXQUFXLEVBQUUsVUFBVTtTQUN4QjtLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtBQUM5QixDQUFDO0FBR0QsNkJBQTZCO0FBQzdCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsTUFBTTtBQUNOLHNFQUFzRTtBQUN0RSw0REFBNEQ7QUFFNUQsMEJBQTBCO0FBQzFCLElBQUk7QUFHRyxLQUFLLFVBQVUsR0FBRyxDQUN2QixHQUErQixFQUMvQixHQUFtQjtJQUduQixNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQTtJQUU3QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxDQUFDLENBQUE7SUFDbEYsQ0FBQztJQUVELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLGtEQUFrRDtJQUNsRCx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixtQ0FBbUM7SUFDbkMsd0JBQXdCO0lBQ3hCLE9BQU87SUFDUCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLE9BQU87SUFDUCxLQUFLO0lBRUwsOENBQThDO0lBQzlDLHFDQUFxQztJQUNyQyxJQUFJO0lBRUosdUNBQXVDO0lBQ3ZDLHlDQUF5QztJQUN6QyxvQ0FBb0M7SUFDcEMsOEJBQThCO0lBQzlCLElBQUk7SUFFSixvREFBb0Q7SUFDcEQsNkNBQTZDO0lBQzdDLCtDQUErQztJQUMvQyxtREFBbUQ7SUFDbkQsMkRBQTJEO0lBQzNELCtDQUErQztJQUUvQyx1RUFBdUU7SUFFdkUsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sS0FBSztJQUdMLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFDLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRTtZQUNOLElBQUk7WUFDSixNQUFNO1lBQ04sTUFBTTtZQUNOLFlBQVk7WUFDWixXQUFXO1lBQ1gsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixVQUFVO1lBQ1YsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQiw0QkFBNEI7WUFDNUIsVUFBVTtZQUNWLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtTQUNiO0tBQ0YsQ0FBQyxDQUFBO0lBRUYscUNBQXFDO0lBQ3JDLGdEQUFnRDtJQUVoRCxrREFBa0Q7SUFDbEQsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixPQUFPO0lBQ1AsS0FBSztJQUVMLG9EQUFvRDtJQUNwRCwrRkFBK0Y7SUFFL0YsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7QUFDdkIsQ0FBQyJ9