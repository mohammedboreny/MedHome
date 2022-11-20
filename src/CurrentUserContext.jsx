import {createContext,useContext} from "react";
import { useEffect } from "react";
import React from "react";
import { useState } from "react";



const AuthContext = createContext({});



const AuthProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [direction, SetDirection] = useState({});
    const [id,setid]=useState('')
    // useEffect(() => {
      


    // }, [])
    const directions = (val) => {
        SetDirection(val);

    }
    const idSet = (val)=>{
        setid(val);
    }
    const login =()=>{
        setLoggedIn(true)
    }

    const logout = () => {
        setLoggedIn(false)

    }
    const authContextValue = {
login,loggedIn,logout,direction,directions,idSet,id

    };
    return <AuthContext.Provider value={authContextValue} {...props} ></AuthContext.Provider >
}


const useAuth = () => useContext(AuthContext);


export {useAuth, AuthProvider};