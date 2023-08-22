import { useState, useEffect} from "react"
import "../assets/css/componentes/card.css"
//uso de params y hock use navigate  que se usa para los post inexistentes 
import { useParams, useNavigate } from "react-router-dom"
import { buscar } from "../Api/api"
const Post = ({url}) => {
    const [post, setPost] = useState ({})

    const { id} = useParams()
    const navigate = useNavigate()
    //con .catch vamos a poner el navegate
    useEffect(()=> {
        buscar (`/posts/${id}`, setPost).catch(()=> {
            //como en los router detemos el /* este nos mandara al error 404
            navigate("/not found")
        })
    }, [id])
    return(
   <main className = "container flex flex--center">
     <article className = "card post">
       <h2 className = "post-card__title">{post.title}</h2>
       <p className = "text__card">{post.body}</p>
     </article>
   </main>
 )
}

export default Post