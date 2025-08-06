import ActorModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const ACTOR_MODULE = "manager"

export default Module(ACTOR_MODULE, {
  service: ActorModuleService,
})