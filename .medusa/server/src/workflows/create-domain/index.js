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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1kb21haW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBTTBDO0FBQzFDLGlEQUFvRDtBQUNwRCxxREFBOEU7QUFjakUsUUFBQSxnQkFBZ0IsR0FBRyxJQUFBLDBCQUFVLEVBQ3hDLG9CQUFvQixFQUNwQixLQUFLLEVBQUUsS0FBd0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDaEQsTUFBTSxtQkFBbUIsR0FBUSxTQUFTLENBQUMsT0FBTyxDQUFDLHNCQUFhLENBQUMsQ0FBQTtJQUNqRSxNQUFNLE1BQU0sR0FBRyxNQUFNLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztRQUNyRCxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7UUFDaEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1FBQ2hCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztRQUMxQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7UUFDNUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtLQUMvQixDQUFDLENBQUE7SUFDRixPQUFPLElBQUksNEJBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQzVDLENBQUMsRUFFRCxLQUFLLEVBQUUsRUFBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNsQyxNQUFNLG1CQUFtQixHQUFRLFNBQVMsQ0FBQyxPQUFPLENBQUMsc0JBQWEsQ0FBQyxDQUFBO0lBQ2pFLE1BQU0sbUJBQW1CLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQzdDLENBQUMsQ0FDRixDQUFBO0FBRVksUUFBQSx3QkFBd0IsR0FBRyxJQUFBLDBCQUFVLEVBQ2hELDhCQUE4QixFQUM5QixLQUFLLEVBQUUsS0FBa0QsRUFBRSxFQUFFLFNBQVMsRUFB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