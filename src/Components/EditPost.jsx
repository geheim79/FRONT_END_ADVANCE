import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import api from "../api/axios"
import { Link, useParams } from "react-router"


const EdiPost = () => {
    const [post, setPost] = useState({ title: "" })

    const navigate = useNavigate()
    const { id } = useParams()

    const onEdiPost = async () => {
        await api.put(`/posts/${id}`, post)
        navigate("/")
    }

    const onFetchPost = async() => {
        const { data } = await api.get(`/posts/${id}`)
        setPost(data)
    }
    useEffect(() => {
        onFetchPost()
    }, [])

    return (
        <>
            <div>
                <Link to="/">Back</Link>
            </div>
            <input
                placeholder="title"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}


            />
            <button onClick={onEdiPost}>Update</button>
        </>
    )
}

export default EdiPost