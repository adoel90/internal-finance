import { MedusaService } from "@medusajs/framework/utils"
import SaldoAvailable from "./models/saldo-available"
import SaldoAllbank from "./models/saldo-allbank"
import SaldoAllrekening from "./models/saldo-allrekening"
import SaldoHistory from "./models/saldo-history"

import SaldoTersedia from "./models/saldo-tersedia"
import SaldoHistoryTersedia from "./models/saldo-history-tersedia"

class SaldoModuleService extends MedusaService({
    SaldoAvailable,
    SaldoAllbank,
    SaldoAllrekening,    
    SaldoTersedia,
    SaldoHistoryTersedia,
    SaldoHistory
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
