"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDomainWorkflow = exports.linkDomainToOrderStep = exports.linkDomainToVariantStep = exports.linkDomainToProductStep = exports.linkDomainToCustomerStep = exports.createDomainStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const domain_1 = require("../../modules/domain");
const utils_1 = require("@medusajs/framework/utils");
exports.createDomainStep = (0, workflows_sdk_1.createStep)("create-domain-step", async (input, { container }) => {
    const domainModuleService = container.resolve(domain_1.DOMAIN_MODULE);
    const existingDomains = await domainModuleService.listDomains({
        name: input.name
    });
    if (existingDomains && existingDomains.length > 0) {
        throw new Error(`Domain ${input.name} is already registered.`);
    }
    const domain = await domainModuleService.createDomains({
        name: input.name,
        slug: input.slug,
        is_active: input.is_active,
        is_premium: input.is_premium,
        metadata: input.metadata || {},
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
            product_variant_id: input.variant_id,
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
            product_variant_id: input.variant_id,
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
    (0, exports.linkDomainToCustomerStep)((0, workflows_sdk_1.transform)({ domain, input }, (data) => ({
        domain_id: data.domain.id,
        customer_id: data.input.customer_id
    })));
    (0, exports.linkDomainToProductStep)((0, workflows_sdk_1.transform)({ domain, input }, (data) => ({
        domain_id: data.domain.id,
        product_id: data.input.product_id
    })));
    (0, exports.linkDomainToVariantStep)((0, workflows_sdk_1.transform)({ domain, input }, (data) => ({
        domain_id: data.domain.id,
        variant_id: data.input.variant_id
    })));
    (0, exports.linkDomainToOrderStep)((0, workflows_sdk_1.transform)({ domain, input }, (data) => ({
        domain_id: data.domain.id,
        order_id: data.input.order_id
    })));
    return new workflows_sdk_1.WorkflowResponse(domain);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1kb21haW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBTTBDO0FBQzFDLGlEQUFvRDtBQUNwRCxxREFBOEU7QUFjakUsUUFBQSxnQkFBZ0IsR0FBRyxJQUFBLDBCQUFVLEVBQ3hDLG9CQUFvQixFQUNwQixLQUFLLEVBQUUsS0FBd0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDaEQsTUFBTSxtQkFBbUIsR0FBUSxTQUFTLENBQUMsT0FBTyxDQUFDLHNCQUFhLENBQUMsQ0FBQTtJQUVqRSxNQUFNLGVBQWUsR0FBRyxNQUFNLG1CQUFtQixDQUFDLFdBQVcsQ0FBQztRQUM1RCxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7S0FDakIsQ0FBQyxDQUFBO0lBRUYsSUFBSSxlQUFlLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNsRCxNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUkseUJBQXlCLENBQUMsQ0FBQTtJQUNoRSxDQUFDO0lBRUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7UUFDckQsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1FBQ2hCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtRQUNoQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDMUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1FBQzVCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUU7S0FDL0IsQ0FBQyxDQUFBO0lBQ0YsT0FBTyxJQUFJLDRCQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM1QyxDQUFDLEVBRUQsS0FBSyxFQUFFLEVBQVUsRUFBRSxFQUFFLFNBQVMsRUFBRSxF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