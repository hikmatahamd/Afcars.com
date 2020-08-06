import React, { Component } from 'react';
// import axios from 'axios';
import Make from './Make';
 
import './Car.css';
import './Car2.css';
import './Car3.css';
// import CarousalCards from './CarousalCards';
import NewCard from './NewCard';
// import Carousel from './Carousel';
import BodyType from './BodyType';



class Car extends Component{
    render(){
        return (
            // <React.Fragment>
            <div>
               
                <div className="inner-space afghanistan ">
                    <div className="container sm-no-pad">
                        <h2>Find your next car in <br/>
                            <span className="nowrap">Afghanistan</span> </h2>
                        <p>Fast, safe and easy to buy and sell vehicles locally</p>
                        
                        <div className="search-box">
                            <div className="filter-box">
                                <ul className="nav">
                                    <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#href">Cars</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#href">Bikes</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#href">Trucks</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade no-gutters show active">
                                        <form className="simple_form homepage_search" noValidate="novalidate">
                                            <div className="row no-gutters">
                                                <div className="col-lg-12">
                                                    <div className="row separator-b no-gutters">
                                                        <div className="col-lg-3 separator-r" >
                                                            <label ><span>Brand</span>
                                                            

                                                            
                                                             <i className="fa fa-angle-down"></i>
                                                            {/*<div className="input select required listing_brand_id">
                                                                <select className="select required chosen-primary-single-select home-brand-select"
                                                                data-car-type="car" data-option="All" name="listing[brand_id]" id="listing_brand_id" style={{display:"none"}}>
                                                                <option value>All</option>
                                                                <option value>All</option>
                                                                
                                                                </select>
                                                                <br/> */}
                                                                
{/* 
                                <div className="input select required listing_brand_id"  style={{width:"100%",border:"solid red 1px"}}>
                                <select   className="select required chosen-single-select listing-brand-select" >
                                  <option value="">All</option>
                                  <option value="94">Honda</option>
                                  <option value="250">Ac</option>
                                  <option value="1">Toyota</option>
                                  
                                  
                                </select>
                                </div>   */}
                                                                {/* <div className="chosen-container chosen-container-single " title id="listing_brand_id_chosen" style={{width:"100%"}}>
                                                                    <a className="chosen-single chosen-default">
                                                                        <span>All</span>
                                                                    </a>
                                                                    <div>

                                                                    </div>
                                                                    <div className="chosen-drop">
                                                                        <div className="chosen-search">
                                                                            <input className="chosen-search-input" type="text" autoComplete="off"/>

                                                                          
                                                                        </div>
                                                                        <ul className="chosen-results">
                                                                            <li className="active-result result-selected" data-option-array-index="0">All</li>
                                                                            <li className="active-result result-selected" data-option-array-index="1">Abarth</li>
                                                                            <li className="active-result result-selected" data-option-array-index="2">Audi</li>
                                                                            <li className="active-result result-selected" data-option-array-index="3">All</li>
                                                                            <li className="active-result result-selected" data-option-array-index="4">All</li>
                                                                        </ul>
                                                                    </div>
                                                                </div> */}
                                                            {/* </div>  */}
                                                            </label>

                                                        </div>
                                                        <div className="col-lg-3 separator-r">
                                                            <label htmlFor="title">
                                                                <span>Model</span>
                                                                <i className="fa fa-angle-down"></i>
                                                                <div className="input select required listing_brand_id">
                                                                <select className="select required chosen-primary-single-select home-brand-select"
                                                                data-car-type="car" data-option="All" name="listing[brand_id]" id="listing_brand_id" style={{display:"none"}}>
                                                                <option value>All</option>
                                                                <option value>All</option>
                                                                <option value>All</option>
                                                                <option value>All</option>
                                                                <option value>All</option>
                                                                <option value>All</option>
                                                                </select>
                                                                <br/> 
                                                                </div>
                                                                <div className="input select required listing_model_id">
                                                                    <div className="chosen-container chosen-container-single chosen-disabled" 
                                                                    title id="listing_model_id_chosen"
                                                                     style={{width:"100%"}}>
                                                                         <a className="chosen-single" href="not defined yet">
                                                                             <span></span>
                                                                             <div>
                                                                                 <b></b>
                                                                             </div>
                                                                         </a>
                                                                         <div className="chosen-drop">
                                                                             <div className="chosen-search">
                                                                                 <input className="chosen-search-input" type="text" autoComplete="off"/>
                                                                             </div>
                                                                             <ul className="chosen-results">
                                                                                 <li className="active-result result-selected" data-option-array-index="0">All</li>
                                                                                 <li className="active-result"  data-option-array-index="1">124 spider</li>
                                                                                 <li className="active-result"  data-option-array-index="2">124 spider</li>
                                                                                 <li className="active-result"  data-option-array-index="3">124 spider</li>
                                                                                 <li className="active-result"  data-option-array-index="4">124 spider</li>
                                                                             </ul>
                                                                         </div>

                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-3 separator-r">
                                                            <label >
                                                                <span>Model</span>
                                                                <i className="fa fa-angle-down"></i>
                                                                <div className="input select required listing_brand_id">
                                                                <select className="select required chosen-primary-single-select home-brand-select"
                                                                data-car-type="car" data-option="All" name="listing[brand_id]" id="listing_brand_id" style={{display:"none"}}>
                                                                <option value>All</option>
                                                                <option value>All</option>
                                                                <option value>All</option>
                                                                <option value>All</option>
                                                                <option value>All</option>
                                                                <option value>All</option>
                                                                </select>
                                                                <br/> 
                                                                </div>
                                                                <div className="input select required listing_model_id">
                                                                    <div className="chosen-container chosen-container-single chosen-disabled" title id="listing_model_id_chosen"
                                                                     style={{width:"100%"}}>
                                                                         <a className="chosen-single" href="not defined yet">
                                                                             <span></span>
                                                                             <div>
                                                                                 <b></b>
                                                                             </div>
                                                                         </a>
                                                                         <div className="chosen-drop">
                                                                             <div className="chosen-search">
                                                                                 <input className="chosen-search-input" typr="text" autoComplete="off"/>
                                                                             </div>
                                                                             <ul className="chosen-results">
                                                                                 <li className="active-result result-selected" data-option-array-index="0">All</li>
                                                                                 <li className="active-result"  data-option-array-index="1">124 spider</li>
                                                                                 <li className="active-result"  data-option-array-index="2">124 spider</li>
                                                                                 <li className="active-result"  data-option-array-index="3">124 spider</li>
                                                                                 <li className="active-result"  data-option-array-index="4">124 spider</li>
                                                                             </ul>
                                                                         </div>

                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>

                                                        <div className="col-lg-3">
                                                            <div className="offers-btn md-hidden">
                                                                <button name="button" type="submit" className="btn af-btn lg red">
                                                                    <i className="fa fa-search">Search</i>
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                           
                        </div>
                        
                    </div>

                </div>
                
                        <div className="most-recent most-recent-padding" >
                            <div className="container" >
                            <div className="row">
                                <h2>Most recent cars for sale in 
                                    <span> Afghanistan</span>
                                </h2>
                            </div>
                                {/* <CarousalCards />   */}
                                {/* <Carousel/> */}
                                <div className="container" style={{display:"flex"}} >
                                {/* <div className="row sm-visibility listing-grid" id="listings-grid" > */}
                                
                                <NewCard  />
                            
                                {/* </div> */}
                            </div>                                 
                            </div>
                        </div>           
                        <div className="Top_Brand">                                  
                             <Make />
                        </div>
                        <section className="bg-light page-section" >
                            <div className="container-fluid" id="container-id4">
                                <BodyType />
                            </div>
                        </section> 
            </div>
        )
    }
}
export default Car;