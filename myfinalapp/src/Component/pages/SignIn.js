import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import name_icon from '../assets/name.svg';
import phone_icon from '../assets/phone.svg';

import passwordKey_icon from '../assets/passwordKey.svg';
import './SignIn.css';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"",
            phoneNumber:"",
            password:"",
            check:""
         }
    }
    handleUserNameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handlePhoneNumberChange=(event)=>{
        this.setState({
            phoneNumber:event.target.value
        })
    }
    handlePasswordChange=(event)=>{
        this.setState({
           password:event.target.value
       })
        }
        handleCheckedChange=(event)=>{
            this.setState({
                check:event.target.checked
            })
        }
        handleSubmit=(event)=>{
            // alert(`${this.state.phoneNumber} ${this.state.password} ${this.state.check}`)
            event.preventDefault()

            const signIn={
                username:this.state.username,
                phoneNumber:this.state.phoneNumber,
                password:this.state.password,
                check:this.state.check
            }
            console.log(signIn);

            axios.post('http://localhost:5000/sign-in/add',signIn)
            .then(res=>console.log(res.data));
            
            window.location='/';
        }
    render() { 
        return (   
            <div className="sign-in">
                <div className="sign-in-form">
                    <h1><b>Welcome back,</b>
                    <span> Sign In</span>
                    </h1>
                </div>
                <div className="tab-content">
                    <div aria-labelledby="user" className="tab-pane fade show active" id="pills-user" role="tabpanel">
                        <div className="sign-in-form">
                            <form id="login_user" className="simple_form new_user" onSubmit={this.handleSubmit}>
                                <div className="input-animate-wrapp">
                                    <div className="input string required user_name">
                                        <input className="string required animate" value={this.state.username}
                                        onChange={this.handleUserNameChange} placeholder="Name" required="required"  
                                        aria-required="true" type="text" name="user[name]" id="user_name"/>
                                    </div>
                                    <img src={name_icon} alt="name-icon"/>
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
                                            value={this.state.userphonenumber} onChange={this.handlePhoneNumberChange}
                                            type="tel" required="required" 
                                             placeholder="07X XXX XXXX"/>
                                        </div>
                                        <img src={phone_icon} alt="phone"/>
                                    </div>
                                    
                                </div>
                                <div className="input-animate-wrapp">
                                    <div className="input password required user_password">
                                        <input className="password required animate" value={this.state.value} onChange={this.handlePasswordChange}
                                         placeholder="Enter your password" required="required" 
                                        aria-required="true" type="password" name="user[password]" id="user_password"/>
                                    </div>
                                    <img src={passwordKey_icon} alt="password"/>
                                </div>
                                <div className="form-options">
                                    <div className="own-checkbox">
                                        <input type="checkbox" value={this.state.check} onChange={this.handleCheckedChange} 
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
         );
    }
}
 
export default SignIn;