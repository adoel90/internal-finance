"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSaldoTersediaWorkflow = exports.createSaldoTersediaStep1 = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const saldo_1 = require("src/modules/saldo");
exports.createSaldoTersediaStep1 = (0, workflows_sdk_1.createStep)("step-1-create-saldo-tersedia", async (input, { container }) => {
    const saldoModuleService = container.resolve(saldo_1.SALDO_MODULE);
    const saldoTersedia = await saldoModuleService.createSaldoTersedias(input);
    // const logger = container.resolve("logger");
    // logger.debug("INPUT : " + input);
    // logger.info("SaldoRekening: " +  JSON.stringify(saldoAllBank));
    return new workflows_sdk_1.StepResponse(saldoTersedia);
}, async ({ id }, { container }) => {
    const saldoModuleService = container.resolve(saldo_1.SALDO_MODULE);
    await saldoModuleService.deleteSaldoTersedias(id);
});
exports.createSaldoTersediaWorkflow = (0, workflows_sdk_1.createWorkflow)("create-saldo-tersedia", (input) => {
    // Step 1: Create Saldo All Rekening
    const saldoTersedia = (0, exports.createSaldoTersediaStep1)(input);
    //Step 2: Create Saldo spesifik ID of rekening
    /**
     *
     * Komunikasi antar workflow bisa menggunakan beberapa cara :
     *
     * https://chatgpt.com/share/685147ac-cd94-8000-b4b9-8fb72c3d2e83
     *
     */
    // console.log("saldoRekening v1: ", saldoRekening)
    if (saldoTersedia) {
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
    return new workflows_sdk_1.WorkflowResponse(saldoTersedia);
});
exports.default = exports.createSaldoTersediaWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1zYWxkby10ZXJzZWRpYS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNkg7QUFDN0gsNkNBQWlEO0FBSXBDLFFBQUEsd0JBQXdCLEdBQUcsSUFBQSwwQkFBVSxFQUM5Qyw4QkFBOEIsRUFDOUIsS0FBSyxFQUFFLEtBQTBCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBRWhELE1BQU0sa0JBQWtCLEdBQXVCLFNBQVMsQ0FBQyxPQUFPLENBQUMsb0JBQVksQ0FBQyxDQUFDO0lBQy9FLE1BQU0sYUFBYSxHQUFHLE1BQU0sa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUE7SUFHMUUsOENBQThDO0lBQzlDLG9DQUFvQztJQUVwQyxrRUFBa0U7SUFHbEUsT0FBTyxJQUFJLDRCQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0MsQ0FBQyxFQUNELEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM1QixNQUFNLGtCQUFrQixHQUF1QixTQUFTLENBQUMsT0FBTyxDQUFDLG9CQUFZLENBQUMsQ0FBQTtJQUU5RSxNQUFNLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ25ELENBQUMsQ0FDTixDQUFBO0FBRVksUUFBQSwyQkFBMkIsR0FBRyxJQUFBLDhCQUFjLEVBQ3JELHVCQUF1QixFQUN2QixDQUFDLEtBQTJDLEVBQUUsRUFBRTtJQUU1QyxvQ0FBb0M7SUFDcEMsTUFBTSxhQUFhLEdBQUcsSUFBQSxnQ0FBd0IsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUd0RCw4Q0FBOEM7SUFDOUM7Ozs7OztPQU1HO0lBQ0gsbURBQW1EO0lBRW5ELElBQUcsYUFBYSxFQUFDLENBQUM7UUFLZCxnQkFBZ0I7UUFJaEIsMEJBQTBCO1FBQzFCLHVCQUF1QjtRQUN2QiwwQkFBMEI7UUFDMUIsNEJBQTRCO1FBRTVCLGlEQUFpRDtRQUNqRCwrQ0FBK0M7UUFFL0MsZ0JBQWdCO1FBQ2hCLHlDQUF5QztRQUN6QyxlQUFlO1FBQ2YsK0JBQStCO1FBQy9CLGlEQUFpRDtRQUNqRCxrRUFBa0U7UUFDbEUsdUNBQXVDO1FBRXZDLFFBQVE7UUFDUixPQUFPO0lBR1gsQ0FBQztJQUNELE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQ0osQ0FBQTtBQUVELGtCQUFlLG1DQUEyQixDQUFDIn0=