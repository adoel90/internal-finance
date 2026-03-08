import { AbstractEventBusModuleService } from "@medusajs/framework/utils";
import { Message } from "@medusajs/types";
declare class RegisteredDomainEventService extends AbstractEventBusModuleService {
    constructor();
    emit<T>(data: Message<T> | Message<T>[], options: Record<string, unknown>): Promise<void>;
    releaseGroupedEvents(eventGroupId: string): Promise<void>;
    clearGroupedEvents(eventGroupId: string): Promise<void>;
}
export default RegisteredDomainEventService;
