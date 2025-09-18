import TaskModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const TASK_MODULE = "task"

export default Module(TASK_MODULE, {
  service: TaskModuleService,
})