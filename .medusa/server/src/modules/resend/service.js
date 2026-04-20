"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const resend_1 = require("resend");
const order_placed_1 = require("./emails/order-placed");
var Templates;
(function (Templates) {
    Templates["ORDER_PLACED"] = "order-placed";
})(Templates || (Templates = {}));
const templates = {
    // TODO add templates
    [Templates.ORDER_PLACED]: order_placed_1.orderPlacedEmail,
};
class ResendNotificationProviderService extends utils_1.AbstractNotificationProviderService {
    constructor({ logger }, options) {
        super();
        this.resendClient = new resend_1.Resend(options.api_key);
        this.options = options;
        this.logger = logger;
    }
    static validateOptions(options) {
        if (!options.api_key) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Option `api_key` is required in the provider's options.");
        }
        if (!options.from) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Option `from` is required in the provider's options.");
        }
    }
    getTemplate(template) {
        if (this.options.html_templates?.[template]) {
            return this.options.html_templates[template].content;
        }
        const allowedTemplates = Object.keys(templates);
        if (!allowedTemplates.includes(template)) {
            return null;
        }
        return templates[template];
    }
    getTemplateSubject(template) {
        if (this.options.html_templates?.[template]?.subject) {
            return this.options.html_templates[template].subject;
        }
        switch (template) {
            case Templates.ORDER_PLACED:
                return "Order Confirmation";
            default:
                return "New Email";
        }
    }
    async send(notification) {
        const template = this.getTemplate(notification.template);
        if (!template) {
            this.logger.error(`Couldn't find an email template for ${notification.template}. The valid options are ${Object.values(Templates)}`);
            return {};
        }
        const commonOptions = {
            from: this.options.from,
            to: [notification.to],
            subject: this.getTemplateSubject(notification.template),
        };
        let emailOptions;
        if (typeof template === "string") {
            emailOptions = {
                ...commonOptions,
                html: template,
            };
        }
        else {
            emailOptions = {
                ...commonOptions,
                react: template(notification.data),
            };
        }
        const { data, error } = await this.resendClient.emails.send(emailOptions);
        if (error || !data) {
            if (error) {
                this.logger.error("Failed to send email", error);
            }
            else {
                this.logger.error("Failed to send email: unknown error");
            }
            return {};
        }
        return { id: data.id };
    }
}
ResendNotificationProviderService.identifier = "notification-resend";
exports.default = ResendNotificationProviderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Jlc2VuZC9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EscURBR2tDO0FBT2xDLG1DQUdlO0FBRWYsd0RBQXdEO0FBZXhELElBQUssU0FFSjtBQUZELFdBQUssU0FBUztJQUNaLDBDQUE2QixDQUFBO0FBQy9CLENBQUMsRUFGSSxTQUFTLEtBQVQsU0FBUyxRQUViO0FBRUQsTUFBTSxTQUFTLEdBQStEO0lBQzVFLHFCQUFxQjtJQUNyQixDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSwrQkFBZ0I7Q0FDM0MsQ0FBQTtBQUVELE1BQU0saUNBQWtDLFNBQVEsMkNBQW1DO0lBTS9FLFlBQ0ksRUFBRSxNQUFNLEVBQXdCLEVBQ2hDLE9BQXNCO1FBRXRCLEtBQUssRUFBRSxDQUFBO1FBQ1AsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDeEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBeUI7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixNQUFNLElBQUksbUJBQVcsQ0FDakIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5Qix5REFBeUQsQ0FDNUQsQ0FBQTtRQUNELENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxtQkFBVyxDQUNqQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzlCLHNEQUFzRCxDQUN6RCxDQUFBO1FBQ0QsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBbUI7UUFD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