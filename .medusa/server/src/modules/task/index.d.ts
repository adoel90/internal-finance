import TaskModuleService from "./service";
export declare const TASK_MODULE = "task";
declare const _default: import("@medusajs/types").ModuleExports<typeof TaskModuleService> & {
    linkable: {
        readonly task: {
            id: {
                serviceName: "task";
                field: "task";
                linkable: "task_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "task";
                field: "task";
                linkable: "task_id";
                primaryKey: "id";
            };
        };
        readonly status: {
            id: {
                serviceName: "task";
                field: "status";
                linkable: "status_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "task";
                field: "status";
                linkable: "status_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
