import React,{useContext ,useState,useEffect} from 'react';
import './Dashboard.css';
import dashboard_profile from '../assets/dashboard-profile.jpg';
import ic_car from '../assets/ic-car.svg';
// import ic_view from '../assets/ic-view.svg';
// import leads from '../assets/leads.svg';
import ic_bike from '../assets/ic-bike.svg';
import ic_truck from '../assets/ic-truck.svg';
import no_vehical from '../assets/no-vehical.svg';
import ic_mail from'../assets/ic-mail.svg';
import phone_icon from '../assets/phone.svg';
import ic_name from '../assets/ic name.svg';
import avater from '../assets/avater.jpg';
import password_key_icon from '../assets/password-key-icon.svg';
import hint from '../assets/hint.png';
import UserContext from '../../context/UserContext';
// import UserContext from '../../context/UserContext';
// import UserContext from '../../context/UserContext';
import {Link } from 'react-router-dom';
// import $ from 'jquery';
export default function Dashboard(){
    const [newads,setNewAds]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/users/').then(res=>res.json()).then(data=>{
            setNewAds(data);
        })
        });

    const {userData,setUserData} =useContext(UserContext);
    const logout=()=>{
      setUserData({
        token:undefined,
        user:undefined,
      });
      localStorage.setItem("auth-token","");

    }
    
    return (
        <div className="dashboard-layout background">
            <div className="container padding-right-0">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <div className="dashboard-profile">
                            <div className="profile-wrapper">
                                <div className="profile-image">
                                    <img src={dashboard_profile} alt="profile"/>
                                </div>
                                <div className="profile-info">
                                    {/* <h4>{userData.user.userphonenumber}</h4> */}
                                    {/* <h4>{newads.user.userphonenumber}</h4> */}
                                </div>
                                <div className="btn-group-wrapp btn-payment-color" id="nav">
                                    <a className="dashboard"  href="showHide('content1');"><span>Dashboard</span></a>
                                    <a className="dashboard" href="showHide('content2');"><span>My Profile</span></a>
                                    <Link className="log-out log-out-modal" onClick={logout} to="/car">log out</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div  className="toggle"> */}
                    <div className="col-12 col-lg-9" id="content1" style={{maxWidth:"100%"}}>
                    <div className="dashboard-container">
                        <div className="dashboard-schedule">
                            <div className="my-dashboard-header-statistics">
                                <div className="header-statistics">
                                    Dashboard
                                </div>
                            </div>
                        </div>
                        <div className="my-dashboard-container">
                            <div className="my-dashboard-container-block">
                                <div className="my-dashboard-block">
                                    <div className="my-dashboard-circle">
                                        <img src={ic_car} alt="IC car dashboard"/>
                                    </div>
                                    <div className="my-dashboard-numeral">
                                        0
                                        <span>Cars</span>
                                    </div>
                                    <div className="my-dashboard-numeral">
                                        0
                                        <span>Sold</span>
                                    </div>

                                </div>
                                {/* <div className="block-views-leads">
                                    <div className="view">
                                        <img src={ic_view} style={{margin:"0px"}} alt="ic view"/>
                                        <div id="cars-statistic-views">0&nbsp;views</div>
                                    </div>
                                    <div className="leads">
                                        <img src={leads} style={{margin:"0px"}} alt="leads"/>
                                        <div id="cars-statistic-leads">0</div>
                                        &nbsp;leads
                                    </div>
                                </div> */}
                            </div>
                            <div className="my-dashboard-container-block">
                                <div className="my-dashboard-block">
                                    <div className="my-dashboard-circle">
                                        <img src={ic_bike} alt="IC car dashboard"/>
                                    </div>
                                    <div className="my-dashboard-numeral">
                                        0
                                        <span>Cars</span>
                                    </div>
                                    <div className="my-dashboard-numeral">
                                        0
                                        <span>Sold</span>
                                    </div>

                                </div>
                                {/* <div className="block-views-leads">
                                    <div className="view">
                                        <img src={ic_view} style={{margin:"0px"}} alt="ic view"/>
                                        <div id="cars-statistic-views">0&nbsp;views</div>
                                    </div>
                                    <div className="leads">
                                        <img src={leads} style={{margin:"0px"}} alt="leads"/>
                                        <div id="cars-statistic-leads">0</div>
                                        &nbsp;leads
                                    </div>
                                </div> */}
                            </div>
                            <div className="my-dashboard-container-block">
                                <div className="my-dashboard-block">
                                    <div className="my-dashboard-circle">
                                        <img src={ic_truck} alt="IC car dashboard"/>
                                    </div>
                                    <div className="my-dashboard-numeral">
                                        0
                                        <span>Cars</span>
                                    </div>
                                    <div className="my-dashboard-numeral">
                                        0
                                        <span>Sold</span>
                                    </div>

                                </div>
                                {/* <div className="block-views-leads">
                                    <div className="view">
                                        <img src={ic_view} style={{margin:"0px"}} alt="ic view"/>
                                        <div id="cars-statistic-views">0&nbsp;views</div>
                                    </div>
                                    <div className="leads">
                                        <img src={leads} style={{margin:"0px"}} alt="leads"/>
                                        <div id="cars-statistic-leads">0</div>
                                        &nbsp;leads
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        
                    </div>
                    <div className="dashboard-container">
                        <div className="no-ads no-ads-leads">
                            <img src={no_vehical} alt="No vehical ads"/>
                            <h3>There is no ads</h3>
                        </div>
                        <div className="dashboard-post-listing-container">
                            <a title="SELL" className="af-btn sm blue" href="post button">SELL</a>
                        </div>
                    </div>
                    </div>
                    {/* </div> */}
                    {/* <div className="toggle" > */}
                    {/* my profile div from here */}
                    <div className="col-12 col-md-7 col-lg-9" id="content2" >
                        <form noValidate className="simple_form edit_user" id="edit_user_4732">
                            <div className="form-section edit-user">
                                <h3>Profile</h3>
                                <div className="row">
                                    <div className="col-12 col-lg-7">
                                        <div className="section-wrapper separator-r">
                                            <div className="input-animate-wrapp filled">
                                                <div className="input email optional user_email">
                                                    <label htmlFor="user_email">Email Address</label>
                                                    <input className="string email optional animate" type="email" value="" name="user[email]"/>
                                                </div>
                                                <img src={ic_mail} alt="ic mail"/>

                                            </div>
                                            <div className="input-animate-wrapp filled">
                                                <label className="string optional form-label phone-label" htmlFor="user_phonenumber">
                                                    Phone Number
                                                </label>
                                                 <div className="intl-tel-input allow-dropdown">
                                                      <div className="flag-container">
                                                         <div className="selected-flag">
                                                             <div className="iti-flag af"></div>
                                                         </div>
                                              
                                                         </div>
                                                         <input className="string optional animate phone-input" 
                                                             type="tel"/>
                                                  </div>
                                                  <img src={phone_icon} alt="phone" style={{marginTop:"-10px"}}/>
                                            </div>
                                            <div className="input-animate-wrapp filled">
                                                <div className="input string required user_name">
                                                    <label className="string required form-label" htmlFor="user_name">
                                                        Name
                                                    </label>
                                                    <input className="string required animate" type="text" value="" name="user[name]"/>
                                                </div>
                                                <img src={ic_name} alt="name" style={{marginTop:"-10px"}}/>
                                            </div>
                                            <div className="input-animate-wrapp filled">
                                                <div className="input select optional user_city_id" style={{width:"100%",height:"20%"}} >
                                                <select 
                                            className="select1 optional chosen-single-select" >
                                                <option value="">City</option>
                                                  <option value="kabul">Kabul</option>
                                                  <option value="kunar">kunar</option>
                                                  <option value="kama">kama</option>
                                                  <option value="paktia">paktia</option>
                                                  <option value="khost">khost</option>
                                                  <option value="Kandahar">Kandahar</option>
                                                  <option value="Herat">Herat</option>
                                                  <option value="Mazar-i-Sharif">Mazar-i-Sharif</option>
                                                  <option value="Balkh">Balkh</option>
                                                  <option value="Kunduz">Kunduz</option>
                                                  <option value="Jalalabad">Jalalabad</option>
                                                  <option value="Taloqan">Taloqan</option>
                                                  <option value="Puli Khumri">Puli Khumri</option>
                                                  <option value="Charikar">Charikar</option>
                                                  <option value="Lashkargah">Lashkargah</option>
                                                  <option value="Helmand">Helmand</option>
                                                  <option value="Sheberghan">Sheberghan</option>
                                                  <option value="Jowzjan">Jowzjan</option>
                                                  <option value="Ghazni">Ghazni</option>
                                                  <option value="Khost">Khost</option>
                                                  <option value="Sar-e Pol">Sar-e Pol</option>
                                                  <option value="Chaghcharan Ghor">Chaghcharan Ghor</option>
                                                  <option value="Farah">Farah</option>
                                                  <option value="Puli Alam">Puli Alam</option>
                                  
                                             </select>
                                                </div>
                                            </div>
                                         
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-5">
                                        <div className="edit-avatar">
                                            <h4>Avatar</h4>
                                            <div className="avatar-wrapper">
                                                <div className="profile-avatar">
                                                    <img id="img_prev" data-width="54" data-height="54"
                                                    src={avater} alt="latter"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-section edit-user">
                                <h3>Password</h3>
                                <div className="row">
                                    <div className="col-12 col-lg-7">
                                        <div className="section-wrapper update-password">
                                            <div className="input-animate-wrapp">
                                                <div className="input password optional user_password">
                                                    
                                                    <input className="password optional animate" placeholder="Enter your password" type="password" name="user[password]"/> 
                                                </div>
                                                <img src={password_key_icon} alt="passordkey" style={{marginTop:"-10px"}}/>
                                            </div>
                                            <div className="hint">
                                                <img src={hint} alt="hint"/>
                                                leave blank if you do not want to change your password
                                            </div>
                                        </div>

                                        <div className="section-wrapper update-password" style={{marginTop:"-40px"}}>
                                            <div className="input-animate-wrapp">
                                                <div className="input password optional user_password">
                                                    
                                                    <input className="password optional animate" placeholder="Conform password" type="password" name="user[password]"/> 
                                                </div>
                                                <img src={password_key_icon} alt="passordkey" style={{marginTop:"-10px"}}/>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div className="col-5"></div>
                                </div>
                            </div>
                            <div className="form-section">
                                <div className="section-wrapper edit-profile-button">
                                    <input type="submit" name="commit" value="Update User" className="af-btn sm blue"/>
                                    <button className="af-btn sm m-2 white" type="button">Delete my account</button>

                                </div>
                            </div>
                            
                        </form>
                    </div>
                    {/* </div> */}
                </div>
            </div>

        </div>
    )
}
