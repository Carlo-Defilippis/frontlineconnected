import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../Firebase/firebaseConfig'

const defaultContext = {
    currentUser: null,
    loading: false,
    signup: () => {},
    login: () => {},
    logout: () => {}
}

export const AuthContext = React.createContext(defaultContext);

console.log('Auth Context ', AuthContext)

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] =useState(true)

    function signup(email, password) {
        console.log('Signup in context was hit')
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function logout() {
        console.log('Logout in context was hit')
        return auth.signOut()
    }

    async function login(email, password) {
        console.log('Login in context was hit')
        return auth.signInWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
        })
        return unsubscribe;
    }, [])

    // const value = {
    //     currentUser,
    //     signup,
    //     login,
    //     logout,
    //     loading
    // }

    return ( (
            <AuthContext.Provider value={{currentUser, signup, login, logout, loading}}>
                {!loading && children}
            </AuthContext.Provider>            
    )
    )
}
