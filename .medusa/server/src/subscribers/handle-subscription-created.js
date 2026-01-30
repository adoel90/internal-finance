"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
async function handleSubscriptionCreated({ event: { data }, container, }) {
    const jobSchedulerService = container.resolve("jobSchedulerService");
    // The specifics of scheduling a job depend on the Job Scheduler module/plugin in use.
    // This is a conceptual implementation. You might need to adjust the cron string
    // or the scheduling options based on your setup.
    // For example, to run a job at the end of the current period:
    const cron = `${data.current_period_end.getUTCMinutes()} ${data.current_period_end.getUTCHours()} ${data.current_period_end.getUTCDate()} ${data.current_period_end.getUTCMonth() + 1} *`;
    await jobSchedulerService.create("handle-recurring-billing", {
        subscriptionId: data.id,
    }, cron);
}
exports.default = handleSubscriptionCreated;
exports.config = {
    event: "subscription.created",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLXN1YnNjcmlwdGlvbi1jcmVhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N1YnNjcmliZXJzL2hhbmRsZS1zdWJzY3JpcHRpb24tY3JlYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFLRSxLQUFLLFVBQVUseUJBQXlCLENBQUMsRUFDdkMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQ2YsU0FBUyxHQUNXO0lBQ3BCLE1BQU0sbUJBQW1CLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FFbEUsQ0FBQTtJQUVELHNGQUFzRjtJQUN0RixnRkFBZ0Y7SUFDaEYsaURBQWlEO0lBQ2pELDhEQUE4RDtJQUM5RCxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQTtJQUV6TCxNQUFNLG1CQUFtQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsRUFBRTtRQUMzRCxjQUFjLEVBQUUsSUFBSSxDQUFDLEVBQUU7S0FDeEIsRUFDRCxJQUFJLENBQ0gsQ0FBQTtBQUNILENBQUM7QUFFRCxrQkFBZSx5QkFBeUIsQ0FBQTtBQUUzQixRQUFBLE1BQU0sR0FBcUI7SUFDdEMsS0FBSyxFQUFFLHNCQUFzQjtDQUM5QixDQUFBIn0=