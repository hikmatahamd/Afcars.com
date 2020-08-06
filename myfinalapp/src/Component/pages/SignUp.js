import React, { useState,useContext } from 'react';
import UserContext from '../../context/UserContext';
// import {useHistory } from "react-router-dom";
// import {Link } from 'react-router-dom';
// import axios from 'axios';
import './SignUp.css';
import name_icon from '../assets/name.svg';
import email_icon from '../assets/email.svg';
import phone_icon from '../assets/phone.svg';
import passwordKey_icon from '../assets/passwordKey.svg';
import Axios from 'axios';
import ErrorNotice from '../misc/ErrorNotice';

export default function SignUp(){
    const [username,setUserName] = useState();
    const [useremail,setUserEmail] = useState();
    const [userphonenumber,setUserPhoneNumber] = useState();
    const [userpassword,setUserPassword] = useState();
    const [userconformpassword,setUserConformPassword] = useState();
    const [useragree] = useState();
    const [error,setError] = useState();
    const {setUserData} = useContext(UserContext);
    // const histroy =useHistory();
    const submit =async (e)=>{
       e.preventDefault();
       try{
       //the object we want to send
       const newUser={username,useremail,userphonenumber,
        userpassword,userconformpassword,useragree}; 
        //we need axios to send the object
        await Axios.post(
            "http://localhost:5000/users/register",newUser
        );
          const loginRes = await Axios.post(
              "http://localhost:5000/users/login",{
               useremail,
               userpassword, 
              });
              setUserData({
                token:loginRes.data.token,
                user:loginRes.data.user,
            });
            localStorage.setItem("auth-token",loginRes.data.token);
            window.location='/';
        }
        catch(err){
            err.response.data.msg && setError(err.response.data.msg);
        }
        };
          
        
    return(
        <div className="sign-up sign-up-partner">
        <div className="sign-up-form">
            <h1>Create a FREE Account</h1>
            {error && <ErrorNotice message={error} clearError={()=>setError(undefined)}/>}
            </div>   
            <div className="tab-content">
                <div aria-labelledby="user" className="tab-pane fade show active" id="pills-user" 
                role="tabpanel">
                    <div className="sign-up-form">
                    
                    <form id="new_user" className="simple_form new_user" onSubmit={submit}>
                        <div className="input-animate-wrapp">
                            <div className="input string required user_name">
                                <input className="string required animate" onChange={(e)=>setUserName(e.target.value)} 
                                 placeholder="Name"   
                                 aria-required="true" type="text" name="user[name]" id="user_name"/>
                            </div>
                            <img src={name_icon} alt="name-icon"/>
                        </div>
                        <div className="input-animate-wrapp">
                            <div className="input email optional user_email">
                                <input className="string email optional animate"
                                onChange={(e)=>setUserEmail(e.target.value)} 
                                 placeholder="Email"
                                 aria-required="true" type="email" name="user[email]"
                                   id="user_email"/>
                            </div>
                            <img src={email_icon} alt="name-icon"/>
                        </div>
                        <div className="input-animate-wrapp">
                               <label className="string optional form-label phone-label" for="user_Phone number">
                                   Phone Number
                               </label>
                               <div className="input string optional user_login">
                                   <div className="intl-tel-input allow-dropdown">
                                       <div className="flag-container">
                                           <div className="selected-flag">
                                               <div className="iti-flag af"></div>
                                           </div>
                                         
                                       </div>
                                       <input className="string optional animate phone-input" 
                                       onChange={(e)=>setUserPhoneNumber(e.target.value)} 
                                       type="tel"
                                        placeholder="07X XXX XXXX"/>
                                   </div>
                                   <img src={phone_icon} alt="phone"/>
                               </div>
                               
                           </div>
                           <div className="input-animate-wrapp">
                               <div className="input password required user_password">
                                   <input className="password required animate"
                                   onChange={(e)=>setUserPassword(e.target.value)} 
                                   placeholder="Enter your password"  aria-required="true"
                                    type="password" name="user[password]" id="user_password"/>
                               </div>
                               <img src={passwordKey_icon} alt="password"/>
                           </div>
                           <div className="input-animate-wrapp">
                               <div className="input password required user_password_confirmation">
                                   <input className="password required animate" 
                                   onChange={(e)=>setUserConformPassword(e.target.value)} 
                                   placeholder="Enter your password"  aria-required="true" 
                                    type="password" 
                                   name="user[password_confirmation]" 
                                   id="user_password_confirmation" />

                               </div>
                               <img src={passwordKey_icon} alt="password"/>
                           </div>
                           {/* <div className="own-checkbox own-terms">
                               <div className="input boolean optional user_terms">
                                   <input name="user[terms]" type="hidden"   />
                                   <input className="boolean optional"  
                                   onChange={(e)=>setUserAgree(e.target.checked)} 
                                   name="user[terms]" id="user_terms" />
                                   <label className="boolean optional form-label" for="user_terms">I agree with the</label>
                               </div>
                               <a href="no link" >terms & Conditions</a>
                           </div> */}
                           <input type="submit" name="commit" value="Sign up" data-disable-with="Sign Up" className="af-btn lg red"/>

                    </form>
                    <div className="divider">
                        <span>or</span>
                    </div>
                    <a href="https://web.facebook.com" className="facebook-sign-in">
                        <i className="fa fa-facebook"> &nbsp;</i>
                         Sign in with Facebook
                    </a>
                    </div>
                </div>
                {/* <div className="an-account">
                   <span>Already have an account?</span>
                   <a href="#">Sign In</a>
               </div> */}
            </div>
       </div>
        

    );
}
