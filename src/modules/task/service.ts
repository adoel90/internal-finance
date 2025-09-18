import { MedusaService } from "@medusajs/framework/utils"
import Task from "./models/task"
import Status from "./models/status"

class TaskModuleService extends MedusaService({
    Task,
    Status
}){
    // Base MedusaService already provides createTasks and createStatus methods
}

export default TaskModuleService

