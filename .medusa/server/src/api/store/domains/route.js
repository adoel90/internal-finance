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
        return res
            .status(401)
            .json({ message: "Route Unauthorized: missing actor_id" });
    }
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: customers } = await query.graph({
        entity: "customer",
        fields: [
            "id",
            "email",
            "domains.*",
            "domains.order.id",
            "domains.product.id",
            "domains.product_variant.id",
            "domains.product_variant.product_id"
        ],
        filters: {
            id: customerId,
        },
    });
    if (!customers || customers.length === 0) {
        return res.json({ domains: [] });
    }
    const customer = customers[0];
    let domains = customer.domains || [];
    if (!Array.isArray(domains)) {
        domains = [domains];
    }
    // Format domains to attach customer data back if frontend relies on it
    const formattedDomains = domains.map((domain) => ({
        ...domain,
        customer: {
            id: customer.id,
            email: customer.email
        }
    }));
    res.json({ domains: formattedDomains });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2RvbWFpbnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxvQkFrQkM7QUFjRCxrQkFrREM7QUF0RkQscURBQXFFO0FBQ3JFLG9FQUF1RTtBQUdoRSxLQUFLLFVBQVUsSUFBSSxDQUN4QixHQUErQixFQUMvQixHQUFtQjtJQUVuQixNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQTtJQUU3QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFFRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLG9DQUFvQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDM0QsS0FBSyxFQUFFO1lBQ0wsR0FBSSxHQUFHLENBQUMsSUFBWTtZQUNwQixXQUFXLEVBQUUsVUFBVTtTQUN4QjtLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtBQUM5QixDQUFDO0FBR0QsNkJBQTZCO0FBQzdCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsTUFBTTtBQUNOLHNFQUFzRTtBQUN0RSw0REFBNEQ7QUFFNUQsMEJBQTBCO0FBQzFCLElBQUk7QUFHRyxLQUFLLFVBQVUsR0FBRyxDQUN2QixHQUErQixFQUMvQixHQUFtQjtJQUVuQixNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQztJQUU5QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEIsT0FBTyxHQUFHO2FBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNYLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzVDLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRTtZQUNOLElBQUk7WUFDSixPQUFPO1lBQ1AsV0FBVztZQUNYLGtCQUFrQjtZQUNsQixvQkFBb0I7WUFDcEIsNEJBQTRCO1lBQzVCLG9DQUFvQztTQUNyQztRQUNELE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxVQUFVO1NBQ2Y7S0FDRixDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDekMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQVEsQ0FBQztJQUNyQyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzVCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELEdBQUcsTUFBTTtRQUNULFFBQVEsRUFBRTtZQUNSLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRTtZQUNmLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztTQUN0QjtLQUNGLENBQUMsQ0FBQyxDQUFDO0lBRUosR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQyJ9