"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
async function default_1({ container }) {
    const query = container.resolve("query");
    console.log("--- Filter customers by customer_id ---");
    try {
        const { data: customers } = await query.graph({
            entity: "customer",
            fields: ["id", "email", "domains.*"],
            filters: {
                id: "cus_01KMPNRH82BVHJ856NVN6RSCDC"
            }
        });
        console.log("Success with customer.domains:", customers.length > 0 ? customers[0].domains?.length : 0);
        console.log(JSON.stringify(customers, null, 2));
    }
    catch (e) {
        console.error("Failed with customer.domains:", e.message);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1kb21haW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NjcmlwdHMvdGVzdC1kb21haW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsNEJBaUJDO0FBakJjLEtBQUssb0JBQVcsRUFBRSxTQUFTLEVBQVk7SUFDcEQsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUE7SUFDdEQsSUFBSSxDQUFDO1FBQ0gsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDNUMsTUFBTSxFQUFFLFVBQVU7WUFDbEIsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUM7WUFDcEMsT0FBTyxFQUFFO2dCQUNQLEVBQUUsRUFBRSxnQ0FBZ0M7YUFDckM7U0FDRixDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzNELENBQUM7QUFDSCxDQUFDIn0=