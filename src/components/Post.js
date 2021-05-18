import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom'
import axios from 'axios'


export const Post = () => {

    const { addComment } = useContext(GlobalContext)

    const [currentPost, setCurrentPost] = useState({})
    const [comment, setComment] = useState({})

    let postId = useParams()

    useEffect(()=>{
        getAPost()
    }, [])

    const getAPost = async() => {
        const res = await axios.get(`http://localhost:5000/posts/${postId.id}`)
        setCurrentPost(res.data)
    }

    let { url } = useRouteMatch()


    const handleComment = (e) => {
        e.preventDefault()

        const newComment = {
            body: comment,
        }
        console.log(newComment)

        addComment(newComment)
    }

    return (
        <div className="post-page">
            <h1>{currentPost.title}</h1>
            <h3>{currentPost.text}</h3>            

            <Link to={`${url}/edit`}>Edit</Link> 
            <Link to={`${url}/info`}>Info</Link> 

            <form onSubmit={handleComment}>

                <label htmlFor="comment">Leave a comment.</label>
                <textarea name="comment" id="comment" onChange={(e)=>setComment(e.target.value)}></textarea>
                <button type="submit">Submit</button>

            </form>

        </div>
    )
}
