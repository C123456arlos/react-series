import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
    const { user } = useContext(UserContext)
    if (!user) return <h1>not logged in</h1>
    return (
        <div>
            <h1>Profile: {user.username}</h1>
        </div>
    )
}

export default Profile