import { Currencies } from "src/modules/cashflow/types"

export type ISaldoAllBankInput = {
    nama_bank: string
    no_rek: number
    atas_nama: string
    amount_saldo: number
    updated_saldo_at: Date 
  }

  
export type ISaldoAllRekeningInput = {
  nama_bank: string
  no_rek: number
  keterangan: string
  allowed_see: boolean
  amount_saldo?: number
  updated_saldo_at?: Date
  
}

export interface ISaldoTersediaInput extends ISaldoAllRekeningInput {}


export type ISaldoHistoryInput = {
  amount_saldo_id: string  
  updated_saldo_at: Date,
  currency_code?: Currencies
  amount?: number
}