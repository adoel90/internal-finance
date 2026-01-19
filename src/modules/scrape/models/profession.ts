import { model } from "@medusajs/framework/utils";

export interface Profession {
    id: string;
    name: string;
}

export const Profession = model.define("profession", {
    id: model.id().primaryKey(),
    name: model.text(),
 
});

export default Profession;
