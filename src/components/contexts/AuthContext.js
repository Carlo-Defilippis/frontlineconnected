import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../Firebase/firebaseConfig'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    function signUp(email, password) {
        auth.createUserWithEmailAndPassword(email, password);
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signUp
    }

    return (
        <div>
            <AuthContext.Provider calue={value}>
                {children}
            </AuthContext.Provider>            
        </div>
    )
}
