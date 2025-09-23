import { model } from "@medusajs/framework/utils"

const Task = model.define("task", {
  id: model.id().primaryKey(),
  title: model.text(),  
  description: model.text(),
  report: model.text(),
  status_id: model.text(),
  creator_id: model.text(),
  assignee_id: model.text(),
})

export default Task