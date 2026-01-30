import ManagerModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const MANAGER_MODULE = "manager"

export default Module(MANAGER_MODULE, {
    service: ManagerModuleService
})