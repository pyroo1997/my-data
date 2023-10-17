import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { auth } from '../firebase.js'

//we asign the actual pakage into a variable app calle "AuthContext".
const AuthContext = React.createContext()

//we create a function to use the useCOntect function from the pakage into another components useing function useAuth().
export function useAuth() {
        return useContext(AuthContext)
    }
        



//the main function of useContext()
export function AuthProvider({children}) {
  
    //a useState hook for user log in and log out status with default to epmty.
    const [currentUser, setCurrentUser] = useState()
    
    //firebase function to sign the user up
    function Signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    //call the setCurrentUser to set the [currentUser]
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChange(user => {
        setCurrentUser(user)

    })
        //to clean-up unsubscribe again....
        return unsubscribe
    }, [])

    //defining the current user
    const value = {
        currentUser
    }
    
    
    //main <{functionName}.provider> return function
    return (
        <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    )
}
