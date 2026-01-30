import ScrapeModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const SCRAPE_MODULE = "scrape"

export default Module(SCRAPE_MODULE, {
    service: ScrapeModuleService
})
