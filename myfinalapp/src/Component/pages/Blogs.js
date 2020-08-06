import React, { Component } from 'react';
import "./Blogs.css";
import {Link } from 'react-router-dom';
import Afgcarindustry from  '../assets/Afg-car-industry.jpg';
import Afgautomarket from  '../assets/Afg-auto-market-2019.jpeg';
import carpollution from  '../assets/car-pollution.jpeg';
import newcar from  '../assets/new-car.jpg';

class Blogs extends Component{
    render(){
        return (
        
            <div className="background">  
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <div className="mobile-posts">
                                <div className="mobile-posts">
                                    <div className="post-sidebar">
                                        <div className="post-categories">
                                            <div className="popular-categories">
                                                <h6>Populat categories</h6>
                                                <ul>
                                                    <li>
                                                        <Link to="/blogs">Afghanistan Automotive Industry</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/blogs">Automotive News</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/blogs">Market Reports</Link>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                            <div className="other-categories">
                                                <h6>Other categories</h6>
                                                <div className="cloud-tags"></div>
                                            </div>
                                        </div>
                                        <div className="tags">
                                            <h6>Tags</h6>
                                            <div className="cloud-tags tags-hidden">
                                                <a href="somelink">Greenhouse Gas Emissions</a>
                                                <a href="somelink">Pollution</a>
                                                <a href="somelink">Afghanistan new cars 2020</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-9">
                            <div className="sort-info sort-info-blog">
                                <h1>Blog</h1>
                            </div>
                             <div className="post-wrapper">
                            <div className="row" id="blog-posts">
                               <div className="col-6 col-md-4">
                                   <div className="post">
                                     <img src={Afgcarindustry} alt="car pic"/>
                                     <div className="text-container">
                                         <div className="news-label orange">
                                             <span>
                                                 <Link to="blog-detail">Afghanistan Automotive Industry</Link>
                                             </span>
                                         </div>
                                         <Link className="redirect" to="blog-detail"></Link>
                                         <p className="short-description" style={{overflow:"hidden",textOverflow:"ellipsis"}}></p>
                                         </div>   
                                   </div>
                                   </div> 
                                   <div className="col-6 col-md-4">
                                   <div className="post">
                                     <img src={Afgautomarket} alt="car pic"/>
                                     <div className="text-container">
                                         <div className="news-label orange">
                                             <span>
                                             <Link to="blog-detail">Afghanistan Automotive Industry</Link>
                                             </span>
                                         </div>
                                         <Link className="redirect" to="blog-detail"></Link>
                                         <p className="short-description" style={{overflow:"hidden",textOverflow:"ellipsis"}}></p>
                                         </div>   
                                   </div>
                                   </div>
                                   <div className="col-6 col-md-4">
                                   <div className="post">
                                     <img src={carpollution} alt="car pic"/>
                                     <div className="text-container">
                                         <div className="news-label orange">
                                             <span>
                                             <Link to="blog-detail">Afghanistan Automotive Industry</Link>
                                             </span>
                                         </div>
                                         <Link className="redirect" to="blog-detail"></Link>
                                         <p className="short-description" style={{overflow:"hidden",textOverflow:"ellipsis"}}></p>
                                         </div>   
                                   </div>
                                   </div>
                                   <div className="col-6 col-md-4">
                                   <div className="post">
                                     <img src={newcar} alt="car pic"/>
                                     <div className="text-container">
                                         <div className="news-label orange">
                                             <span>
                                             <Link to="blog-detail">Afghanistan Automotive Industry</Link>
                                             </span>
                                         </div>
                                         <Link className="redirect" to="blog-detail"></Link>
                                         <p className="short-description" style={{overflow:"hidden",textOverflow:"ellipsis"}}></p>
                                         </div>   
                                   </div>
                                   </div>
                                   
                            </div>
                        </div>
                        </div>
                       

                    </div>
                </div>
                
            </div>
        )
    }
}
export default Blogs;