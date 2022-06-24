import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { ListarTodosOspets } from "../api/chamar"
import './index.css';


export default function Index(){
    const [pet, setPet] = useState([]);

    async function Listar(){
        const a = await ListarTodosOspets();
        setPet(a)
    }

    useEffect(() => {
        Listar()
    }, [])

    return(
    <main>
        <h1>Pets Cadastrados</h1>

        {pet.map(item =>
            <p>{item.nome}</p>
        
        )}

        <br/>

        <Link to='/'>Cadastrar PET</Link>

    </main>

    )


}