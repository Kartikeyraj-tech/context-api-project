import React, { useState, useContext } from 'react'
// React aur do hooks import karta hai: useState (value yaad rakhne ke liye) aur useContext (global user data lene ke liye)
import UserContext from '../context/UserContext'
// UserContext import karta hai, jisme user ki info store hoti hai

function Login() {
    // Component function, jo login form ka UI return karta hai
    const [username, setUsername] = useState('')
    // username ki value aur use badalne wala function, shuru mein khaali string
    const [password, setPassword] = useState('')
    // password ki value aur use badalne wala function, shuru mein khaali string

    const { setUser } = useContext(UserContext)
    // UserContext se setUser function nikalta hai, jisse user ki info save hogi

    const handleSubmit = (e) => {
        // Submit button dabane par ye function chalta hai
        e.preventDefault()
        // form ko page reload hone se rokta hai
        setUser({ username, password })
        // username aur password ko context mein save kar deta hai
    }

    return (
        <div>
            {/* Poore login form ka wrapper */}
            <h2>Login</h2>
            {/* "Login" heading */}
            <input
                type='text'
                value={username}
                // input ki value hamesha username state se aayegi
                onChange={(e) => setUsername(e.target.value)}
                // jab bhi kuch type ho, username state update hoga
                placeholder='username'
                // khaali hone par "username" dikhega
            />
            <br />
            {/* ek line ka break, username aur password ko alag line par rakhta hai */}
            <input
                type='text'
                value={password}
                // input ki value password state se aayegi
                onChange={(e) => setPassword(e.target.value)}
                // type karne par password state update hoga
                placeholder='password'
                // khaali hone par "password" dikhega
            />
            <br />
            {/* password ke baad line break */}
            <button onClick={handleSubmit}>Submit</button>
            {/* Submit button, click par handleSubmit chalega */}
        </div>
    )
}

export default Login