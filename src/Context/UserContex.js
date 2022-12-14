import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from "../firebase_congi/Firebase.config"
import { useEffect } from 'react';

export const AuthContext=createContext()

const auth=getAuth(app)


const UserContex = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading] = useState(true)


const  register=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}

const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const logout=()=>{
    return signOut(auth)
}




useEffect(()=>{

 const unsubscribe= onAuthStateChanged(auth,curentUser=>{
    setUser(curentUser)
    setLoading(false)
 })


return ()=>{
    unsubscribe()
}


},[])





    const info={
        register,
        login,
        logout,
        user,
        loading,
        
    }
    return (
        <AuthContext.Provider  value={info}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default UserContex;