import { useState } from "react"
import { Link } from "react-router-dom";
import { cadastrarPet} from "../api/chamar"
import './index.css';

export default function Index(){
    const [nome, setNome] = useState('');

    async function SalvarClick(){
        try{
        const r = await cadastrarPet(nome)

        alert('Pet cadastrado com sucesso')

        }catch(err){
            alert(err.message)
        }
    }



    return(
    <main>
        <h1>Cadastre o seu pet</h1>

        <p>Insira o nome do seu pet na caixa abaixo</p>

        <br/>

        <input value={nome} onChange={e => setNome(e.target.value)}/>

        <button onClick={SalvarClick}>Cadastrar</button>

        <br/>
        <br/>

        <Link to='/consultar'>Pets Cadastrados</Link>

    </main>

    )


}