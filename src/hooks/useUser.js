import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../api/firebase/firebase";
import { INITIAL_VALUE } from "../helpers/no-components/constants";

export function useUser(){
    const [user, setUser] = useState(INITIAL_VALUE)
    const [error, setError] = useState(null)
    const { message } = error || false

    const loadUser = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
                // User is signed out
                setUser(INITIAL_VALUE)
            }
        })
    }

    useEffect(() => {
        loadUser()
    }, [])

    const _signInWithEmailAndPassword = async (email, password) => {
        setError(null)
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            // Signed in 
            const user = userCredential.user
            setUser(user)
        }
        catch(error) {
            setError(error)
        }
    }

    const _signOut = async () => {
        setError(null)
        try {
            await signOut(auth)
            setUser(INITIAL_VALUE)
        } catch (error) {
            setError(error)
        }        
    }

    return {
        _signInWithEmailAndPassword,
        _signOut,
        user,
        ...user,
        error,
        message,
    }
}