import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function cadastrarPet(nome){
    const r = await api.post('/pets', {
        nome:nome
    })
    return r.data

}

export async function ListarTodosOspets(){
	const r = await api.get('/pets/consultar')
	
	return r.data
}