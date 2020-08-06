
import React, { useState,useEffect} from 'react';
import Navbar from './Component/layouts/Navbar';
import SignInWithEmail from './Component/pages/SignInWithEmail';
// //import Footer from './Component2/Footer';
 import { BrowserRouter,Switch ,Route } from 'react-router-dom';
  import Car from './Component/pages/Car';
  import Bikes from './Component/pages/Bikes';
  import Trucks from './Component/pages/Trucks';
  import Autoparts from './Component/pages/Autoparts';
  import Blogs from './Component/pages/Blogs';
  import Contact from './Component/pages/Contact';
  // import Login from './Component/pages/Login';
  // import Cars_details2 from './Component/pages/Cars_details2';
  import Cars_details from './Component/pages/Cars_details';
  
import Post_an_ad from './Component/pages/Post_an_ad';
import Post_an_Ad_Bikes from './Component/pages/Post_an_ad_Bikes';
import Post_an_Ad_Trucks from './Component/pages/Post_an_ad_Trucks';
import Post_an_Ad_Parts from './Component/pages/Post_an_ad_Parts';
// import Model from './Component/pages/Model';
import Post_an_ad_vehicles_click from './Component/pages/Post_an_ad_vehicles_click';
import SignIn from './Component/pages/SignIn';
import SignUp from './Component/pages/SignUp';
import Sidebar from './Component/pages/Sidebar';
// import OurStory from './Component/pages/OurStory';  
import Footer from './Component/layouts/Footer';
import OurStory from './Component/pages/OurStory';
// import Bike from './Component/pages/Bikes';
import BlogDetail from './Component/pages/BlogDetail';
import UserContext from "../src/context/UserContext";
import Dashboard from "./Component/pages/Dashboard";
import Axios from "axios";
// import PostState from './context/postContext/PostState';


export default function App(){
    const [userData ,setUserData] = useState({
      token:undefined,
      user:undefined,
    });
    useEffect(()=>{
      const checkLoggedIn = async ()=>{
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token","");
        token="";
      }
      const tokenRes = await Axios.post("http://localhost:5000/users/tokenIsValid", null,
      {headers: {"x-auth-token": token}}
      );
      if(tokenRes.data){
        const userRes=await Axios.get("http://localhost:5000/users/",
        {headers:{"x-auth-token":token}
      });
      setUserData({
        token,
        user:userRes.data,
      });
      }
      }
      checkLoggedIn();
    },[])
  return (
    
  <div>
             <BrowserRouter>
              <UserContext.Provider value={{userData,setUserData}}>
              {/* <PostState> */}
                 <Navbar /> 
                 <Switch>
                  <Route exact path="/" component={Car}/>
                  <Route path="/sidebar" component={Sidebar}/>
                  <Route path="/bikes" component={Bikes}/>
                  <Route path="/trucks" component={Trucks}/>
                  <Route path="/parts" component={Autoparts}/>
                  <Route path="/blogs" component={Blogs}/>
                  <Route path="/contact" component={Contact}/>
                  {/* <Route path="/model" component={Model}/> */}
                  {/* <Route path="/show-car-details" component={Cars_details}/> */}
                  <Route path="/post_an_ad" component={Post_an_ad}/>
                  <Route path="/post_and_ad_vehicles" component={Post_an_ad_vehicles_click}/>
                  <Route path="/post_and_ad_bikes" component={Post_an_Ad_Bikes}/>
                  <Route path="/post_and_ad_trucks" component={Post_an_Ad_Trucks}/>
                  <Route path="/post_and_ad_parts" component={Post_an_Ad_Parts}/>
                  <Route path="/sign-in" component={SignIn}/>
                  <Route path="/sign-up" component={SignUp}/>
                  <Route path="/sign-in-from-sign-up" component={Navbar}/>
                  <Route path="/car-details" component={Cars_details}/>
                  
                  <Route path="/post_an_ad_parts" component={Post_an_Ad_Parts}/>
                  <Route path="/ourstory" component={OurStory}/>
                  <Route path="/contactfooter" component={Contact}/>
                  <Route path="/sidebarfooter" component={Sidebar}/>
                  <Route path="/bikefooter" component={Bikes}/>
                  <Route path="/truckfooter" component={Trucks}/>
                  <Route path="/autopartsfooter" component={Autoparts}/>
                  <Route path="/blog-detail" component={BlogDetail}/>
                  <Route path="/useremail" component={SignInWithEmail}/>
                  <Route path="/car" component={Car}/>
                  <Route path="/dashboard" component={Dashboard}/>


                </Switch>
                {/* </PostState> */}
                </UserContext.Provider> 
                </BrowserRouter>
                 <Footer /> 

                 </div>
                 
                 )
}
