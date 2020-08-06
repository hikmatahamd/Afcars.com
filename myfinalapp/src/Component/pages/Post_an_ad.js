import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './Post_an_ad.css';
import contact_icon from  '../assets/contacticon.svg';

import selected_Img from  '../assets/selectionImg.svg';
import post_your_ad_icon from  '../assets/postyouradicon.svg';
import car_icon from  '../assets/carImgIcon.svg';
import parts_icon from  '../assets/partsImgIcon.svg';
// import business_icon from  '../assets/businessIcon.svg';
// import $ from 'jquery';
class Post_an_ad extends Component {
    state = {  }
     handleClick=()=>{
        // let div1=document.getElementById("selection-id-hidden");
        // div1.style.display="none";\
        alert("this is clicked");
    }
    render() { 
        return (
            <div>
               <div className="container-fluid">
                <div className="inner-new-ads afghanistan">
                    <div className="title"><h1>Post your ad</h1>
                    <p>With 3 Easy And Simple Steps! </p>
                    </div>
                    <div className="cover-background"></div>
                </div>
                <div className="container-sell-car-banner">
                    <div className="new-ad-tabs mh-511">
                        <nav>
                            <div className="nav" role="tablist">
                                <a aria-selected="false" id="selection-id-hidden" className="nav-item nav-link active" data-toggle="tab" href="no link define" role="tab">
                                <img src={selected_Img} alt="selectionicone"/>Selection
                                </a>
                                <a aria-selected="false"   className="nav-item nav-link disabled" id="postModel" data-toggle="tab" href="no link" role="tab">
                                <img src={post_your_ad_icon} alt="selectionicone"/>Post your ad
                                </a>
                                <a aria-selected="false" className="nav-item nav-link disabled" id="listing-contact-link" data-toggle="tab" href="no link" role="tab">
                                <img src={contact_icon} alt="selectionicone"/>Contact
                                </a>
                            </div>
                        </nav>
                        <div className="tab-pane active" aria-labelledby="nav-selection-tab" id="nav-selection" role="tabpanel">
                            <div className="form-post-an-ad">
                            <div className="new-ad-container">
                                <h3>What do you want to sell?</h3>
                                <div className="payment">
                                    <div className="payment-form">
                                        <div className="payment-checkbox-wrapper vehicle"  id="vehicle">
                                            <Link to="post_and_ad_vehicles">
                                                <img src={car_icon} alt="cars"/>
                                                <span>Vehicles</span>
                                            </Link>
                                        </div>
                                        <div className="payment-checkbox-wrapper spare-part" >
                                        <Link to="post_an_ad_parts">
                                                <img src={parts_icon} alt="parts"/>
                                                <span>Parts</span>
                                            </Link>
                                        </div>
{/* 
                                        <div className="payment-checkbox-wrapper business">
                                        <a href="#">
                                                <img src={business_icon} alt="cars"/>
                                                <span>Business</span>
                                            </a>
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            </div>
            
         );
         
    }
   
    
}
// const handleClick1 = () => {
//     $('#vehicle').on('click', function(){
//     alert("button clicked");
//     });
//  }
 
export default Post_an_ad;
