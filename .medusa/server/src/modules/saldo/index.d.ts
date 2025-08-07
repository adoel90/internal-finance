import SaldoModuleService from "./service";
export declare const SALDO_MODULE = "saldo";
declare const _default: import("@medusajs/types").ModuleExports<typeof SaldoModuleService> & {
    linkable: {
        readonly saldoAvailable: {
            id: {
                serviceName: "saldo";
                field: "saldoAvailable";
                linkable: "saldo_available_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "saldo";
                field: "saldoAvailable";
                linkable: "saldo_available_id";
                primaryKey: "id";
            };
        };
        readonly saldoAllbank: {
            id: {
                serviceName: "saldo";
                field: "saldoAllbank";
                linkable: "saldo_allbank_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "saldo";
                field: "saldoAllbank";
                linkable: "saldo_allbank_id";
                primaryKey: "id";
            };
        };
        readonly saldoAllrekening: {
            id: {
                serviceName: "saldo";
                field: "saldoAllrekening";
                linkable: "saldo_allrekening_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "saldo";
                field: "saldoAllrekening";
                linkable: "saldo_allrekening_id";
                primaryKey: "id";
            };
        };
        readonly saldoTersedia: {
            id: {
                serviceName: "saldo";
                field: "saldoTersedia";
                linkable: "saldo_tersedia_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "saldo";
                field: "saldoTersedia";
                linkable: "saldo_tersedia_id";
                primaryKey: "id";
            };
        };
        readonly saldoHistoryTersedia: {
            id: {
                serviceName: "saldo";
                field: "saldoHistoryTersedia";
                linkable: "saldo_history_tersedia_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "saldo";
                field: "saldoHistoryTersedia";
                linkable: "saldo_history_tersedia_id";
                primaryKey: "id";
            };
        };
        readonly saldoHistory: {
            id: {
                serviceName: "saldo";
                field: "saldoHistory";
                linkable: "saldo_history_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "saldo";
                field: "saldoHistory";
                linkable: "saldo_history_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
