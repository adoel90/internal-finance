import ActorModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const ACTOR_MODULE = "actor"

export default Module(ACTOR_MODULE, {
  service: ActorModuleService,
})