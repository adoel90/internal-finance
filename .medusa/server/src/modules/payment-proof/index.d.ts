import PaymentProofService from "./service";
export declare const PAYMENT_PROOF_MODULE = "payment_proof";
declare const _default: import("@medusajs/types").ModuleExports<typeof PaymentProofService> & {
    linkable: {
        readonly paymentProof: {
            id: {
                serviceName: "payment_proof";
                field: "paymentProof";
                linkable: "payment_proof_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "payment_proof";
                field: "paymentProof";
                linkable: "payment_proof_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
