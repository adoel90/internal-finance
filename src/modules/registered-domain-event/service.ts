import { AbstractEventBusModuleService } from "@medusajs/framework/utils"
import { Message } from "@medusajs/types"

class RegisteredDomainEventService extends AbstractEventBusModuleService {

    constructor() {
        // @ts-ignore
        super(...arguments)    
    }

  async emit<T>(data: Message<T> | Message<T>[], options: Record<string, unknown>): Promise<void> {


     const events = Array.isArray(data) ? data : [data]

    for (const event of events) {

      console.log(`Received the event ${event.name} with data ${event.data}`)

      // TODO push the event somewhere - maybe Kafka, Redis, or even a database table - so that it can be processed by a subscriber later on
    }
  }
  async releaseGroupedEvents(eventGroupId: string): Promise<void> {
    throw new Error("Method not implemented.")
  }
  async clearGroupedEvents(eventGroupId: string): Promise<void> {
    throw new Error("Method not implemented.")
  }
  
}

export default RegisteredDomainEventService


