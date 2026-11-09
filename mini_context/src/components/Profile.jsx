import React, { useContext } from 'react'
// React aur useContext hook import karta hai, global data lene ke liye
import UserContext from '../context/UserContext'
// UserContext import karta hai, jisme user ki info store hoti hai

function Profile() {
    // Profile component, jo user ke hisaab se alag text dikhata hai
    const { user } = useContext(UserContext)
    // UserContext se user nikalta hai (login hone par user ka data, warna null/undefined)

    if (!user) return <div>Please Login</div>
    // agar user abhi login nahi hai to "Please Login" dikhega

    return <div>Welcome {user.username}</div>
    // user login hai to "Welcome" ke saath username dikhega
}

export default Profile