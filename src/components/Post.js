import React from 'react'

export const Post = ({ post }) => {
    return (
        <li>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
        </li>
    )
}
