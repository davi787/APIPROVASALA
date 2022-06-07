import express from 'express';
import cors from 'cors';
import 'dotenv/config';
// import { con } from './repository/connection.js';
import controlador from './controller/petsController.js'


const server = express();
server.use(cors());
server.use(express.json());

//endpoints
server.use(controlador);


server.listen(process.env.PORT, () => console.log(`API CONECTADO NA PORTA ${process.env.PORT}`));
