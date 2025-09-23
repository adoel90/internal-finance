import RoleModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const ROLE_MODULE = "role"

export default Module(ROLE_MODULE, {
  service: RoleModuleService,
})