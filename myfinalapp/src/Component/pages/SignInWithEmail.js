import React, { useState , useContext} from 'react';
import UserContext from '../../context/UserContext';
import {Link } from 'react-router-dom';
import Axios from 'axios';
import name_icon from '../assets/name.svg';
import email_icon from '../assets/email.svg';

import passwordKey_icon from '../assets/passwordKey.svg';
import './SignIn.css';
import ErrorNotice from '../misc/ErrorNotice';
export default function SignInWithEmail(){
    const [username,setUserName] = useState();
    const [useremail,setUserEmail] = useState();
    const [userpassword,setUserPassword] = useState();
    const [check,setCheck] = useState();
    const [error,setError] = useState();
    const {setUserData} = useContext(UserContext);

    const submit =async (e)=>{
        e.preventDefault();
        //the object we want to send
        try{
        const loginUser={username,useremail,
         userpassword,check}; 
         
           const loginRes = await Axios.post(
               "http://localhost:5000/users/login",
               loginUser
               );
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
        <div className="sign-in">
        <div className="sign-in-form">
            <h1><b>Welcome back,</b>
            <span> Sign In</span>
            </h1>
            {error && <ErrorNotice message={error} clearError={()=>setError(undefined)}/>}
        </div>
        <div className="tab-content">
            <div aria-labelledby="user" className="tab-pane fade show active" id="pills-user" role="tabpanel">
                <div className="sign-in-form">
                    <form id="login_user" className="simple_form new_user" onSubmit={submit} >
                        <div className="input-animate-wrapp">
                            <div className="input string required user_name">
                                <input className="string required animate" 
                                onChange={(e)=>setUserName(e.target.value)} 
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
                              aria-required="true" type="email" name="user[email]"  id="user_email"/>
                         </div>
                         <img src={email_icon} alt="name-icon"/>
                     </div>
                        <div className="input-animate-wrapp">
                            <div className="input password required user_password">
                                <input className="password required animate" 
                               onChange={(e)=>setUserPassword(e.target.value)} 
                                 placeholder="Enter your password" 
                                aria-required="true" type="password" name="user[password]" id="user_password"/>
                            </div>
                            <img src={passwordKey_icon} alt="password"/>
                        </div>
                        <div className="form-options">
                            <div className="own-checkbox">
                                <input type="checkbox" 
                               onChange={(e)=>setCheck(e.target.check)} 
                                name="user[remember_me]" />
                                <label for="user_remember_me"> Remember Me</label>
                            </div>
                            <a href="link">Forgot Password?</a>
                        </div>
                        <input type="submit" name="commit" value="Sign In" className="af-btn lg red"/>
                    </form>
                </div>
            </div>
            <div className="an-account">
                <span>Don't have an account?</span>
                <Link to="/sign-up" style={{color:"black"}}>Sign Up</Link>
            </div>
            
        </div>
        
    </div>
    )
}
// class SignIn extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             username:"",
//             useremail:"",
//             password:"",
//             check:""
//          }
//     }
//     handleUserNameChange=(event)=>{
//         this.setState({
//             username:event.target.value
//         })
//     }
//     handleUserEmailChange=(event)=>{
//         this.setState({
//             useremail:event.target.value
//         })
//     }
//     handlePasswordChange=(event)=>{
//         this.setState({
//            password:event.target.value
//        })
//         }
//         handleCheckedChange=(event)=>{
//             this.setState({
//                 check:event.target.checked
//             })
//         }
//         handleSubmit=(event)=>{
//             // alert(`${this.state.phoneNumber} ${this.state.password} ${this.state.check}`)
//             event.preventDefault()

//             const signIn={
//                 username:this.state.username,
//                 useremail:this.state.useremail,
//                 password:this.state.password,
//                 check:this.state.check
//             }
//             console.log(signIn);

//             axios.post('http://localhost:5000/sign-in/add',signIn)
//             .then(res=>console.log(res.data));
            
//             window.location='/';
//         }
//     render() { 
//         return (   
            // <div className="sign-in">
            //     <div className="sign-in-form">
            //         <h1><b>Welcome back,</b>
            //         <span> Sign In</span>
            //         </h1>
            //     </div>
            //     <div className="tab-content">
            //         <div aria-labelledby="user" className="tab-pane fade show active" id="pills-user" role="tabpanel">
            //             <div className="sign-in-form">
            //                 <form id="login_user" className="simple_form new_user" onSubmit={this.handleSubmit}>
            //                     <div className="input-animate-wrapp">
            //                         <div className="input string required user_name">
            //                             <input className="string required animate" value={this.state.username}
            //                             onChange={this.handleUserNameChange} placeholder="Name" required="required"  
            //                             aria-required="true" type="text" name="user[name]" id="user_name"/>
            //                         </div>
            //                         <img src={name_icon} alt="name-icon"/>
            //                     </div> 
            //                     <div className="input-animate-wrapp">
            //                      <div className="input email optional user_email">
            //                          <input className="string email optional animate"
            //                          value={this.state.useremail} onChange={this.handleUserEmailChange}
            //                           placeholder="Email"
            //                           aria-required="true" type="email" name="user[email]" required="required" id="user_email"/>
            //                      </div>
            //                      <img src={email_icon} alt="name-icon"/>
            //                  </div>
            //                     <div className="input-animate-wrapp">
            //                         <div className="input password required user_password">
            //                             <input className="password required animate" value={this.state.value} onChange={this.handlePasswordChange}
            //                              placeholder="Enter your password" required="required" 
            //                             aria-required="true" type="password" name="user[password]" id="user_password"/>
            //                         </div>
            //                         <img src={passwordKey_icon}/>
            //                     </div>
            //                     <div className="form-options">
            //                         <div className="own-checkbox">
            //                             <input type="checkbox" value={this.state.check} onChange={this.handleCheckedChange} 
            //                             name="user[remember_me]" />
            //                             <label for="user_remember_me"> Remember Me</label>
            //                         </div>
            //                         <a href="#">Forgot Password?</a>
            //                     </div>
            //                     <input type="submit" name="commit" value="Sign In" className="af-btn lg red"/>
            //                 </form>
            //             </div>
            //         </div>
            //         <div className="an-account">
            //             <span>Don't have an account?</span>
            //             <Link to="/sign-up" style={{color:"black"}}>Sign Up</Link>
            //         </div>
                    
            //     </div>
                
            // </div>
//          );
//     }
// }
 
// export default SignIn;   