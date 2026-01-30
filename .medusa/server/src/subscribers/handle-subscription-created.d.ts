import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
declare function handleSubscriptionCreated({ event: { data }, container, }: SubscriberArgs<any>): Promise<void>;
export default handleSubscriptionCreated;
export declare const config: SubscriberConfig;
