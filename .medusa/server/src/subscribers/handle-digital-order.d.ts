import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
declare function digitalProductOrderCreatedHandler({ event: { data }, container, }: SubscriberArgs<{
    id: string;
}>): Promise<void>;
export default digitalProductOrderCreatedHandler;
export declare const config: SubscriberConfig;
