import { 
    createWorkflow, 
    createStep,
    StepResponse,
    WorkflowResponse,
  } from "@medusajs/framework/workflows-sdk"
  import { 
    setAuthAppMetadataStep,
  } from "@medusajs/medusa/core-flows"
  import StaffModuleService from "../../modules/staff/service"
  
  type CreateStaffWorkflowInput = {
    staff: {
      first_name?: string
      last_name?: string
      email: string
    }
    authIdentityId: string  
  }
  
  const createStaffStep = createStep(
    "create-staff-step",
    async ({ 
      staff: staffData,
    }: Pick<CreateStaffWorkflowInput, "staff">, 
    { container }) => {
      const staffModuleService: StaffModuleService = 
        container.resolve("staff")
  
      const staff = await staffModuleService.createStaff(
        staffData
      )
  
      return new StepResponse(staff)
    }
  )
  
  const createStaffWorkflow = createWorkflow(
    "create-staff",
    function (input: CreateStaffWorkflowInput) {
      const staff = createStaffStep({
        staff: input.staff,
      })
  
      setAuthAppMetadataStep({
        authIdentityId: input.authIdentityId,
        actorType: "staff",
        value: staff.id,
      })
  
      return new WorkflowResponse(staff)
    }
  )
  
  export default createStaffWorkflow