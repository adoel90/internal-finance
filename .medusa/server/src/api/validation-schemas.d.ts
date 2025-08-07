import { z } from "zod";
import { MediaType } from "../modules/digital-product/types";
export declare const createDigitalProductsSchema: z.ZodObject<{
    name: z.ZodString;
    medias: z.ZodArray<z.ZodObject<{
        type: z.ZodNativeEnum<typeof MediaType>;
        file_id: z.ZodString;
        mime_type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type?: MediaType;
        file_id?: string;
        mime_type?: string;
    }, {
        type?: MediaType;
        file_id?: string;
        mime_type?: string;
    }>, "many">;
    product: z.ZodObject<any, any, z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }> | z.ZodEffects<any, any, any>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    medias?: {
        type?: MediaType;
        file_id?: string;
        mime_type?: string;
    }[];
    product?: any;
}, {
    name?: string;
    medias?: {
        type?: MediaType;
        file_id?: string;
        mime_type?: string;
    }[];
    product?: any;
}>;
