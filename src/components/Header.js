import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'


export const Header = () => {

    const { loggedIn } = useContext(GlobalContext)

    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Greeting />
                {/* only show these links if the user is not logged in */}
                {/* {if(loggedIn === false) {
                    `<h1></h1>`
                }} */}
                <Link to="/auth/register">
                    <li>Register</li> 
                </Link>
                <Link to="/auth/login">
                    <li>Login</li> 
                </Link>
                {/* only show this link if the user in logged in */}
                {/* {if(loggedIn === )} */}
                <Link to="/auth/logout">
                    <li>Logout</li> 
                </Link>
            </ul>   
        </nav>
    )
}

const UserGreeting = () => {
    return (
        <h1>Welcome Back!</h1>
    )
}

const GuestGreeting = () => {
    return (
        <h1>Welcome!</h1>
    )
}

const Greeting = () => {
    const { loggedIn } = useContext(GlobalContext)

    if(loggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}