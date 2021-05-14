import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddPost = () => {

    const [postTitle, setPostTitle] = useState('')
    const [postText, setPostText] = useState('')

    const {addPost} = useContext(GlobalContext)

    const handleSubmit = (e) => {

        e.preventDefault()

        const newPost = {
            title: postTitle,
            text: postText
        }

        addPost(newPost)

    }

    return (
        <div>
            <h1>Add a new post</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor="">
                    Post Title
                    <input value={postTitle} onChange={(e) => setPostTitle(e.target.value)} type="text"/> 
                </label>

                <label htmlFor="">
                    Post Body
                    <textarea onChange={(e) => setPostText(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
                </label>

                <button type="submit">Create new post</button>

            </form>

        </div>
    )
}
