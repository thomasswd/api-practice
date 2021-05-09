import React from 'react'

export const Post = ({ post }) => {
    return (
        <li>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
        </li>
    )
}
