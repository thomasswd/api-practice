import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import { Post } from './Post'
//import { AddPost } from './AddPost'

export const PostsList = () => {

    const { posts, getPosts } = useContext(GlobalContext)

    useEffect(() => {
        getPosts()
    })

    return (
        <div>
            <h1>Posts</h1>

            <Link to='/post/add'>Add a new post</Link>

            <ul>
                {posts.map(post => (<Post key={post._id} post={post}></Post>))}
            </ul>
            
        </div>
    )
}
