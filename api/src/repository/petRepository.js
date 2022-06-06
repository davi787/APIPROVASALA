import { con } from './connection.js';
import { Router } from 'express'

const server = Router();

export function consultarTabela(){
    const comando = `
    SELECT * FROM TB_PETSS; 
    `

    const [linhas] = con.query(comando)
    return linhas;
}


export async function inserirTabela(pet){
    const comando = `
    INSERT INTO TB_PETSS(nm_pet)
    VALUES( ? )
    `
    const [reposta] = await con.query (comando, [pet.nome])
    const c = [reposta];
    return c;
}

export default server