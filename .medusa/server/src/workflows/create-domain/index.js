"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDomainWorkflow = exports.linkDomainToOrderStep = exports.linkDomainToVariantStep = exports.linkDomainToProductStep = exports.linkDomainToCustomerStep = exports.createDomainStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const domain_1 = require("../../modules/domain");
const utils_1 = require("@medusajs/framework/utils");
exports.createDomainStep = (0, workflows_sdk_1.createStep)("create-domain-step", async (input, { container }) => {
    const domainModuleService = container.resolve(domain_1.DOMAIN_MODULE);
    const domain = await domainModuleService.createDomains({
        name: input.name,
        slug: input.slug,
        is_active: input.is_active,
        is_premium: input.is_premium,
        metadata: input.metadata,
    });
    return new workflows_sdk_1.StepResponse(domain, domain.id);
}, async (id, { container }) => {
    const domainModuleService = container.resolve(domain_1.DOMAIN_MODULE);
    await domainModuleService.deleteDomains(id);
});
exports.linkDomainToCustomerStep = (0, workflows_sdk_1.createStep)("link-domain-to-customer-step", async (input, { container }) => {
    if (!input.customer_id) {
        return new workflows_sdk_1.StepResponse(undefined, null);
    }
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    await remoteLink.create({
        [domain_1.DOMAIN_MODULE]: {
            domain_id: input.domain_id,
        },
        [utils_1.Modules.CUSTOMER]: {
            customer_id: input.customer_id,
        },
    });
    return new workflows_sdk_1.StepResponse(undefined, input);
}, async (input, { container }) => {
    if (!input)
        return;
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    await remoteLink.dismiss({
        [domain_1.DOMAIN_MODULE]: {
            domain_id: input.domain_id,
        },
        [utils_1.Modules.CUSTOMER]: {
            customer_id: input.customer_id,
        },
    });
});
exports.linkDomainToProductStep = (0, workflows_sdk_1.createStep)("link-domain-to-product-step", async (input, { container }) => {
    if (!input.product_id) {
        return new workflows_sdk_1.StepResponse(undefined, null);
    }
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    await remoteLink.create({
        [domain_1.DOMAIN_MODULE]: {
            domain_id: input.domain_id,
        },
        [utils_1.Modules.PRODUCT]: {
            product_id: input.product_id,
        },
    });
    return new workflows_sdk_1.StepResponse(undefined, input);
}, async (input, { container }) => {
    if (!input)
        return;
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    await remoteLink.dismiss({
        [domain_1.DOMAIN_MODULE]: {
            domain_id: input.domain_id,
        },
        [utils_1.Modules.PRODUCT]: {
            product_id: input.product_id,
        },
    });
});
exports.linkDomainToVariantStep = (0, workflows_sdk_1.createStep)("link-domain-to-variant-step", async (input, { container }) => {
    if (!input.variant_id) {
        return new workflows_sdk_1.StepResponse(undefined, null);
    }
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    await remoteLink.create({
        [domain_1.DOMAIN_MODULE]: {
            domain_id: input.domain_id,
        },
        [utils_1.Modules.PRODUCT]: {
            variant_id: input.variant_id,
        },
    });
    return new workflows_sdk_1.StepResponse(undefined, input);
}, async (input, { container }) => {
    if (!input)
        return;
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    await remoteLink.dismiss({
        [domain_1.DOMAIN_MODULE]: {
            domain_id: input.domain_id,
        },
        [utils_1.Modules.PRODUCT]: {
            variant_id: input.variant_id,
        },
    });
});
exports.linkDomainToOrderStep = (0, workflows_sdk_1.createStep)("link-domain-to-order-step", async (input, { container }) => {
    if (!input.order_id) {
        return new workflows_sdk_1.StepResponse(undefined, null);
    }
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    await remoteLink.create({
        [domain_1.DOMAIN_MODULE]: {
            domain_id: input.domain_id,
        },
        [utils_1.Modules.ORDER]: {
            order_id: input.order_id,
        },
    });
    return new workflows_sdk_1.StepResponse(undefined, input);
}, async (input, { container }) => {
    if (!input)
        return;
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    await remoteLink.dismiss({
        [domain_1.DOMAIN_MODULE]: {
            domain_id: input.domain_id,
        },
        [utils_1.Modules.ORDER]: {
            order_id: input.order_id,
        },
    });
});
exports.createDomainWorkflow = (0, workflows_sdk_1.createWorkflow)("create-domain", (input) => {
    const domain = (0, exports.createDomainStep)(input);
    (0, exports.linkDomainToCustomerStep)({
        domain_id: domain.id,
        customer_id: input.customer_id
    });
    (0, exports.linkDomainToProductStep)({
        domain_id: domain.id,
        product_id: input.product_id
    });
    (0, exports.linkDomainToVariantStep)({
        domain_id: domain.id,
        variant_id: input.variant_id
    });
    (0, exports.linkDomainToOrderStep)({
        domain_id: domain.id,
        order_id: input.order_id
    });
    return new workflows_sdk_1.WorkflowResponse(domain);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1kb21haW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBSzBDO0FBQzFDLGlEQUFvRDtBQUNwRCxxREFBOEU7QUFjakUsUUFBQSxnQkFBZ0IsR0FBRyxJQUFBLDBCQUFVLEVBQ3hDLG9CQUFvQixFQUNwQixLQUFLLEVBQUUsS0FBd0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDaEQsTUFBTSxtQkFBbUIsR0FBUSxTQUFTLENBQUMsT0FBTyxDQUFDLHNCQUFhLENBQUMsQ0FBQTtJQUNqRSxNQUFNLE1BQU0sR0FBRyxNQUFNLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztRQUNyRCxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7UUFDaEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1FBQ2hCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztRQUMxQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7UUFDNUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO0tBQ3pCLENBQUMsQ0FBQTtJQUNGLE9BQU8sSUFBSSw0QkFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDNUMsQ0FBQyxFQUVELEtBQUssRUFBRSxFQUFVLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ2xDLE1BQU0sbUJBQW1CLEdBQVEsU0FBUyxDQUFDLE9BQU8sQ0FBQyxzQkFBYSxDQUFDLENBQUE7SUFDakUsTUFBTSxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDN0MsQ0FBQyxDQUNGLENBQUE7QUFFWSxRQUFBLHdCQUF3QixHQUFHLElBQUEsMEJBQVUsRUFDaEQsOEJBQThCLEVBQzlCLEtBQUssRUFBRSxLQUFrRCxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFB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