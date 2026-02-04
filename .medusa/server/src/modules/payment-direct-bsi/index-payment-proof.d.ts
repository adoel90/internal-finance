import PaymentProofService from "./payment-proof-service";
export declare const PAYMENT_PROOF_MODULE = "payment-proof";
declare const _default: import("@medusajs/types").ModuleExports<typeof PaymentProofService> & {
    linkable: {
        readonly paymentProof: {
            id: {
                serviceName: "payment-proof";
                field: "paymentProof";
                linkable: "payment_proof_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "payment-proof";
                field: "paymentProof";
                linkable: "payment_proof_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
