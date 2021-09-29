import React, {useState} from 'react'
import './Login.css'
import {auth} from '../Firebase/firebase'

function Login() {
    const[name, setName] =useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [name, setName] = useState('')
    
    const register = () => {
        
    }
    const loginToApp = (e) => {
        e.preventDefault()
    }

    return (
        <div className="login">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9AGMTPuNoH47Ey2MDSJmmdtkupc_Oy719Q&usqp=CAU" alt="" />

            <form>
                <input type="text" placeholder="Full name (required if registering)" />
                <input type="text" placeholder="Profile picture URl (optional)" />
                <input type="email" placeholder="oti@gmail.com" />
                <input type="text" placeholder="Password" />
                
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member? {" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>

        </div>
    )
}

export default Login
