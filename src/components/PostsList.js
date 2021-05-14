import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import { Post } from './Post'
//import { AddPost } from './AddPost'

export const PostsList = () => {

    const { posts, getPosts, loggedIn } = useContext(GlobalContext)

    useEffect(() => {
        getPosts()
    })

    const newPost = () => {
        if(loggedIn) {
            return <Link to='/post/add'>Add a new post</Link>
        }
    }

    return (
        <div>
            <h1>Posts</h1>

            {newPost()}

            <ul>
                {posts ? posts.map(post => (<Post key={Math.random() + (100 - 1) + 1} post={post}></Post>)) : 'no posts'}
            </ul>
            
        </div>
    )
}
