import React from 'react'
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from '../../CurrentUserContext';
import { loadGapiInsideDOM } from "gapi-script";
import { Navigate, redirect, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'


// Google auth 2.0 api key 
const clientID = '1084259004154-f6s449bespfc5otl96o0vkr5qpd7p43j.apps.googleusercontent.com';

function ByGoogle() {
    const { loggedin, login, idSet, googleuser } = useAuth();
    const nav=useNavigate()
    // Success and Failure functions
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser', res.profileObj)
        googleuser();
        login();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Signed in succesfully',
            showConfirmButton: false,
            timer: 2000,
            showClass:{
                popup: 'swal2-show',
                backdrop: 'swal2-backdrop-show',
                icon: 'swal2-icon-show'
              }
        })
        nav('/');
        
      

    }
    const onFailure = (res) => {
        console.log('[Login failed] currentUser', res)
    }

    //  to confirm certificate the connection with the google api
    useEffect(() => {
        (async () => {
            await loadGapiInsideDOM();
        })();
    });

    return (
        <div className='pt-2'>
            {/* Google login Component attributes editing */}
            <GoogleLogin
                clientId={clientID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />


        </div>
    )
}

export default ByGoogle