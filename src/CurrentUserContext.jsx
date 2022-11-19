import {createContext,useContext} from "react";
import { useEffect } from "react";
import React from "react";
import { useState } from "react";



const AuthContext = createContext({});



const AuthProvider = (props) => {
const [loggedIn, setLoggedIn] = useState(false)
    useEffect(() => {
      


    }, [])
    
    const login =()=>{
        setLoggedIn(true)
    }

    const logout = () => {
        setLoggedIn(false)

    }
    const authContextValue = {
login,loggedIn,logout

    };
    return <AuthContext.Provider value={authContextValue} {...props} ></AuthContext.Provider >
}


const useAuth = () => useContext(AuthContext);


export {useAuth, AuthProvider};