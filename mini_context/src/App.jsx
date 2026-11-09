import { useState } from 'react'
// React se useState hook import karta hai. Is file mein use nahi ho raha, isliye hata sakte hain
import Login from './components/Login'
// Login component wali file import karta hai, jo username/password form dikhata hai
import Profile from './components/Profile'
// Profile component wali file import karta hai, jo "Please Login" ya "Welcome username" dikhata hai
import UserContextProvider from './context/UserContextProvider'
// UserContextProvider import karta hai, jo user ka data (user aur setUser) poore app ko deta hai
import './App.css'
// App.css import karta hai, taaki is file ki styling app par lage

function App() {
  // App component, poore app ka main component

  return (
    // JSX return karta hai, yaani screen par jo dikhega

    <UserContextProvider>
    {/* UserContextProvider ka wrapper. Andar ke sab components isse user data le sakte hain.*/}

    <h2>KK's</h2>
    {/* "KK's" heading */}

    <Login />
    {/* Login form render karta hai */}

    <Profile />
    {/* Profile component render karta hai, jo login hone par welcome message dikhata hai */}

    </UserContextProvider>
    // UserContextProvider ka closing tag
  )
}

export default App
// App component ko export karta hai, taaki main.jsx use render kar sake