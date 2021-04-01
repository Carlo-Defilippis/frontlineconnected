import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../Firebase/firebaseConfig'


const defaultContext = {
    currentUser: null,
    loading: false
}

const AuthContext = React.createContext(defaultContext);

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

    function login(email, password) {
        console.log('Signup in context was hit')
        return auth.signInWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
        })

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signup,
        login
    }

    return ( (
            <AuthContext.Provider value={{currentUser, signup, login, loading}}>
                {!loading && children}
            </AuthContext.Provider>            
    )
    )
}
