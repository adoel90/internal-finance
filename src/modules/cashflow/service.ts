import { MedusaService } from "@medusajs/framework/utils"
import Penerimaan from "./models/penerimaan"
import Pengeluaran from "./models/pengeluaran"
import PengeluaranProyeksiCashcall from "./models/pengeluaran-proyeksi-cashcall"

class CashflowModuleService extends MedusaService({
    Penerimaan,
    Pengeluaran,
    PengeluaranProyeksiCashcall
}){

    async getTotalSummaryPenerimaan(listPenerimaan: { amount?: number }[]): Promise<number>{
    
        // Calculate 
        const total = listPenerimaan.reduce((sum, record) => {
            return sum + (record.amount || 0);
        }, 0);

        return total;
    }

    async getTotalSummaryPengeluaran(listPengeluaran: { amount?: number }[]): Promise<number>{
    
        // Calculate 
        const total = listPengeluaran.reduce((sum, record) => {
            return sum + (record.amount || 0);
        }, 0);

        return total;
    }

    // async getTotalPengeluaranGajiAndThr(listPengeluaran: { amount?: number }[]): Promise<number>{
    
    //     // Calculate 
    //     const total = listPengeluaran.reduce((sum, record) => {
    //         return sum + (record.amount || 0);
    //     }, 0);

    //     return total;
    // }




}
export default CashflowModuleService

