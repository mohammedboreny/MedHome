import React from 'react'
import { useAuth } from "../../CurrentUserContext";
import OrdersUser from '../../Components/orders/OrdersUser'
const Profile = () => {
  let { id } = useAuth();
  let Userinfo =JSON.parse(localStorage.getItem(id));

  console.log(Userinfo);
  return (
    <>
      <h2 className='text-center pb-5'>Your information </h2>
      <div className='container justify-content-center'> 
        <div className="row">
      <div className="col">
       <h3> <span className='fs-3'>first Name:</span> { Userinfo.firstName }</h3>   
      </div>
      <div className="col">
       <h3> <span className='fs-3'>Last Name:</span> { Userinfo.lastName }</h3>
      </div>
        </div>
        <br />
      <div className="col">
     <h3> <span className='fs-3'>Email:</span> {Userinfo.email}</h3>
     
        </div>
<OrdersUser/>
      </div>
      </>
  )
}

export default Profile