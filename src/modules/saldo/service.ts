import { MedusaService } from "@medusajs/framework/utils"
import SaldoAvailable from "./models/saldo-available"

class SaldoModuleService extends MedusaService({
    SaldoAvailable
}){

    async getTotalSaldoAvailable(listSaldoAvailable: { 
        amount?: number,
        id: string
    }[]): Promise<{
        amount?: number,
        id: string
    }>{
        
  // Calculate 
        // const total = listSaldoAvailable.reduce((sum, record) => {
        //     return sum + (record.amount || 0);
        // }, 0);

        // return total;


        //Berikan response berupa list saldo available dari element terakhir
        return listSaldoAvailable[listSaldoAvailable.length - 1];
      
    }
}   

export default SaldoModuleService
