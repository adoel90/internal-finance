import {
    createStep,
    StepResponse,
  } from "@medusajs/framework/workflows-sdk"


import { USER_MODULE } from "src/modules/user"
import UserModuleService from "src/modules/user/service"
// import type { IUserModuleService } from "src/modules/user/types"
import { WorkflowResponse, createWorkflow, WorkflowData } from '@medusajs/framework/workflows-sdk'

import { 
    setAuthAppMetadataStep,
  } from "@medusajs/medusa/core-flows"

// type UserInput = {
//     name: string
//     email: string 
//     role_id: string
// } 

type UserInput = {
    user: {
        name: string
        email: string 
        role_id: string
    }
    authIdentityId: string  
}


const validRoleIds = ["01K4P9WNZKGMJ73BA6CKF8T0YP", "01K4PAPFXW6ANQE63VAFSH3C2F"] // TODO: get list of valid role IDs from database or config

function isValidRoleId(roleId: string): boolean {
  return validRoleIds.includes(roleId)
}

export const createUserStep1 = createStep(
    "step1-create-user",
    async (
        // input: UserInput, 
        {  user: input }: Pick<UserInput, "user">,
        { container }) => {
        const userModuleService = container.resolve<UserModuleService>(
            USER_MODULE
        )

        if (!isValidRoleId(input.role_id)) {
            throw new Error("Invalid role_id")
        }

        const user = await userModuleService.createUsers(input);
        return new StepResponse(user, user.id)
    },
    //Rollback when error or failed
    async (id: string, { container }) => {
        const userModuleService = container.resolve<UserModuleService>(
            USER_MODULE
        )
        await userModuleService.deleteUsers(id);
    }
)


export const createUserWorkflow = createWorkflow(
    "create-user",
    (input: WorkflowData<UserInput>) => {
        // Step 1: Create user with role_id
        const user = createUserStep1(input);

          
        setAuthAppMetadataStep({
            authIdentityId: input.authIdentityId,
            actorType: "user",
            value: user.id,
        })

        return new WorkflowResponse(user);
    }
)

export default createUserWorkflow;

