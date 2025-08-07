"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const step1 = (0, workflows_sdk_1.createStep)("step-1", async () => {
    return new workflows_sdk_1.StepResponse(`Hello from step one!`);
});
const step2 = (0, workflows_sdk_1.createStep)("step-2", async ({ name }) => {
    return new workflows_sdk_1.StepResponse(`Hello ${name} from step two!`);
});
const helloWorldWorkflow = (0, workflows_sdk_1.createWorkflow)("hello-world", function (input) {
    const str1 = step1();
    // to pass input
    const str2 = step2(input);
    return new workflows_sdk_1.WorkflowResponse({
        message: str2,
    });
});
exports.default = helloWorldWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8td29ybGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2hlbGxvLXdvcmxkL2hlbGxvLXdvcmxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUVBTTBDO0FBRTFDLE1BQU0sS0FBSyxHQUFHLElBQUEsMEJBQVUsRUFDdEIsUUFBUSxFQUNSLEtBQUssSUFBSSxFQUFFO0lBQ1QsT0FBTyxJQUFJLDRCQUFZLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtBQUNqRCxDQUFDLENBQ0YsQ0FBQTtBQU9ELE1BQU0sS0FBSyxHQUFHLElBQUEsMEJBQVUsRUFDcEIsUUFBUSxFQUNSLEtBQUssRUFBRSxFQUFFLElBQUksRUFBaUIsRUFBRSxFQUFFO0lBQzlCLE9BQU8sSUFBSSw0QkFBWSxDQUFDLFNBQVMsSUFBSSxpQkFBaUIsQ0FBQyxDQUFBO0FBQzNELENBQUMsQ0FDSixDQUFBO0FBRUQsTUFBTSxrQkFBa0IsR0FBRyxJQUFBLDhCQUFjLEVBQ3JDLGFBQWEsRUFDYixVQUFVLEtBQW9CO0lBQzVCLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFBRSxDQUFBO0lBQ3BCLGdCQUFnQjtJQUNoQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFekIsT0FBTyxJQUFJLGdDQUFnQixDQUFDO1FBQzFCLE9BQU8sRUFBRSxJQUFJO0tBQ2QsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUNGLENBQUE7QUFFRCxrQkFBZSxrQkFBa0IsQ0FBQyJ9