import {
    createStep,
    StepResponse,
  } from "@medusajs/framework/workflows-sdk"

import { ROLE_MODULE } from "src/modules/role"
import RoleModuleService from "src/modules/role/service"
import { WorkflowResponse, createWorkflow, WorkflowData } from '@medusajs/framework/workflows-sdk'


type RoleInput = {
    name: string  
  } 


export const createRoleStep1 = createStep(
    "step1-create-role",
    async (input: RoleInput, { container }) => {
        const roleModuleService: RoleModuleService = container.resolve(
            ROLE_MODULE
        )
    
        const role = await roleModuleService.createRoles(input);
        return new StepResponse(role, role.id)
    },
    //Rollback when error or failed
    async (id: string, { container }) => {
        const roleModuleService: RoleModuleService = container.resolve(
            ROLE_MODULE
        )
        await roleModuleService.deleteRoles(id);
    }
)


export const createRoleWorkflow = createWorkflow(
    "create-role",
    (input: WorkflowData<RoleInput>) => {
        // Step 1: Create role
        const role = createRoleStep1(input);

        return new WorkflowResponse(role);
    }
)

export default createRoleWorkflow;

