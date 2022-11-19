
import Home from './UserPages/Home/Home';
import Services from './UserPages/Services/ServicesPage';
import About from './UserPages/About/About';
import ContactUs from './UserPages/ContactUs/ContactUs';
import ServicePro from './UserPages/ServiceProvider/ServicePro';

import './index.css'
import Login from './UserPages/Login/Login';
import Signup from './UserPages/Signup/Signup';
import { useAuth } from './CurrentUserContext'
import {AuthenticatedRoutes,UnauthenticatedRoutes} from "./routes"
function App() {

  const { loggedIn } = useAuth();

  return loggedIn? <AuthenticatedRoutes/>:<UnauthenticatedRoutes/>

  return (
    <div >

    </div>
  );
}

export default App;
