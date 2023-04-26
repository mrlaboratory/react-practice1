import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import app from '../firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext('')


const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signoutUser = () => {
        signOut(auth)
        setuser(null)
    }

    const userSignIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
        

    useEffect(() => {
       const unsub =  onAuthStateChanged(auth, user => {
            if(user){
                setuser(user)
            }
        })
        return () => unsub()
       
    }, [])

    const info = {
        user,
        setuser,
        createUser,
        signoutUser,
        userSignIn


    }
    return (
        <AuthContext.Provider value={info} >
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;