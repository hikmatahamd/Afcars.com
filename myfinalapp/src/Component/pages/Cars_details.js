// import React, { Component } from 'react';

// import "./Cars_details.css";
// // import NewCard from "./NewCard";
// // import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// // import $ from 'jquery';
// // import {withRouter } from 'react-router-dom';
// import download4 from '../assets/whitecar1.jpg';
// import download5 from '../assets/whitecar2.jpg';
// // import download6 from '../assets/dara_thumb.jpeg';
// import download7 from '../assets/profile.jpg';
//  import whatsapp_img from '../assets/whatsapp.svg';
// //  import main_image from '../assets/whitecar1.jpg'; 
// //  import side_img1 from '../assets/second-img.jpeg'; 
//  import side_img2 from '../assets/whitecar3.jpg'; 
//  import side_img3 from '../assets/whitecar4.jpg'; 
//  import Engine from '../assets/Engine.svg'; 
//  import Gare_box from '../assets/Gare-box.svg'; 

//  import Mileage from '../assets/Mileage.svg';
//  import Year from '../assets/Year.svg'; 
//  import Body_type from '../assets/body-type.svg'; 
//  import Fule_type from '../assets/Fule-type.svg'; 
//  import year_con from '../assets/Year-con.svg'; 
//  import Drive_type from '../assets/Drive-type.svg'; 
//  import Used_cars from '../assets/User-car.svg'; 
//  import promote_button from '../assets/Promote.svg'; 
// //  import clock1 from '../assets/clock.svg'; 
// //  import eye1 from '../assets/Eye.svg'; 
// //  import Flag from '../assets/Flags.png'; 
//  import viber from '../assets/viber.svg'; 

// class Cars_details extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             username:'',
//             email:'',
//             comments:'',
//             MakeOfferName:'',
//             MakeOfferPrice:'',
//             MakeOfferEmail:'',
//             cardetails: []
//         };
//         this.handleBack=this.handleBack.bind(this)
//         // this.handleImage=this.handleImage.bind(this)
//         this.handleSecond_img=this.handleSecond_img.bind(this)
//         this.handleFirst_img=this.handleFirst_img.bind(this)
//     }
//     // handleImage=()=>{
//     //     let Apple=document.getElementById("Apple").show
        
//     // }
//     handleBack=()=>{
//         this.props.history.goBack();
//     }
    
//     handleFirst_img=()=>{
//         document.getElementById("first-img-id").style.display="block";
//     }
//     handleSecond_img=()=>{
//         // document.getElementById("first-img-id").style.display="none";
//         document.getElementById("second-img-id").style.display="block";
//         // document.getElementById("second-img-id").style.display="block";
//         // alert("image alert");
//     }
//     handleUsernameChange=(event)=>{
//         // any time we change the value it will be chapture by the event.target.value
//         //we are making controled component for forms
//         this.setState({
//             username:event.target.value
//         });   
//         }

//     handleEmailChange=(event)=>{
//         this.setState({
//         email:event.target.value
//     })
//         }
//     handleCommentChange=(event)=>{
//         this.setState({
//            comments:event.target.value
//        })
//         }
//         handleSubmit=(event)=>{
//             alert(`${this.state.username} ${this.state.email} ${this.state.comments}`)
//             event.preventDefault()
//         }
//         handleMakeOfferName=(event)=>{
//             this.setState({
//                 MakeOfferName:event.target.value
//             })
//         }
//         handleMakeOfferPrice=(event)=>{
//             this.setState({
//                 MakeOfferPrice:event.target.value
//             })
//         }
//         handleMakeOfferEmail=(event)=>{
//             this.setState({
//                 MakeOfferEmail:event.target.value
//             })
//         }
//         componentWillMount() {
//             fetch('http://localhost:5000/new-ad-post/')
//               .then(res => res.json())
//               .then(data => this.setState({ cardetails: data }));
//           }
       
//     render() { 
//         // const some =this.state.cardetails.map(cardetail=>(
//         //     <div key={cardetail._id}>
                
//         //        <h2> {cardetail.brandname}</h2>
//         //        <h1>this is some text and why its not showing </h1>
//         //         <h1>{cardetail.vehicalprice}</h1>
                

//         //     </div>
//         ))
//         console.log(this.props.match.params.id);
//         return ( 
//              <React.Fragment>
                
               
//             <div className="ads-back">
//                 <div className="container">
//                     <div className="row align-items-center">
//                         <div className="col-lg-6">
//                           <div className="nav-wrapper">
//                               <button name="button" type="submit" className="return-search" id="back-button" onClick={this.handleBack}>
//                                 <i className="fa fa-search"></i>Return back
//                               </button>
//                             </div>
//                             <div className="ad-title-block">
//                                 <div className="ad-title">
        
//         {/* <h2>{this.brandname}{this.cardetails.vehicalprice}1</h2> */}
//                                      <span><i className="fa fa-map-marker"></i>Kabul afghanistan</span>
//                                 </div>
//                             </div>
//                          </div>
//                          <div className="col-lg-6 desktop-banner">
//                             <div className="banner"></div>
//                          </div>
//                     </div>
//                     <div className="row items">
//                        <div className="col-sm-8 col-lg-8 col-xl-9 mb-20">
//                              <div className="carousel-wrapper" >
//                                 <div className="slick-preloader" style={{display:"none"}}>
//                                  <img src={download4} alt="no vehicale listing"/>
//                              </div>
//                              <div className="outer_container" style={{flex:"0 0 85%", border:"solid black 1px"}}>
//                                  <div className="slick-list1">
//                                     <div id="first-img-id" style={{width:"100%"}}>
//                                      <img  src={`https://source.unsplash.com/random/`} alt="..6."/>
//                                      </div>
//                                       <div id="second-img-id" style={{width:"100%",display:"none"}}>
//                                      <img  src={download4} alt=".5.."/>
//                                     </div>
//                                    </div>
//                               </div>
//                                    <div className="slider-nav slick-initialized slick-slider slick-vertical">
//                                             <div className="slick-list draggable" style={{height:"300px"}}>
//                                                 <div className="slick-track" style={{opacity:"1",height:"200px",transform:"translate3d(0px,0px,0px)"}}>
//                                                    < div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width:"73px"}}>
//                                                         <div>
//                                                             <div style={{width:"100%"}}>
//                                                                 <img onClick={this.handleFirst_img}  data-src={download5} data_thumb={download5} src={download5} alt="4."/>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     < div className="slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" style={{width:"73px"}}>
//                                                         <div>
//                                                             <div style={{width:"100%",display:"inline-block"}}>
//                                                                 <img  onClick={this.handleSecond_img} src={side_img2} alt="3"/>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     < div className="slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" style={{width:"73px"}}>
//                                                         <div>
//                                                             <div style={{width:"100%",display:"inline-block"}}>
//                                                                 <img  src={side_img2} alt="1"/>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     < div className="slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" style={{width:"73px"}}>
//                                                         <div>
//                                                             <div style={{width:"100%",display:"inline-block"}}>
//                                                                 <img  src={side_img3} alt="1"/>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                 </div>

//                                             </div>
//                                         </div>

//                         </div>
//                         <div className="ad-information">
//                             <div className="ad-info-container">
//                                 <div className="ad-info-wrapper">

//                                     <div className="responsive-wrapper">
//                                             <div className="ad-promote-btn" >
                            
//                                             <a className="af-btn promote-gold" style={{backgroundImage:`url(${promote_button})`,fontSize:"19px"}} href="ads heere">Promote</a>
//                                         </div>
//                                         <div className="ad-info-block report-btn" >
//                                             <a className="af-btn sm white"style={{fontSize:"19px"}} data-toggle="modal" data-target="#report_modal" href="Report add">Report this ad</a>
//                                         </div>
//                                     </div>
//                                     {/* <div className="responsive-wrapper">
//                                         <div className="ad-info-block">
//                                             <span>
//                                                 <img src={clock1} alt="clock"/>
//                                             </span>
//                                             <div className="ad-created-border">
//                                                 <span>Ad created</span>
//                                                 <span>February 10</span>
//                                             </div>

//                                         </div>
//                                         <div className="ad-info-block">
//                                             <span>
//                                                 <img src={eye1} alt="eyephoto"/>
//                                             </span>
//                                             <div >
//                                                 <span>
//                                                     Viewed
//                                                 </span>
//                                                 <span>
//                                                 132
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div> */}

//                                 </div>
//                                 <div className="ad-info-wrapper transfer-target">
//                                     <div className="contact-group">
//                                         <a className="af-btn" id="call-seller"href="tel:+971585038983">
//                                             <i className="fa fa-phone"></i>
//                                             <span>Call the seller</span>
//                                         </a>
//                                         <a className="af-btn" id="trigger-action" href="no link">
//                                             <i className="fa fa-commenting-o"></i>
//                                             <span>Send message</span>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
                        
//                         <div className="ad-about" style={{width:"100%"}}>
//                             <div className="ad-title down justify-content-md-start">
//                                 <h2>
//                                     <span>About</span>Toyota Corolla
//                                 </h2>
//                             </div>
//                             <div className="seller-phones">
//                                 <div className="phone-wrapper">
//                                     <i className="fa fa-phone"></i><span>+97158 503 8983</span>
//                                     <div className="d-flex">
//                                         <a className="show-whatsapp" href="https://www.whatsapp.com/">
//                                             <img src={whatsapp_img} alt="whatsapp_img" />
//                                         </a>
//                                         <a className="show-tel call" href="tel:+971585038983" >| Call</a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="vehicle-properties">
//                                 <div className="prop">
//                                     <img src={Engine} alt="props image1"/>
//                                     <div>
//                                         <span title="Engine">Engine</span>
//                                         <span title="N/A">N/A</span>
//                                     </div>
//                                 </div>
//                                 <div className="prop">
//                                     <img src={Gare_box} alt="props image1"/>
//                                     <div>
//                                         <span title="Gear-box">Gear-box</span>
//                                         <span title="N/A">Manual</span>
//                                     </div>
//                                 </div>
//                                 <div className="prop">
//                                     <img src={Mileage} alt="props image1"/>
//                                     <div>
//                                         <span title="Engine">Mileage</span>
//                                         <span title="N/A">N/A</span>
//                                     </div>
//                                 </div>
//                                 <div className="prop">
//                                     <img src={Year} alt="props image1"/>
//                                     <div>
//                                         <span title="Engine">Year</span>
//                                         <span title="N/A">2020</span>
//                                     </div>
//                                 </div>
//                                 <div className="prop">
//                                     {/* <img src={Engine}/> */}
//                                     <div>
//                                         <span title="Engine">color</span>
//                                         <span title="N/A">Gray</span>
//                                     </div>
//                                 </div>
//                                 <div className="prop">
//                                     <img src={Body_type} alt="props image1"/>
//                                     <div>
//                                         <span title="Engine">Hatchback & Station Wagons</span>
//                                         <span title="N/A">N/A</span>
//                                     </div>
//                                 </div>
//                                 <div className="prop">
//                                     <img src={Fule_type} alt="props image1"/>
//                                     <div>
//                                         <span title="Engine">Fule Type</span>
//                                         <span title="N/A">Diesel</span>
//                                     </div>
//                                 </div>
//                                 <div className="prop">
//                                     <img src={year_con} alt="props image1"/>
//                                     <div>
//                                         <span title="Engine">Air Condition</span>
//                                         <span title="N/A">Yes</span>
//                                     </div>
//                                 </div>
//                                 <div className="prop">
//                                     <img src={Drive_type}alt=""/>
//                                     <div>
//                                         <span title="Engine">Drive Type</span>
//                                         <span title="N/A">Right</span>
//                                     </div>
//                                 </div>
//                                 <div className="prop">
//                                     <img src={Used_cars} alt=""/>
//                                     <div>
//                                         <span title="Engine">Condition</span>
//                                         <span title="N/A">Used</span>
//                                     </div>
//                                 </div>
                                

//                             </div>

                                        
//                           </div>
//                             <div className="ad-seller-comment">
//                                 <h3>Seller comment</h3>
//                                 <div className="comment-wrapper">
//                                 Toyota Corolla, 2020. 1.6 litre. Zero miles. Brand new. Import cost included
//                                 </div>
//                                 <div className="until-md-visible">
//                                 <div className="profile-seller">
//                                 <div className="wrapper">
//                                     <img src={download7} alt="...."/>
//                                         <div className="profile-data">
//                                             <h5>hikmat</h5>
//                                                 <a href="assing latter">Show all ads</a>
//                                                 <a className="mt-10" href="latter" data-target="#sign in model" data-toggle="model">write message</a>
//                                             </div>
//                                 </div>
//                                 <div className="call-seller-wrapper">
//                         <div className="seller-phones">
//                             <div className="header-seller-phones">
//                                 <div className="head">
//                                     Call the seller
//                                 </div>
                        
//                             </div>
//                             <div className="phone-wrapper-call-seller">
//                                     <span>+971585038983</span>
//                                     <div className="empty-div">
//                                         <a className="show-whatsapp" href="https://www.whatsapp.com/">
//                                             <img src={whatsapp_img} alt="whatsapp_img"/>
//                                         </a>
//                                         <a className="show-tel call" href="tel:+971585038983" >| Call</a>
//                                     </div>
//                                 </div>
//                         </div>
//                     </div>
//                                     </div>
//                             </div>
                            
//                             </div>
//                             {/* promote div here */}
//                             <div className="sell-car-banner afghanistan">
//                                 <div>
//                                 <p>Need to sell your car too?</p>
//                                 <p>We will help you!</p>
//                                 </div>
//                                 <a className="af-btn white" href="decide latter">Sell your car</a>
//                             </div>
//                             <div className="container">
//                             {/* <NewCard/> */}
//                             </div>

                        
//                      </div>
//                         <div className="md-hidden col-lg-4 col-xl-3" >
//                             <div className="back-wrapper">
//                             <div className="ad-info-wrapper position-relative">
//                                 <div className="ad-price">
//                                     <span className="price-wrap ">AFN</span>
//                                         <span className="price"> 17,000</span>
                                   
//                                 </div>
//                             </div>
//                             <div className="profile-seller">
//                                 <div className="wrapper">
//                                     <img src={download7} alt="...."/>
//                                     <div className="profile-data">
//                                         <h5>hikmat</h5>
                                        
//                                         <a href="assing latter">Show all ads</a>
//                                         <a className="mt-10" href="latter" data-target="#sign in model" data-toggle="model">write message</a>
//                                     </div>
//                                 </div>
//                                 <div className="call-seller-wrapper">
//                                     <div className="seller-phones">
//                                         <div className="header-seller-phones">
//                                             <div className="head">
//                                                 Call the seller
//                                             </div>
                                    
//                                         </div>
//                                         <div className="phone-wrapper-call-seller">
//                                                 <span>+971585038983</span>
//                                                 <div className="empty-div">
//                                                     <a className="show-whatsapp" href="https://www.whatsapp.com/">
//                                                         <img src={whatsapp_img} alt="whatsapp_img"/>
//                                                     </a>
//                                                     <a className="show-tel call" href="tel:+971585038983" >| Call</a>
//                                                 </div>
//                                             </div>
//                                     </div>
//                                 </div>

//                             </div>
//                             <div className="make-an-offer-form">
//                                 <h5><i className="fa fa-usd"></i> Make an offer</h5>
//                                 <form className="simple_form new_contact" >
//                                     <input  type="hidden" value="true"/>
//                                     <div className="field-price input-animate-wrapp simple">
//                                         <label for="lead_offered_price">Price</label>
//                                         <span className="currency">AFN</span>
//                                         <div className="input string required lead_offered_price">
//                                             <input  onChange={this.handleMakeOfferPrice} type="Number"/>
//                                         </div>
//                                     </div>
//                                     <div className="client-contacts" style={{display:"block"}}>
//                                         <div className="input-animate-wrapp simple">
//                                             <div className="input string required lead_user_name"       >
//                                                 {/* <label  className="string required form-label" for="lead_user_name">Name
//                                                 </label> */}

//                                                 <input onChange={this.handleMakeOfferName} placeholder="Name" className="string required animate" required="required" aria-required="true" type="text" name="lead[user_name]" id="lead_user_name"/>
//                                             </div>
//                                         </div>

//                                         <div className="input-animate-wrapp simple filled">
//                                             <div className="input email optional lead_email field_with_errors">
//                                                 {/* <label  className="email optional form-label" for="lead_email">Email
//                                                 </label> */}
//                                                 <input onChange={this.handleMakeOfferEmail} placeholder="Email" className="string email optional animate"    type="email" name="lead[email]" id="lead_email" data-parsley-id="29"/>
//                                                 {/* <span className="errors-list filled" id="parsley-id-29">
//                                                     <span className="errorText parsley-type">This value should be a valid email</span>
//                                                 </span> */}
//                                             </div>
//                                         </div>

//                                         <div className="input-animate-wrapp">
                                        
//                                             {/* <h1>this is some text</h1> */}
//                                              {/* <label className="tel optional form-label phone-label" for="lead_phone_number_attributes_Telephone">Telephone</label>
//                                             <div className="input tel required lead_phone_number_phone"> */}
//                                                 {/* <div className="intl-tel-input allow-dropdown">
//                                                     <div className="flag-container">
//                                                         <div className="selected-flag" role="combobox" aira-owns="country-listbox" tabindex="0" title="Afghanistan (‫افغانستان‬‎): +93">
//                                                             <div className="iti-flag af" style={{backgroundImage:`url(${Flag})`}}></div>
//                                                             <div className="iti-arrow"></div>

//                                                         </div>
//                                                         <ul className="country-list hide" id="country-listbox" aria-expanded="false" role="listbox" aria-activedescendant="iti-item-af">
//                                                             <li className="country preferred highlight" id="iti-item-us" role="option " data-dial-code="1" data-country-code="us" aria-selected="false">
//                                                                 <div className="flag-box">
//                                                                     <div className="iti-flag us " style={{backgroundImage:`url(${Flag})`}}>
//                                                                     </div>
//                                                                 </div>
//                                                                 <span className="country-name"> United States</span>
//                                                                 <span className="dial-code">+1</span>
//                                                             </li>

//                                                         </ul>
//                                                     </div>
//                                                 </div> 
//                                             </div>*/} 
//                                         </div>
//                                     </div>
//                                     <div className="submitButton">
//                                     <button type="submit">Submit</button>
//                                     </div>
//                                 </form>
//                             </div>
//                             <div className="contact-seller-form" id="contact-seller-anchor">
//                                 <h5>
//                                     <i className="fa fa-commenting-o"></i>
//                                     Send message to the seller
//                                 </h5>
//                                 <form className="simple_form new_contact" id="leads" onSubmit={this.handleSubmit}>
//                                     <div className="input-animate-wrapp simple filled" >
//                                         {/* <div className="input string required lead_user_name field_with_errors" aira-describledby="parsley-id-43"> */}
//                                         {/* <label className="string required form-label" for="name">Name   </label> */}
//                                     <input  placeholder="Name"type="text" required="required" value={this.state.username} onChange={this.handleUsernameChange}/>
//                                     {/* </div> */}
//                                     </div>

//                                     <div className="input-animate-wrapp simple filled">
//                                         {/* <div className="input string required lead_user_name field_with_errors" aira-describledby="parsley-id-43"> */}
//                                         {/* <label className="string required form-label" for="name">Name   </label> */}
//                                     <input placeholder="Email"type="Email" required="required" value={this.state.email} onChange={this.handleEmailChange}/>
//                                     {/* </div> */}
//                                     </div>

//                                     <div className="input-animate-wrapp simple form-label-message filled">
//                                       <div className="input text required lead_message"> 
//                                       <label className="text required form-label" for="listing-description">Write your message</label>
//                                     <textarea className="text required animate af-text-area" type="text-aria" rows="7" maxLength="1000" required="required"
//                                     value={this.state.comment} onChange={this.handleCommentChange}>
//                                         Hello, I am interested in your Toyota Corolla car in Badakhshan 
//                                         - Import - Dubai that I saw on AFCars.com. Can you please send me more details about it? Thanks.4</textarea>
                                    
//                                     </div>
//                                     </div>

//                                      <button type="submit">Submit</button>     
                                    
                                            
//                                 </form>

//                             </div>
//                             {/* social media work here */}
//                             <div className="share-networks text-center">
//                                 <h3>Share ad with your friends!</h3>
//                                 <nav>
//                                     <a className="fa fa-facebook" target="_blank" rel="noopener nofollow" href="www.facebook.com"> </a>
//                                     <a className="fa fa-twitter" target="_blank" rel="noopener nofollow" href="www.twitter.com"> </a>
//                                     <a className=" fa-viber" target="_blank" rel="noopener nofollow" href="www.viber.com"><img src={viber} alt="viber"/></a>
//                                     <a className="fa fa-whatsapp" target="_blank" rel="noopener nofollow" href="www.whatsapp.com"> </a>
                                    
//                                 </nav>
//                             </div>
//                             </div>            
//                         </div>
                       
//                 </div>
                
//             </div>
           
//             </div>
//         </React.Fragment>

//          );
//     }
// }
// //     const handleClick = () => {
// //         $('#back-button').on('click', function(){
// //         alert("this is back button pressed")
// //         });
        

// // }



 
// export default Cars_details;


// import React from 'react';
import "./Cars_details.css";
// import NewCard from "./NewCard";
// import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// import $ from 'jquery';
// import {withRouter } from 'react-router-dom';
import download4 from '../assets/whitecar1.jpg';
import download5 from '../assets/whitecar2.jpg';
// import download6 from '../assets/dara_thumb.jpeg';
import download7 from '../assets/profile.jpg';
 import whatsapp_img from '../assets/whatsapp.svg';
//  import main_image from '../assets/whitecar1.jpg'; 
//  import side_img1 from '../assets/second-img.jpeg'; 
 import side_img2 from '../assets/whitecar3.jpg'; 
 import side_img3 from '../assets/whitecar4.jpg'; 
 import Engine from '../assets/Engine.svg'; 
 import Gare_box from '../assets/Gare-box.svg'; 

 import Mileage from '../assets/Mileage.svg';
 import Year from '../assets/Year.svg'; 
 import Body_type from '../assets/body-type.svg'; 
 import Fule_type from '../assets/Fule-type.svg'; 
 import year_con from '../assets/Year-con.svg'; 
 import Drive_type from '../assets/Drive-type.svg'; 
 import Used_cars from '../assets/User-car.svg'; 
 import promote_button from '../assets/Promote.svg'; 
//  import clock1 from '../assets/clock.svg'; 
//  import eye1 from '../assets/Eye.svg'; 
//  import Flag from '../assets/Flags.png'; 
 import viber from '../assets/viber.svg';


// function Cars_details(props){
//     console.log(props.match.params.id);
// return <div>details page</div>
// }
// export default Cars_details;

import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import ImageGallery from 'react-image-gallery';
function Cars_details(props){
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
   const newAdId =props.match.params.newAdId
   const [newad,setNewAd]=useState([])
   
   useEffect(()=>{
        Axios.get(`http://localhost:5000/new-ad-post/?id=${newAdId}&type=single`)
        // Axios.get("http://localhost:5000/new-ad-post/")
        .then(response=>{
            setNewAd(response.data[0])
        })
    },[])
    
    return(
        <div>
            <h1>Cars_details</h1>
    <h2>text{newad.vehicalprice}</h2>
    <h1>new{newad.brandname}</h1>
    
<React.Fragment>
                
               
<div className="ads-back">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="nav-wrapper">
                  <button name="button" type="submit" className="return-search" id="back-button" >
                      {/* //onClick={this.handleBack}  */}
                    <i className="fa fa-search"></i>Return back
                  </button>
                </div>
                <div className="ad-title-block">
                    <div className="ad-title">

{/* <h2>{this.brandname}{this.cardetails.vehicalprice}1</h2> */}
                         <span><i className="fa fa-map-marker"></i>Kabul afghanistan</span>
                    </div>
                </div>
             </div>
             <div className="col-lg-6 desktop-banner">
                <div className="banner"></div>
             </div>
        </div>
        <div className="row items">
           <div className="col-sm-8 col-lg-8 col-xl-9 mb-20">
           <ImageGallery items={images} />;
                 {/* <div className="carousel-wrapper" >
                    <div className="slick-preloader" style={{display:"none"}}>
                     <img src={download4} alt="no vehicale listing"/>
                 </div>
                 <div className="outer_container" style={{flex:"0 0 85%", border:"solid black 1px"}}>
                     <div className="slick-list1">
                        <div id="first-img-id" style={{width:"100%"}}>
                         <img  src={`https://source.unsplash.com/random/`} alt="..6."/>
                         </div>
                          <div id="second-img-id" style={{width:"100%",display:"none"}}>
                         <img  src={download4} alt=".5.."/>
                        </div>
                       </div>
                  </div>
                       <div className="slider-nav slick-initialized slick-slider slick-vertical">
                                <div className="slick-list draggable" style={{height:"300px"}}>
                                    <div className="slick-track" style={{opacity:"1",height:"200px",transform:"translate3d(0px,0px,0px)"}}>
                                       < div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width:"73px"}}>
                                            <div>
                                                <div style={{width:"100%"}}>
                                                    <img onClick={this.handleFirst_img}  data-src={download5} data_thumb={download5} src={download5} alt="4."/>
                                                </div>
                                            </div>
                                        </div>
                                        < div className="slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" style={{width:"73px"}}>
                                            <div>
                                                <div style={{width:"100%",display:"inline-block"}}>
                                                    <img  onClick={this.handleSecond_img} src={side_img2} alt="3"/>
                                                </div>
                                            </div>
                                        </div>

                                        < div className="slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" style={{width:"73px"}}>
                                            <div>
                                                <div style={{width:"100%",display:"inline-block"}}>
                                                    <img  src={side_img2} alt="1"/>
                                                </div>
                                            </div>
                                        </div>
                                        < div className="slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" style={{width:"73px"}}>
                                            <div>
                                                <div style={{width:"100%",display:"inline-block"}}>
                                                    <img  src={side_img3} alt="1"/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

            </div> */}
            <div className="ad-information">
                <div className="ad-info-container">
                    <div className="ad-info-wrapper">

                        <div className="responsive-wrapper">
                                <div className="ad-promote-btn" >
                
                                <a className="af-btn promote-gold" style={{backgroundImage:`url(${promote_button})`,fontSize:"19px"}} href="ads heere">Promote</a>
                            </div>
                            <div className="ad-info-block report-btn" >
                                <a className="af-btn sm white"style={{fontSize:"19px"}} data-toggle="modal" data-target="#report_modal" href="Report add">Report this ad</a>
                            </div>
                        </div>
                        {/* <div className="responsive-wrapper">
                            <div className="ad-info-block">
                                <span>
                                    <img src={clock1} alt="clock"/>
                                </span>
                                <div className="ad-created-border">
                                    <span>Ad created</span>
                                    <span>February 10</span>
                                </div>

                            </div>
                            <div className="ad-info-block">
                                <span>
                                    <img src={eye1} alt="eyephoto"/>
                                </span>
                                <div >
                                    <span>
                                        Viewed
                                    </span>
                                    <span>
                                    132
                                    </span>
                                </div>
                            </div>
                        </div> */}

                    </div>
                    <div className="ad-info-wrapper transfer-target">
                        <div className="contact-group">
                            <a className="af-btn" id="call-seller"href="tel:+971585038983">
                                <i className="fa fa-phone"></i>
                                <span>Call the seller</span>
                            </a>
                            <a className="af-btn" id="trigger-action" href="no link">
                                <i className="fa fa-commenting-o"></i>
                                <span>Send message</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="ad-about" style={{width:"100%"}}>
                <div className="ad-title down justify-content-md-start">
                    <h2>
                        <span>About</span>Toyota Corolla
                    </h2>
                </div>
                <div className="seller-phones">
                    <div className="phone-wrapper">
                        <i className="fa fa-phone"></i><span>+97158 503 8983</span>
                        <div className="d-flex">
                            <a className="show-whatsapp" href="https://www.whatsapp.com/">
                                <img src={whatsapp_img} alt="whatsapp_img" />
                            </a>
                            <a className="show-tel call" href="tel:+971585038983" >| Call</a>
                        </div>
                    </div>
                </div>
                <div className="vehicle-properties">
                    <div className="prop">
                        <img src={Engine} alt="props image1"/>
                        <div>
                            <span title="Engine">Engine</span>
                            <span title="N/A">N/A</span>
                        </div>
                    </div>
                    <div className="prop">
                        <img src={Gare_box} alt="props image1"/>
                        <div>
                            <span title="Gear-box">Gear-box</span>
                            <span title="N/A">Manual</span>
                        </div>
                    </div>
                    <div className="prop">
                        <img src={Mileage} alt="props image1"/>
                        <div>
                            <span title="Engine">Mileage</span>
                            <span title="N/A">N/A</span>
                        </div>
                    </div>
                    <div className="prop">
                        <img src={Year} alt="props image1"/>
                        <div>
                            <span title="Engine">Year</span>
                            <span title="N/A">2020</span>
                        </div>
                    </div>
                    <div className="prop">
                        {/* <img src={Engine}/> */}
                        <div>
                            <span title="Engine">color</span>
                            <span title="N/A">Gray</span>
                        </div>
                    </div>
                    <div className="prop">
                        <img src={Body_type} alt="props image1"/>
                        <div>
                            <span title="Engine">Hatchback & Station Wagons</span>
                            <span title="N/A">N/A</span>
                        </div>
                    </div>
                    <div className="prop">
                        <img src={Fule_type} alt="props image1"/>
                        <div>
                            <span title="Engine">Fule Type</span>
                            <span title="N/A">Diesel</span>
                        </div>
                    </div>
                    <div className="prop">
                        <img src={year_con} alt="props image1"/>
                        <div>
                            <span title="Engine">Air Condition</span>
                            <span title="N/A">Yes</span>
                        </div>
                    </div>
                    <div className="prop">
                        <img src={Drive_type}alt=""/>
                        <div>
                            <span title="Engine">Drive Type</span>
                            <span title="N/A">Right</span>
                        </div>
                    </div>
                    <div className="prop">
                        <img src={Used_cars} alt=""/>
                        <div>
                            <span title="Engine">Condition</span>
                            <span title="N/A">Used</span>
                        </div>
                    </div>
                    

                </div>

                            
              </div>
                <div className="ad-seller-comment">
                    <h3>Seller comment</h3>
                    <div className="comment-wrapper">
                    Toyota Corolla, 2020. 1.6 litre. Zero miles. Brand new. Import cost included
                    </div>
                    <div className="until-md-visible">
                    <div className="profile-seller">
                    <div className="wrapper">
                        <img src={download7} alt="...."/>
                            <div className="profile-data">
                                <h5>hikmat</h5>
                                    <a href="assing latter">Show all ads</a>
                                    <a className="mt-10" href="latter" data-target="#sign in model" data-toggle="model">write message</a>
                                </div>
                    </div>
                    <div className="call-seller-wrapper">
            <div className="seller-phones">
                <div className="header-seller-phones">
                    <div className="head">
                        Call the seller
                    </div>
            
                </div>
                <div className="phone-wrapper-call-seller">
                        <span>+971585038983</span>
                        <div className="empty-div">
                            <a className="show-whatsapp" href="https://www.whatsapp.com/">
                                <img src={whatsapp_img} alt="whatsapp_img"/>
                            </a>
                            <a className="show-tel call" href="tel:+971585038983" >| Call</a>
                        </div>
                    </div>
            </div>
        </div>
                        </div>
                </div>
                
                </div>
                {/* promote div here */}
                <div className="sell-car-banner afghanistan">
                    <div>
                    <p>Need to sell your car too?</p>
                    <p>We will help you!</p>
                    </div>
                    <a className="af-btn white" href="decide latter">Sell your car</a>
                </div>
                <div className="container">
                {/* <NewCard/> */}
                </div>

            
         </div>
            <div className="md-hidden col-lg-4 col-xl-3" >
                <div className="back-wrapper">
                <div className="ad-info-wrapper position-relative">
                    <div className="ad-price">
                        <span className="price-wrap ">AFN</span>
                            <span className="price"> 17,000</span>
                       
                    </div>
                </div>
                <div className="profile-seller">
                    <div className="wrapper">
                        <img src={download7} alt="...."/>
                        <div className="profile-data">
                            <h5>hikmat</h5>
                            
                            <a href="assing latter">Show all ads</a>
                            <a className="mt-10" href="latter" data-target="#sign in model" data-toggle="model">write message</a>
                        </div>
                    </div>
                    <div className="call-seller-wrapper">
                        <div className="seller-phones">
                            <div className="header-seller-phones">
                                <div className="head">
                                    Call the seller
                                </div>
                        
                            </div>
                            <div className="phone-wrapper-call-seller">
                                    <span>+971585038983</span>
                                    <div className="empty-div">
                                        <a className="show-whatsapp" href="https://www.whatsapp.com/">
                                            <img src={whatsapp_img} alt="whatsapp_img"/>
                                        </a>
                                        <a className="show-tel call" href="tel:+971585038983" >| Call</a>
                                    </div>
                                </div>
                        </div>
                    </div>

                </div>
                <div className="make-an-offer-form">
                    <h5><i className="fa fa-usd"></i> Make an offer</h5>
                    <form className="simple_form new_contact" >
                        <input  type="hidden" value="true"/>
                        <div className="field-price input-animate-wrapp simple">
                            <label for="lead_offered_price">Price</label>
                            <span className="currency">AFN</span>
                            <div className="input string required lead_offered_price">
                                <input  type="Number"/>
                                {/* onChange={this.handleMakeOfferPrice}  */}
                            </div>
                        </div>
                        <div className="client-contacts" style={{display:"block"}}>
                            <div className="input-animate-wrapp simple">
                                <div className="input string required lead_user_name"       >
                                    {/* <label  className="string required form-label" for="lead_user_name">Name
                                    </label> */}

                                    <input  placeholder="Name" className="string required animate" required="required" aria-required="true" type="text" name="lead[user_name]" id="lead_user_name"/>
                                    {/* onChange={this.handleMakeOfferName} */}
                                </div>
                            </div>

                            <div className="input-animate-wrapp simple filled">
                                <div className="input email optional lead_email field_with_errors">
                                    {/* <label  className="email optional form-label" for="lead_email">Email
                                    </label> */}
                                    {/* onChange={this.handleMakeOfferEmail} */}
                                    <input  placeholder="Email" className="string email optional animate"    type="email" name="lead[email]" id="lead_email" data-parsley-id="29"/>
                                    {/* <span className="errors-list filled" id="parsley-id-29">
                                        <span className="errorText parsley-type">This value should be a valid email</span>
                                    </span> */}
                                </div>
                            </div>

                            <div className="input-animate-wrapp">
                            
                                {/* <h1>this is some text</h1> */}
                                 {/* <label className="tel optional form-label phone-label" for="lead_phone_number_attributes_Telephone">Telephone</label>
                                <div className="input tel required lead_phone_number_phone"> */}
                                    {/* <div className="intl-tel-input allow-dropdown">
                                        <div className="flag-container">
                                            <div className="selected-flag" role="combobox" aira-owns="country-listbox" tabindex="0" title="Afghanistan (‫افغانستان‬‎): +93">
                                                <div className="iti-flag af" style={{backgroundImage:`url(${Flag})`}}></div>
                                                <div className="iti-arrow"></div>

                                            </div>
                                            <ul className="country-list hide" id="country-listbox" aria-expanded="false" role="listbox" aria-activedescendant="iti-item-af">
                                                <li className="country preferred highlight" id="iti-item-us" role="option " data-dial-code="1" data-country-code="us" aria-selected="false">
                                                    <div className="flag-box">
                                                        <div className="iti-flag us " style={{backgroundImage:`url(${Flag})`}}>
                                                        </div>
                                                    </div>
                                                    <span className="country-name"> United States</span>
                                                    <span className="dial-code">+1</span>
                                                </li>

                                            </ul>
                                        </div>
                                    </div> 
                                </div>*/} 
                            </div>
                        </div>
                        <div className="submitButton">
                        <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="contact-seller-form" id="contact-seller-anchor">
                    <h5>
                        <i className="fa fa-commenting-o"></i>
                        Send message to the seller
                    </h5>
                    {/* onSubmit={this.handleSubmit} */}
                    <form className="simple_form new_contact" id="leads" >
                        <div className="input-animate-wrapp simple filled" >
                            {/* <div className="input string required lead_user_name field_with_errors" aira-describledby="parsley-id-43"> */}
                            {/* <label className="string required form-label" for="name">Name   </label> */}
                        <input  placeholder="Name"type="text" required="required" />
                        {/* value={this.state.username} onChange={this.handleUsernameChange} */}
                        {/* </div> */}
                        </div>

                        <div className="input-animate-wrapp simple filled">
                            {/* <div className="input string required lead_user_name field_with_errors" aira-describledby="parsley-id-43"> */}
                            {/* <label className="string required form-label" for="name">Name   </label> */}
                        <input placeholder="Email"type="Email" required="required" />
                        {/* value={this.state.email} onChange={this.handleEmailChange} */}
                        {/* </div> */}
                        </div>

                        <div className="input-animate-wrapp simple form-label-message filled">
                          <div className="input text required lead_message"> 
                          <label className="text required form-label" for="listing-description">Write your message</label>
                        <textarea className="text required animate af-text-area" type="text-aria" rows="7" maxLength="1000" required="required"
                        >
                            {/* value={this.state.comment} onChange={this.handleCommentChange} */}
                            Hello, I am interested in your Toyota Corolla car in Badakhshan 
                            - Import - Dubai that I saw on AFCars.com. Can you please send me more details about it? Thanks.4</textarea>
                        
                        </div>
                        </div>

                         <button type="submit">Submit</button>     
                        
                                
                    </form>

                </div>
                {/* social media work here */}
                <div className="share-networks text-center">
                    <h3>Share ad with your friends!</h3>
                    <nav>
                        <a className="fa fa-facebook" target="_blank" rel="noopener nofollow" href="www.facebook.com"> </a>
                        <a className="fa fa-twitter" target="_blank" rel="noopener nofollow" href="www.twitter.com"> </a>
                        <a className=" fa-viber" target="_blank" rel="noopener nofollow" href="www.viber.com"><img src={viber} alt="viber"/></a>
                        <a className="fa fa-whatsapp" target="_blank" rel="noopener nofollow" href="www.whatsapp.com"> </a>
                        
                    </nav>
                </div>
                </div>            
            </div>
           
    </div>
    
</div>

</div>
</React.Fragment>
   
    
//         </div>
    )
    
}
export default Cars_details;