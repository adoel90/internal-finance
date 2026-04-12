"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
exports.GET = GET;
const utils_1 = require("@medusajs/framework/utils");
const create_domain_1 = require("../../../workflows/create-domain");
async function POST(req, res) {
    const customerId = req.auth_context?.actor_id;
    //TODO: mesti check ini
    console.log("Customer ID:", customerId);
    console.log("Request Body:", req.body);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2RvbWFpbnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxvQkFxQkM7QUFjRCxrQkFrREM7QUF6RkQscURBQXFFO0FBQ3JFLG9FQUF1RTtBQUdoRSxLQUFLLFVBQVUsSUFBSSxDQUN4QixHQUErQixFQUMvQixHQUFtQjtJQUVuQixNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQTtJQUU3Qyx1QkFBdUI7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNoQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQUVELE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUEsb0NBQW9CLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMzRCxLQUFLLEVBQUU7WUFDTCxHQUFJLEdBQUcsQ0FBQyxJQUFZO1lBQ3BCLFdBQVcsRUFBRSxVQUFVO1NBQ3hCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO0FBQzlCLENBQUM7QUFHRCw2QkFBNkI7QUFDN0Isd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixNQUFNO0FBQ04sc0VBQXNFO0FBQ3RFLDREQUE0RDtBQUU1RCwwQkFBMEI7QUFDMUIsSUFBSTtBQUdHLEtBQUssVUFBVSxHQUFHLENBQ3ZCLEdBQStCLEVBQy9CLEdBQW1CO0lBRW5CLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDO0lBRTlDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNoQixPQUFPLEdBQUc7YUFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDNUMsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFO1lBQ04sSUFBSTtZQUNKLE9BQU87WUFDUCxXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQiw0QkFBNEI7WUFDNUIsb0NBQW9DO1NBQ3JDO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLFVBQVU7U0FDZjtLQUNGLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUN6QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBUSxDQUFDO0lBQ3JDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDNUIsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELHVFQUF1RTtJQUN2RSxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckQsR0FBRyxNQUFNO1FBQ1QsUUFBUSxFQUFFO1lBQ1IsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFO1lBQ2YsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO1NBQ3RCO0tBQ0YsQ0FBQyxDQUFDLENBQUM7SUFFSixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDIn0=