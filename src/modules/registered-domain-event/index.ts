
import RegisteredDomainEventService from "./service"
import { Module } from "@medusajs/framework/utils"

export default Module("registered_domain_event", {
  service: RegisteredDomainEventService,
})