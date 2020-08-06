import React from 'react';
import {Link } from 'react-router-dom';
import './Footer.css';
const Footer = () =>{
    return(
        
            <footer>
          <div className="container-fluid" style={{backgroundColor:"#2b2b2b",color:"#fff"}}>
            {/* <div className="container-fluid" > */}
                <div className="info">
                <div className="row">
                    {/*column */}
                    <div className="col-12 col-sm-4 flex-md-align">
                    
                    <ul>
                        <li>About</li>
                       <li><Link to="ourstory">Our Story</Link></li>
                       <li><a href="#2">Advertising</a></li>
                       <li><a href="#3">Private policy</a></li>
                       <li><a href="#4">Terms & conditions</a></li>
                       <li><Link to="contactfooter">Contact</Link></li>
                    </ul>

                  
                        
                        <ul>
                            <li>Search</li>
                            <li><Link to="sidebarfooter">cars</Link></li>
                            <li><Link to="bikefooter">Motors</Link></li>
                            <li><Link to="truckfooter">Trucks</Link></li>
                            <li><Link to="autopartsfooter">parts</Link></li>
                        </ul>
                        </div>
                    <div className="col-12 col-sm-6 flex-sm-centered">
                        <div className="wrapper" style={{marginLeft:"300px"}}>
                    <h5>Social Network and Feeds</h5>
                    <p>connect with us on Facebook,twitter and youtube</p>
                        <div className="social-link">
                            <a className="facebook"href="past facebook page link here" rel="nofollow">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a className="twitter" href="past twitter page link here" rel="nofollow">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a className="youtube" href="past youtube page link here" rel="nofollow">
                                <i className="fa fa-youtube-play"></i>
                            </a>
                            <a className="insta" href="past instagram page link here" rel="nofollow">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                        <button className="btn btn-danger" style={{    border: "1px solid #de1f26",
                             backgroundColor:" #de1f26",
                             fontSize:"16px",
                             width:"100%",
                             borderRadius:"50px",
                            
                             }}>New car Notification</button>
                             <p className="text-center">For Email and SMS Alert</p>
                        {/* <ul>
                            
                            <li><button className="btn btn-danger">New car Notification</button></li>
                            <li></li>
                            <li></li>
                        </ul> */}
                        </div>
                    </div>
                        

                    
                </div>
                </div>
            </div>
            {/* Footer bottom */}
            {/* <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} city Guide App - All Rights  Reserved
                </p>
            </div> */}
            
            </footer>
      
    )
}
export default Footer;