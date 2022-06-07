import { Router } from 'express';
import { consultarTabela, inserirTabela } from "../repository/petRepository.js";

const server = Router();

server.get('/pets/consultar', async (req, resp) => {
    try{
        const a = await consultarTabela();

        resp.send(a)
        
    }catch(err){

        resp.status(401).send({
            erro: err.message

        })
    } 

})


server.post('/pets', async (req, resp) => {
    try{
        const nomeee = req.body;

        const funcao = await inserirTabela(nomeee);

        resp.send(funcao)
    }catch(err){

        resp.status(401).send({
            erro:err.message

        })
    } 

})

export default server