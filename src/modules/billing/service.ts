import { MedusaService } from "@medusajs/framework/utils"
import BillingCompany from "./models/company"
import ApiUsage from "./models/api-usage"
import Subscription from "./models/subscription"
import Plan from "./models/plan"


class BillingModuleService extends MedusaService({
    BillingCompany,
    ApiUsage,
    Subscription,
    Plan
}){

    
}   

export default BillingModuleService