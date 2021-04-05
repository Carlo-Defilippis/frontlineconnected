import React, { useContext, useState, useEffect } from 'react'
import getFirebase from '../Firebase/firebaseConfig'

const defaultContext = {
    currentUser: null,
    loading: false,
    signup: () => {},
    login: () => {},
    logout: () => {},
    resetPassword: () => {}
}

export const AuthContext = React.createContext(defaultContext);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const auth = getFirebase().auth()

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

    function login(email, password) {
        console.log('Login in context was hit')
        return auth.signInWithEmailAndPassword(email, password);
    }

    function resetPassword(email) {
        console.log('Reset password context was hit')
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        if (!auth) return;
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
        })
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        loading,
        resetPassword
    }

    return ( (
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>            
    )
    )
}
