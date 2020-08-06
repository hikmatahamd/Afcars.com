import React, {useContext, useState} from 'react';
import {Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import './Navbar.css';
import mainLogo from '../assets/logo.jpg';
import close_icon from  '../assets/close.svg';
import traffic_icon from  '../assets/traffic.png';
import {Modal} from 'react-bootstrap';


export default function Navbar(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { userData ,setUserData} =useContext(UserContext);
  const logout=()=>{
    setUserData({
      token:undefined,
      user:undefined,
    });
    localStorage.setItem("auth-token","");
  }
  
 
  return(
    <div className="container ">
      
    <div className="line">
      App will release soon
      {userData.user?(

        <div className="dropdown" style={{float:"right"}}>
                <button className=" btn-primary-outline" style={{border:"0px"}}>
                  {userData.user.username}  &nbsp;
                   <i className="fa fa-caret-down" style={{color:"black"}}></i> </button>
      
            <div>
              
               
               <Link to="/dashboard" >Dashboard</Link>
               <Link to="/car" onClick={logout}>LogOut</Link>
           </div>
        </div>
      ):(
    <>
     <button className="btn btn-primary-outline" onClick={handleShow} style={{float:"right"}}>Sign in</button>
    </>
    )}
    {/* <Modal /> */}
        {/* // <button className="btn btn-primary-outline" onClick={() => setShowText(!showText)} style={{float:"right"}}>Sign in</button> */}
    <Modal id="model-id" show={show} onHide={handleClose}>
     <div className="modal-header">
          <div className="sign-in-header">
             <img src={traffic_icon} alt="traffic"/>
          <div>
          <b>Welcome back,</b>
           <span>sign in:</span>
       </div>
         </div>
         <button aria-label="Close" onClick={handleClose}  className="close" data-dismiss="modal" type="button">
                 <img src={close_icon} alt="closebutton"/>
               </button>
             </div>
             <div className="modal-body">
            <Link to="/sign-in" onClick={handleClose}  className="sign-in-btn phone"  >
              <i className="fa fa-phone"></i>
              Sign in with Phone
            </Link>
            <a href="https://web.facebook.com" onClick={handleClose} className="sign-in-btn facebook">
              <i className="fa fa-facebook"></i>
              Sign in with Facebook
            </a>
            <Link to="/useremail" onClick={handleClose} className="sign-in-btn email">
              <i className="fa fa-envelope"></i>
              Sign in with Email
            </Link>
            <div className="an-account">
              <span>Don't have an account?</span>
              <Link to="/sign-up" onClick={handleClose}>Sign Up</Link>
            </div>
         </div>
  </Modal> 
      </div>
      
           <nav className="navbar navbar-expand-xl navbar-light bg-light ">
              <Link to="/"><img src={mainLogo} alt="NavbarLogo" style={{width:"110px"}}/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#iconbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
 
                <div className="collapse navbar-collapse" id="iconbar">
                 <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">  
                      <Link className="navbar-brand ml-5"  to="/sidebar">Cars</Link> 
                    </li>
                    <li className="nav-item">
                      <Link className="navbar-brand ml-5" to="/bikes">Bikes</Link>
                    </li>
                    <li  className="nav-item">
                      <Link className="navbar-brand ml-5" to="/trucks">Trucks</Link>
                    </li>
                    <li  className="nav-item">
                       <Link className="navbar-brand ml-5" to="/parts">AutoParts</Link>
                    </li>
                    <li  className="nav-item">
                      <Link className="navbar-brand ml-5" to="/blogs">Blogs</Link>
                    </li>
                    <li  className="nav-item">
                       <Link className="navbar-brand ml-5" to="/contact">Contact us</Link>
                    </li > 
     
    </ul>
    <div className="dropdown">
    <Link className="btn" to="/post_an_ad">Post an Ad  &nbsp;
    <i className="fa fa-caret-down" style={{color:"white"}}></i> 
    </Link>
        <div>
           <Link to="/post_and_ad_vehicles">Sell Car</Link>
           <Link to="/post_and_ad_bikes"> Sell Bike</Link>
           <Link to="/post_and_ad_trucks"> Sell Truck</Link>
           <Link to="/post_and_ad_parts"> Sell Parts</Link>
       </div>
    </div>
  
   
   
   </div>
   </nav>


   
   </div>
  )
}

