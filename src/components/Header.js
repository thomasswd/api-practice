import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'


export const Header = () => {

    const { loggedIn, logoutUser } = useContext(GlobalContext)

    const LoggedInNav = () => {

        const handleLogout = (e) => {
            logoutUser()
        }

        return (
            <nav>
                <ul>
                    <UserGreeting />
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/">
                        <li><button onClick={handleLogout}>Logout</button></li> 
                    </Link>
                </ul>
            </nav>
        )
    }

    const LoggedOutNav = () => {
        return (
            <nav>
                <ul>
                    <GuestGreeting />
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/auth/register">
                        <li>Register</li> 
                    </Link>
                    <Link to="/auth/login">
                        <li>Login</li> 
                    </Link>
                </ul>
            </nav>
        )
    }

    if(loggedIn) {
        return(LoggedInNav()) 
    } else {
        return(LoggedOutNav()) 
    }
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