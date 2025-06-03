import { MedusaService } from "@medusajs/framework/utils"
import Post from "./models/post"

class BlogModuleService extends MedusaService({
  Post,
}){
  // TODO implement custom methods

  async getMessage(): Promise<string>{

    return "Hello POST"
  }
}

export default BlogModuleService