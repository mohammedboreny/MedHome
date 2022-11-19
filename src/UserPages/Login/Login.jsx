import React from 'react';
import LoginForm from '../../Components/AuthForms/LoginForm';
import { useAuth } from '../../CurrentUserContext';
import { Navigate  } from "react-router-dom";

const Login = () => {
  const { loggedIn } = useAuth()
  
  return loggedIn? (

      <div >
          <Navigate  to ="/"/>
    </div>
  ) : (
    <div >
    <LoginForm/>
</div>
  )
}

export default Login