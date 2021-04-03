import React, { useContext, useState, useEffect, createContext } from 'react'
import firebase from 'gatsby-plugin-firebase'

// const defaultContext = {
//     currentUser: null,
//     userloading: false,
//     signup: () => {},
//     login: () => {},
//     logout: () => {}
// }

export const AuthContext = createContext({});

console.log('Auth Context ', AuthContext)

// export function useAuth() {
//     return useContext(AuthContext);
// }

export default function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [userloading, setUserLoading] =useState(true)

    function signup(email, password) {
        console.log('Signup in context was hit')
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    function logout() {
        console.log('Logout in context was hit')
        return firebase.auth().signOut()
    }

    function login(email, password) {
        console.log('Login in context was hit')
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setCurrentUser(user);
            setUserLoading(false)
        })
    }, [])

    const value = {
        currentUser,
        setCurrentUser,
        setUserLoading,
        userloading
    }

    return ( (
            <AuthContext.Provider value={{value}}>
                {children}
            </AuthContext.Provider>            
    )
    )
}
