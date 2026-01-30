import { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
export default function handleProductDeleted({ event: { data }, container, }: SubscriberArgs<{
    id: string;
}>): Promise<void>;
export declare const config: SubscriberConfig;
