import React from "react"
// React import karta hai, jisse useState use kar sakte hain
import UserContext from "./UserContext"
// UserContext import karta hai, jisse Provider milta hai

const UserContextProvider = ({children}) => {
    // Ye component apne andar ke sab components (children) ko user ka data provide karta hai
    const [user,setUser] = React.useState(null)
    // user ki state banata hai, shuru mein null (koi login nahi hai)

    return(
        <UserContext.Provider value={{user,setUser}}>
            {/* user aur setUser ko context ke through sab children ko de deta hai */}
            {children}
            {/* App ke andar wale saare components (h2, Login, Profile) yahan render honge */}
        </UserContext.Provider>
    )
}

export default UserContextProvider