import DomainModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const DOMAIN_MODULE = "domain"

export default Module(DOMAIN_MODULE, {
    service: DomainModuleService
})