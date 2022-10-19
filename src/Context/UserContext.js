import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';

export const AuthContext=createContext()
const auth=getAuth(app);

const UserContext = ({children}) => {

    const provider=new GoogleAuthProvider();

    const [user, setUser]=useState({})

    const [loading,setLoading]=useState(true)

    // register with email & password 

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // log in with email & password 
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    };
    // log out side 

    const logOut=()=>{
        return signOut(auth)
    };
    // google sign in 
    const googleSignIn=()=>{
        return signInWithPopup(auth, provider)
    };
// useEffect side 
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
      return()=>{
        unSubscribe();
      } 
    },[]);


   
    const authInfo={loading, user, createUser, signIn, logOut, googleSignIn};



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;