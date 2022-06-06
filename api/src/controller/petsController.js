import { Router } from "express";
import { consultarTabela } from "../repository/petRepository.js";

const server = Router();

server.get('/pets', async (req, resp) => {
    try{
        const funcao = await consultarTabela();

        resp.send(funcao)
    }catch(err){

        resp.status(401).send({
            erro:err.message

        })
    } 

})


server.post('/pets', async (req, resp) => {
    try{
        const { nome } = req.body;

        const funcao = await consultarTabela(nome);

        resp.send(funcao)
    }catch(err){

        resp.status(401).send({
            erro:err.message

        })
    } 

})

export default server