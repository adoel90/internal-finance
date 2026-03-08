"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
class RegisteredDomainEventService extends utils_1.AbstractEventBusModuleService {
    constructor() {
        // @ts-ignore
        super(...arguments);
    }
    async emit(data, options) {
        const events = Array.isArray(data) ? data : [data];
        for (const event of events) {
            console.log(`Received the event ${event.name} with data ${event.data}`);
            // TODO push the event somewhere - maybe Kafka, Redis, or even a database table - so that it can be processed by a subscriber later on
        }
    }
    async releaseGroupedEvents(eventGroupId) {
        throw new Error("Method not implemented.");
    }
    async clearGroupedEvents(eventGroupId) {
        throw new Error("Method not implemented.");
    }
}
exports.default = RegisteredDomainEventService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3JlZ2lzdGVyZWQtZG9tYWluLWV2ZW50L3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBeUU7QUFHekUsTUFBTSw0QkFBNkIsU0FBUSxxQ0FBNkI7SUFFcEU7UUFDSSxhQUFhO1FBQ2IsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUVILEtBQUssQ0FBQyxJQUFJLENBQUksSUFBK0IsRUFBRSxPQUFnQztRQUc1RSxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFbkQsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUUzQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixLQUFLLENBQUMsSUFBSSxjQUFjLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1lBRXZFLHNJQUFzSTtRQUN4SSxDQUFDO0lBQ0gsQ0FBQztJQUNELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxZQUFvQjtRQUM3QyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUNELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxZQUFvQjtRQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUE7SUFDNUMsQ0FBQztDQUVGO0FBRUQsa0JBQWUsNEJBQTRCLENBQUEifQ==