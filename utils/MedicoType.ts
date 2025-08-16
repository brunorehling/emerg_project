import type { Decimal } from "@prisma/client/runtime/client";


export type MedicoType = {
    id: number;
    nome: String;
    idade: number;       
    preco: Decimal;      
    foto: String
    especialidade: String;
    
}

