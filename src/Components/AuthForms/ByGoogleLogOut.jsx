import React ,{useEffect,useState} from "react";
import { useAuth } from "../../CurrentUserContext";
// import { loadGapiInsideDOM } from "gapi-script";
import { GoogleLogout } from "react-google-login";
import { NavLink } from "react-bootstrap";
import Swal from 'sweetalert2'
import { Navigate } from "react-router-dom";


const ByGoogleLogOut = () => {
    const [isHover, setIsHover] = useState(false);
    const { setgoogleUser, logout, setLoggedIn, googleuserOut } = useAuth();
  
 
    const clientId = '1084259004154-f6s449bespfc5otl96o0vkr5qpd7p43j.apps.googleusercontent.com'
    const Logout = () => {


        googleuserOut();
        logout();
     
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Signed out successfully',
          showConfirmButton: false,
          timer: 1500
        })
        
       
       
        // alert('Logout made successfully');
        

    };
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
     };
    return (
        <GoogleLogout
            render={renderProps => (
                <NavLink onClick={renderProps.onClick} disabled={renderProps.disabled}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={(isHover ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                   Log Out
                </NavLink>
          )}
            clientId={clientId}
            
            buttonText="Logout"
            onLogoutSuccess={Logout}
        >
        </GoogleLogout>)
};
export default ByGoogleLogOut