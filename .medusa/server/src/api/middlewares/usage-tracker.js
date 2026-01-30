"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackUsage = trackUsage;
function trackUsage() {
    return async (req, res, next) => {
        try {
            const billingModuleService = req.scope.resolve("billingModuleService");
            // Assuming req.user contains the authenticated user's data and has an id property.
            // This might need adjustment based on the actual structure of the user object.
            const userId = req.user?.id;
            if (userId) {
                const apiName = req.path; // Or a more specific name if available
                const today = new Date();
                const startOfDay = new Date(today);
                startOfDay.setHours(0, 0, 0, 0);
                const endOfDay = new Date(today);
                endOfDay.setHours(23, 59, 59, 999);
                // Find if there is an existing usage entry for today
                const existingUsage = await billingModuleService.listApiUsages({
                    user_id: userId,
                    api_name: apiName,
                    date: { gte: startOfDay, lte: endOfDay }
                });
                if (existingUsage.length > 0) {
                    // Increment request_count
                    const usage = existingUsage[0];
                    await billingModuleService.updateApiUsages({ id: usage.id }, {
                        request_count: usage.request_count + 1,
                    });
                }
                else {
                    // Create new usage entry
                    await billingModuleService.createApiUsages({
                        user_id: userId,
                        api_name: apiName,
                        date: new Date(),
                        request_count: 1,
                        success_count: 0, // Success/failed counts would need more logic, maybe in the response middleware
                        failed_count: 0
                    });
                }
            }
        }
        catch (error) {
            // Log the error but don't block the request.
            console.error("Error in usage tracking middleware:", error);
        }
        next();
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNhZ2UtdHJhY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvdXNhZ2UtdHJhY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLGdDQXFEQztBQXJERCxTQUFnQixVQUFVO0lBQ3hCLE9BQU8sS0FBSyxFQUFFLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxJQUF3QixFQUFFLEVBQUU7UUFDakYsSUFBSSxDQUFDO1lBQ0gsTUFBTSxvQkFBb0IsR0FBeUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUU3RixtRkFBbUY7WUFDbkYsK0VBQStFO1lBQy9FLE1BQU0sTUFBTSxHQUFJLEdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBRXJDLElBQUksTUFBTSxFQUFFLENBQUM7Z0JBQ1gsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLHVDQUF1QztnQkFDakUsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDekIsTUFBTSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25DLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRWhDLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUVuQyxxREFBcUQ7Z0JBQ3JELE1BQU0sYUFBYSxHQUFHLE1BQU0sb0JBQW9CLENBQUMsYUFBYSxDQUFDO29CQUMzRCxPQUFPLEVBQUUsTUFBTTtvQkFDZixRQUFRLEVBQUUsT0FBTztvQkFDakIsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO2lCQUMzQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUM3QiwwQkFBMEI7b0JBQzFCLE1BQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0IsTUFBTSxvQkFBb0IsQ0FBQyxlQUFlLENBQ3hDLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFDaEI7d0JBQ0UsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhLEdBQUcsQ0FBQztxQkFDdkMsQ0FDRixDQUFDO2dCQUNKLENBQUM7cUJBQU0sQ0FBQztvQkFDTix5QkFBeUI7b0JBQ3pCLE1BQU0sb0JBQW9CLENBQUMsZUFBZSxDQUFDO3dCQUN6QyxPQUFPLEVBQUUsTUFBTTt3QkFDZixRQUFRLEVBQUUsT0FBTzt3QkFDakIsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO3dCQUNoQixhQUFhLEVBQUUsQ0FBQzt3QkFDaEIsYUFBYSxFQUFFLENBQUMsRUFBRSxnRkFBZ0Y7d0JBQ2xHLFlBQVksRUFBRSxDQUFDO3FCQUNoQixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNmLDZDQUE2QztZQUM3QyxPQUFPLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFFRCxJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQztBQUNKLENBQUMifQ==