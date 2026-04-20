import { AbstractNotificationProviderService } from "@medusajs/framework/utils";
import { Logger, ProviderSendNotificationDTO, ProviderSendNotificationResultsDTO } from "@medusajs/framework/types";
type ResendOptions = {
    api_key: string;
    from: string;
    html_templates?: Record<string, {
        subject?: string;
        content: string;
    }>;
};
type InjectedDependencies = {
    logger: Logger;
};
declare enum Templates {
    ORDER_PLACED = "order-placed"
}
declare class ResendNotificationProviderService extends AbstractNotificationProviderService {
    static identifier: string;
    private resendClient;
    private options;
    private logger;
    constructor({ logger }: InjectedDependencies, options: ResendOptions);
    static validateOptions(options: Record<any, any>): void;
    getTemplate(template: Templates): string | ((props: unknown) => React.ReactNode);
    getTemplateSubject(template: Templates): string;
    send(notification: ProviderSendNotificationDTO): Promise<ProviderSendNotificationResultsDTO>;
}
export default ResendNotificationProviderService;
