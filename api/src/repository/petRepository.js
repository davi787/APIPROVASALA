import { con } from './connection.js';

export async function consultarTabela(){
    const comando = `
    select
    nm_pet
    from tb_petss
    `

    const [linhas] = await con.query(comando)
    return linhas;
}


export async function inserirTabela(pet){
    const comando = `
    INSERT INTO tb_petss(nm_pet) 
			      VALUES (?);
    `
    const [resposta] = await con.query(comando, [pet.nome])
    return resposta[0];
}

