import { createWorkflow, WorkflowResponse, WorkflowData, createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { SALDO_MODULE } from "src/modules/saldo";
import SaldoModuleService from "src/modules/saldo/service";
import { ISaldoAllRekeningInput, ISaldoTersediaInput } from "src/modules/saldo/types";

export const createSaldoTersediaStep1 = createStep(
    "step-1-create-saldo-tersedia",
    async (input: ISaldoTersediaInput, { container }) => {

        const saldoModuleService: SaldoModuleService = container.resolve(SALDO_MODULE);
        const saldoTersedia = await saldoModuleService.createSaldoTersedias(input)


        // const logger = container.resolve("logger");
        // logger.debug("INPUT : " + input);

        // logger.info("SaldoRekening: " +  JSON.stringify(saldoAllBank));


        return new StepResponse(saldoTersedia);
    },
    async ({ id }, { container }) => {
        const saldoModuleService: SaldoModuleService = container.resolve(SALDO_MODULE)
    
        await saldoModuleService.deleteSaldoTersedias(id)
      }
)

export const createSaldoTersediaWorkflow = createWorkflow(
    "create-saldo-tersedia",
    (input: WorkflowData<ISaldoAllRekeningInput>) => {
        
        // Step 1: Create Saldo All Rekening
        const saldoTersedia = createSaldoTersediaStep1(input);
        

        //Step 2: Create Saldo spesifik ID of rekening
        /**
         * 
         * Komunikasi antar workflow bisa menggunakan beberapa cara :
         * 
         * https://chatgpt.com/share/685147ac-cd94-8000-b4b9-8fb72c3d2e83
         * 
         */
        // console.log("saldoRekening v1: ", saldoRekening)
    
        if(saldoTersedia){
            

            

            // Atau log json
            


            // amount_saldo_id: string
            // amount_saldo: number
            // updated_saldo_at: Date,
            // currency_code: Currencies

            // const saldoHistory = createSaldoHistoryStep1()
            // console.log("saldoHistory : ", saldoHistory)

            //   TODO: PART2
            // createSaldoHistoryWorkflow.runAsStep({
            //     input: {
            //         amount_saldo:  1000,
            //         amount_saldo_id: "saldo.all.rekening",
            //         updated_saldo_at: new Date("2025-06-10T10:30:00.000Z"),
            //         currency_code: Currencies.ID

            //     }
            //   })

          
        }
        return new WorkflowResponse(saldoTersedia);
    }
)

export default createSaldoTersediaWorkflow;
