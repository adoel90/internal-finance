import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
export default function handleRegisteredDomainEvent({ event: { data }, container, }: SubscriberArgs<any>): Promise<void>;
export declare const config: SubscriberConfig;
