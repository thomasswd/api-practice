import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom'



export const Post = () => {

    const { posts, getPosts, loggedIn } = useContext(GlobalContext)

    useEffect(()=>{
        getPosts()
    }, [])

    let { id } = useParams()

    let { url } = useRouteMatch()
    console.log(url)

    let currentPost = posts.filter(post => post._id === id)
    console.log(currentPost)

    // useEffect(() => {
    //     const currentPost = posts.filter(post => post._id === id)
    // }, [])

    return (
        <div className="post-page">
            <h1>{currentPost.title}</h1>
            <h3>{currentPost.text}</h3>            

            <Link to={`${url}/edit`}>Edit</Link> 
            <Link to={`${url}/info`}>Info</Link> 

        </div>
    )
}
