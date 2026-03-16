"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
async function default_1({ container }) {
    const query = container.resolve("query");
    const { data: domains } = await query.graph({
        entity: "domain",
        fields: [
            "id",
            "name",
            "customer.id",
            "customer.email"
        ]
    });
    console.log("--- All Domains ---");
    console.log(JSON.stringify(domains, null, 2));
    const { data: customers } = await query.graph({
        entity: "customer",
        fields: [
            "id",
            "email",
            "domain.*",
            "domain.product.id",
            "domain.product_variant.id",
            "domain.order.id",
        ],
    });
    console.log("--- All Customers with Domains ---");
    console.log(JSON.stringify(customers.filter(c => c.domain && c.domain.length > 0), null, 2));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1kb21haW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NjcmlwdHMvdGVzdC1kb21haW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsNEJBNkJDO0FBN0JjLEtBQUssb0JBQVcsRUFBRSxTQUFTLEVBQVk7SUFDcEQsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUV4QyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQyxNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUU7WUFDTixJQUFJO1lBQ0osTUFBTTtZQUNOLGFBQWE7WUFDYixnQkFBZ0I7U0FDakI7S0FDRixDQUFDLENBQUE7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUU3QyxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM1QyxNQUFNLEVBQUUsVUFBVTtRQUNsQixNQUFNLEVBQUU7WUFDTixJQUFJO1lBQ0osT0FBTztZQUNQLFVBQVU7WUFDVixtQkFBbUI7WUFDbkIsMkJBQTJCO1lBQzNCLGlCQUFpQjtTQUNsQjtLQUNGLENBQUMsQ0FBQTtJQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQTtJQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDOUYsQ0FBQyJ9