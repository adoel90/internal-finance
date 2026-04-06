"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
async function default_1({ container }) {
    const query = container.resolve("query");
    const collectionId = "pcol_01K1F1H84FHGNSYHNK7SG1B7X1";
    const regionId = "reg_01KKXAZYDD9635DZANW5KHV3B6";
    console.log(`Checking products for collection: ${collectionId}`);
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
    });
    console.log(`Found ${products.length} products in this collection.`);
    if (products.length > 0) {
        console.log(JSON.stringify(products, null, 2));
    }
    else {
        console.log("No products found in the database for this collection.");
    }
    console.log(`\nChecking Region: ${regionId}`);
    try {
        const { data: regions } = await query.graph({
            entity: "region",
            fields: ["id", "name", "currency_code", "countries.iso_2"],
            filters: {
                id: regionId
            }
        });
        console.log(`Found region:`, JSON.stringify(regions, null, 2));
    }
    catch (e) {
        console.error("Error querying region:", e.message);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1wcm9kdWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zY3JpcHRzL3Rlc3QtcHJvZHVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw0QkE2Q0M7QUE3Q2MsS0FBSyxvQkFBVyxFQUFFLFNBQVMsRUFBWTtJQUNwRCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRXhDLE1BQU0sWUFBWSxHQUFHLGlDQUFpQyxDQUFBO0lBQ3RELE1BQU0sUUFBUSxHQUFHLGdDQUFnQyxDQUFBO0lBRWpELE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLFlBQVksRUFBRSxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDM0MsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFO1lBQ04sSUFBSTtZQUNKLE9BQU87WUFDUCxRQUFRO1lBQ1IsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsK0JBQStCO1lBQy9CLHdCQUF3QjtTQUN6QjtRQUNELE9BQU8sRUFBRTtZQUNQLGFBQWEsRUFBRSxZQUFZO1NBQzVCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLFFBQVEsQ0FBQyxNQUFNLCtCQUErQixDQUFDLENBQUE7SUFDcEUsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHdEQUF3RCxDQUFDLENBQUE7SUFDdkUsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLFFBQVEsRUFBRSxDQUFDLENBQUE7SUFDN0MsSUFBSSxDQUFDO1FBQ0gsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDMUMsTUFBTSxFQUFFLFFBQVE7WUFDaEIsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsaUJBQWlCLENBQUM7WUFDMUQsT0FBTyxFQUFFO2dCQUNQLEVBQUUsRUFBRSxRQUFRO2FBQ2I7U0FDRixDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNoRSxDQUFDO0lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3BELENBQUM7QUFDSCxDQUFDIn0=