import type {
    SubscriberArgs,
    SubscriberConfig,
  } from "@medusajs/framework"
  
  async function handleSubscriptionCreated({
    event: { data },
    container,
  }: SubscriberArgs<any>) { // Using 'any' for data for now, assuming 'id' and 'current_period_end' are present
    const jobSchedulerService = container.resolve("jobSchedulerService") as {
      create: (name: string, payload: Record<string, unknown>, cron?: string) => Promise<unknown>
    }
    
    // The specifics of scheduling a job depend on the Job Scheduler module/plugin in use.
    // This is a conceptual implementation. You might need to adjust the cron string
    // or the scheduling options based on your setup.
    // For example, to run a job at the end of the current period:
    const cron = `${data.current_period_end.getUTCMinutes()} ${data.current_period_end.getUTCHours()} ${data.current_period_end.getUTCDate()} ${data.current_period_end.getUTCMonth() + 1} *`

    await jobSchedulerService.create("handle-recurring-billing", {
      subscriptionId: data.id,
    }, 
    cron
    )
  }
  
  export default handleSubscriptionCreated
  
  export const config: SubscriberConfig = {
    event: "subscription.created",
  }