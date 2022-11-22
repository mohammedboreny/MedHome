import { createContext, useContext } from "react";
import { useEffect } from "react";
import React from "react";
import { useState } from "react";

const AuthContext = createContext({});



const AuthProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [direction, SetDirection] = useState({});
    const [id, setid] = useState('');
    const [phone, setPhone] = useState('');
    const [googleUser, setgoogleUser] = useState(false)
    // useEffect(() => {



    // }, [])
    //  to confirm certificate the connection with the google api


    const setphone = (val) => {
        setPhone(val);
    }
    const directions = (val) => {
        SetDirection(val);

    }
    const idSet = (val) => {
        setid(val);
    }
    const googleuser = () => {
        setgoogleUser(true)
    }
    const googleuserOut = () => {
        setgoogleUser(false)
    }
    const login = () => {
        setLoggedIn(true)
    }

    const logout = () => {
        setLoggedIn(false)

    }
    const authContextValue = {
        login, loggedIn, logout, direction, directions, idSet, id, phone, setphone,googleUser,googleuser,googleuserOut

    };
    return <AuthContext.Provider value={authContextValue} {...props} ></AuthContext.Provider >
}


const useAuth = () => useContext(AuthContext);


export { useAuth, AuthProvider };