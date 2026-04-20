import { CustomerDTO, OrderDTO } from "@medusajs/framework/types";
type OrderPlacedEmailProps = {
    order: OrderDTO & {
        customer: CustomerDTO;
    };
    email_banner?: {
        body: string;
        title: string;
        url: string;
    };
};
export default function OrderPlacedEmail({ order, email_banner }: OrderPlacedEmailProps): import("react/jsx-runtime").JSX.Element;
export declare const orderPlacedEmail: (props: OrderPlacedEmailProps) => import("react/jsx-runtime").JSX.Element;
export {};
