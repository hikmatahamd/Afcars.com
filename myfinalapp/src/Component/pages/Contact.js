import React, { Component } from 'react';
import './Contact.css';
class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            useremail:'',
            userphonenumber:'',
            userdescription:''
          }
    }
    handleDescriptionChange=(event)=>{
        this.setState({
            userdescription:event.target.value
        })
    }
    handleUserNameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleUserEmailChange=(event)=>{
        this.setState({
            useremail:event.target.value
        })
    }
    handleUsePhoneNumberChange=(event)=>{
        this.setState({
            userphonenumber:event.target.value
        })
    }
    render(){
        return (
            <div>
                <h1 className="contact-header text-center">ANY QUESTIONS? CONTACT US NOW!</h1>
                <h3 className="contact-desc text-center">AFcars.com is the first automotive classifieds website in Afghanistan.
                 If you have any question or issue regarding our website, please contact us here. 
                 If you have any enquiry regarding us, please contact us here.
                 If you want to advertise on AFcars.com, please contact us here.</h3>
                 <div className="sign-up">
                 <div className="sign-up-form">
                         <form id="new_user" className="simple_form new_user" onSubmit={this.handleSubmit}>
                             <div className="input-animate-wrapp">
                                 <div className="input string required user_name">
                                     
                                     <input className="string required animate" value={this.state.username}
                                      onChange={this.handleUserNameChange} placeholder="Name" require="require" 
                                      aria-required="true" type="text" name="user[name]" id="user_name"/>
                                 </div>
                            
                             </div>
                             <div className="input-animate-wrapp">
                                 <div className="input email optional user_email">
                                   
                                     <input className="string email optional animate"
                                     value={this.state.useremail} onChange={this.handleUserEmailChange}
                                     data-parsley-validate-if-empty="true" placeholder="Email" aria-required="true" type="email" name="user[email]" id="user_email"/>
                                 </div>
                             </div>
                             <div className="input-animate-wrapp">
                                    <label className="string optional form-label phone-label" for="user_Phone number">
                                        Phone Number
                                    </label>
                                    <div className="input string optional user_login">
                                        <div className="intl-tel-input allow-dropdown">
                                            <div className="flag-container">
                                                <div className="selected-flag" 
                                                  >
                                                    <div className="iti-flag af"></div>
                                                    
                                                </div>
                                              
                                            </div>
                                            <input className="string optional animate phone-input" 
                                            value={this.state.userphonenumber} onChange={this.handleUsePhoneNumberChange}
                                            type="tel" 
                                             placeholder="07X XXX XXXX"/>
                                        </div>
                                    </div>
                                
                                </div>
                                <div className="form-unit form-unit-post-ad">
                                <div className="new-ad-container">
                               
                                    <div className="editable-field-wrapp fluid input-animate-wrapp input-description">
                                    
                                        <div className="input text required listing_description">
                                            {/* <label className="text required form-label" for="listing-description">
                                            Description
                                            </label> */}
                                            <textarea className="text required animate af-text-area" id="listing-description" 
                                            value={this.state.userdescription} onChange={this.handleDescriptionChange} 
                                            data-parsley-group="details-about-car" maxLength="1000" placeholder="Write your Messege"
                                            required="required" aria_required="true" name="listing[description]"></textarea>
                                            {/* error message here  */}
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                                <input type="submit" name="commit" value="Send" data-disable-with="Sign Up" className="af-btn lg red"/>

                         </form>
                         
                         
                         </div>
                 </div>
            </div>
        )
    }
}
export default Contact;