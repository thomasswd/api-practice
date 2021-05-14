import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { loginUser } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault()

        const user = {
            email,
            password
        }

        loginUser(user)
    }

    return (
        <>
            <h1>Login</h1>

            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Link to="/"><button type="submit">Login</button></Link>
                    
                </form>
            </div>
        </>
    )
}
