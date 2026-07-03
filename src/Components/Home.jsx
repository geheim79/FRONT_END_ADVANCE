import { useEffect, useState } from "react"
import api from "../api/axios"
import Post from './Post'
import { useNavigate } from "react-router"


const Home = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([])
    const [refreshState, setRefreshState] = useState (false)

    const refreshPosts = () =>{
        setRefreshState(!refreshState)
    }

    const onFetchPosts = async () => {
        const { data } = await api.get("/posts")
        console.log('data', data)
        setPosts(data)
    }

    useEffect(() => {
        onFetchPosts()
    }, [refreshState])

    const redirectToAdd =()=>{
        navigate("./post/create")
    }



    return (
        <>
        <div>
            <button onClick={redirectToAdd}>Add</button>
        </div>
            {posts.map((post) => (
                <Post key={post.id} {...post} refreshPosts={refreshPosts} />
            ))}
        </>
    )
}

export default Home 