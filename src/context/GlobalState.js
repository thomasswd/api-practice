import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
    users: [],
    posts: [
        // {
        //     _id: 42069,
        //     title: "hi",
        //     text: 'u are gay'
        // }
    ],
    loggedIn: false
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //actions
    async function registerUser(user) {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('http://localhost:5000/auth/register', user, config)
            console.log(res)
            dispatch({
                type: 'ADD_USER',
                payload: res
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function loginUser(user) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('http://localhost:5000/auth/login', user, config)
            console.log(res)

            localStorage.setItem('myJWT', res.data)

            dispatch({
                type: 'LOGIN_USER',
                payload: res
            })


        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function logoutUser(user) {

        try {
            dispatch({
                type: 'LOGOUT_USER',
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function getPosts() {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.get('http://localhost:5000/posts', config)
            dispatch({
                type: 'GET_POSTS',
                payload: res.data
            })

        } catch (err) {
            console.error(err)
        }
    }

    async function addPost(post) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('http://localhost:5000/posts', post, config)
            dispatch({
                type: 'ADD_POST',
                payload: res.data
            })

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <GlobalContext.Provider value={{
            users: state.users,
            loggedIn: state.loggedIn,
            posts: state.posts,
            registerUser,
            loginUser,
            logoutUser,
            getPosts,
            addPost
        }}>
            {children}
        </GlobalContext.Provider>
    )
}