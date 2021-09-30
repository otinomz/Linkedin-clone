import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import './Login.css'
import {auth} from '../Firebase/firebase'
import {login} from '../features/user/userSlice'

function Login() {
    const[name, setName] =useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setprofilePic] = useState('')

    const dispatch = useDispatch()

    const register = () => {
        if (!name) {
            return alert('please enter a full name')
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic
                    }))
                })
            })
            
            .catch(error => alert(error))       
    }

    const loginToApp = (e) => {
        e.preventDefault()
    }

    return (
        <div className="login">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9AGMTPuNoH47Ey2MDSJmmdtkupc_Oy719Q&usqp=CAU" alt="" />

            <form>
                <input
                    type="text"
                    placeholder="Full name (required if registering)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Profile picture URl (optional)"
                    value={profilePic}
                    onChange={(e) => setprofilePic(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="oti@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                    
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member? {" "}
                <span className="login__register" onClick={register}> Register Now </span>
            </p>

        </div>
    )
}

export default Login
