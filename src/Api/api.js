//vamos a crear una api con axios
import axios from "axios";
//lo que hara el siguiente codigo es mandar las peticiones al localhost 5
export const  api = axios.create({
    baseURL: "http://localhost:5"
})
//funcion asincrona que reciba la url y una funcion llamada setData, con esta funcion busca los datos
export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}