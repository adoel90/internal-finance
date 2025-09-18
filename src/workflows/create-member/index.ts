import { 
    createWorkflow, 
    createStep,
    StepResponse,
    WorkflowResponse,
  } from "@medusajs/framework/workflows-sdk"
  import { 
    setAuthAppMetadataStep,
  } from "@medusajs/medusa/core-flows"
  import MemberModuleService from "../../modules/member/service"
  
  type CreateMemberWorkflowInput = {
    member: {
      name: string      
      email: string
      role_id: string
    }
    authIdentityId: string  
  }
  
  const createMemberStep = createStep(
    "create-member-step",
    async ({ 
      member: memberData,
    }: Pick<CreateMemberWorkflowInput, "member">, 
    { container }) => {
      const memberModuleService: MemberModuleService = 
        container.resolve("member")
  
      const member = await memberModuleService.createMembers(
        memberData
      )
  
      return new StepResponse(member)
    }
  )
  
  const createMemberWorkflow = createWorkflow(
    "create-member",
    function (input: CreateMemberWorkflowInput) {
      const member = createMemberStep({
        member: input.member,
      })
  
      setAuthAppMetadataStep({
        authIdentityId: input.authIdentityId,
        actorType: "member",
        value: member.id,
      })
  
      return new WorkflowResponse(member)
    }
  )
  
  export default createMemberWorkflow