import React from 'react'
// React import karta hai, kyunki createContext React ka function hai

const UserContext = React.createContext()
// ek context object banata hai. Iske andar default value nahi di gayi, to shuru mein undefined hoga

export default UserContext;
// is context ko doosri files (Login, Profile, UserContextProvider) mein import karne ke liye export karta hai