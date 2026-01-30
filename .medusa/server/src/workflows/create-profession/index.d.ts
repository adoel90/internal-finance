import { Profession } from "src/modules/scrape/models/profession";
type ProfessionInput = {
    name: string;
};
export declare const createProfessionStep: import("@medusajs/framework/workflows-sdk").StepFunction<ProfessionInput, {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}>;
export declare const createProfessionWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<ProfessionInput, Profession, []>;
export default createProfessionWorkflow;
