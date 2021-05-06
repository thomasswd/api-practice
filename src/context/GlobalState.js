import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
    users: [],
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

    return (
        <GlobalContext.Provider value={{
            users: state.users,
            loggedIn: state.loggedIn,
            registerUser,
            loginUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}