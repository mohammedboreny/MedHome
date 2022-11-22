import React from 'react'
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from '../../CurrentUserContext';
import { loadGapiInsideDOM } from "gapi-script";


const clientID = '1084259004154-f6s449bespfc5otl96o0vkr5qpd7p43j.apps.googleusercontent.com';

function ByGoogle() {
    const { loggedin,login,idSet } = useAuth();

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser', res.profileObj)
        login();
        
    }
    const onFailure = (res) => {
        console.log('[Login failed] currentUser',res)
    }

    useEffect(() => {
        (async () => {
          await loadGapiInsideDOM();
        })();
      });

  return (
      <div>
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