import CashflowModuleService from "./service";
export declare const CASHFLOW_MODULE = "cashflow";
declare const _default: import("@medusajs/types").ModuleExports<typeof CashflowModuleService> & {
    linkable: {
        readonly penerimaan: {
            id: {
                serviceName: "cashflow";
                field: "penerimaan";
                linkable: "penerimaan_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "cashflow";
                field: "penerimaan";
                linkable: "penerimaan_id";
                primaryKey: "id";
            };
        };
        readonly pengeluaran: {
            id: {
                serviceName: "cashflow";
                field: "pengeluaran";
                linkable: "pengeluaran_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "cashflow";
                field: "pengeluaran";
                linkable: "pengeluaran_id";
                primaryKey: "id";
            };
        };
        readonly pengeluaranProyeksiCashcall: {
            id: {
                serviceName: "cashflow";
                field: "pengeluaranProyeksiCashcall";
                linkable: "pengeluaran_proyeksi_cashcall_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "cashflow";
                field: "pengeluaranProyeksiCashcall";
                linkable: "pengeluaran_proyeksi_cashcall_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
