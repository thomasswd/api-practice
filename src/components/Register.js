import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { registerUser } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            name, 
            email,
            password
        }

        registerUser(newUser)
    }

    return (
        <>
            <h1>Register a new user</h1>

            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}