//req jsx as fragments made can be accessed in all variables  ==== context provider
import React from 'react'
import UserContext from './UserContext'



const UserContextProvider = ({children}) =>{
    const [user,setUser] = React.useState(null)

    return (
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider