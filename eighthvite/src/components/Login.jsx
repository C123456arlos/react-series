import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <div>
            <h2>login</h2>
            <input
                type='text'
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='Username'
            ></input>{""}
            <input type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
            ></input>
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Login