import { useParams } from "react-router-dom"
import ListPosts from "../componets/Listposts"
const SubCategoria = () => {
    const { subcategoria } = useParams()
    return (
        <ListPosts url={`/posts?subcategoria=${subcategoria}`} />
    )
}

export default SubCategoria