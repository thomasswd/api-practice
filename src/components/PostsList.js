import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import { Post } from './Post'
//import { AddPost } from './AddPost'

export const PostsList = () => {

    const { posts, getPosts, loggedIn } = useContext(GlobalContext)

    console.log(posts)

    useEffect(() => {
        getPosts()
    }, [])

    const newPost = () => {
        if(loggedIn) {
            return <Link to='/post/add'>Add a new post</Link>
        }
    }

    return (
        <div className="posts-page">
            <div className="posts-container">
                <h1>Posts</h1>

                {newPost()}

                <ul className="post-list">
                    {posts ? posts.map(post => (
                        <li key={post._id} className="post">
                            <Link to={`/post/${post._id}`}>{post.title}</Link>
                        </li>
                    )) : 'no posts'}
                </ul>
            </div>
        </div>
    )
}

{/* <Post key={Math.random() + (100 - 1) + 1} post={post}></Post> */}
        