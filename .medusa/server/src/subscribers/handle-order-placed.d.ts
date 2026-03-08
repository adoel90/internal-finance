import { SubscriberArgs, type SubscriberConfig } from "@medusajs/framework";
export default function orderPlacedHandler({ event: { data }, container, }: SubscriberArgs<{
    id: string;
}>): Promise<void>;
export declare const config: SubscriberConfig;
