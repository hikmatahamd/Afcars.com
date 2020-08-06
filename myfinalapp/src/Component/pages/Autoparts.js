import React, { Component } from 'react';
class Autoparts extends Component{
    render(){
        return (
            <div>
                <section >
          <div className="container-fluid" id="container-fluid-1">
            <div className="container" >
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-3 " id="sidebar">
                      <div className="filter-ads" >
                        <form id="filter_form" className="simple_form listing" >
                          <div className="headline headline-desktop">
                            <span>Filters</span>
                            <a id="reset" href="#id">Reset All</a>
                          </div>
                          <div className="mobile-filter">
                            <div className="filter-section">
                              <div className>
                              <div className="input select required listing_brand_id">
                                <select className="select1 required chosen-single-select listing-brand-select" data-option="All" data-label="Brand" data-with-all="true" >
                                  <option value="">All</option>
                                  <option value="94">Honda</option>
                                  <option value="250">Ac</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>                                  
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  
                                </select>
                                </div>
                                 <  div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%"}}>
                               
                                <span className="animate-label">Brand</span>
                                
                                </div> 
                              </div>
                            </div>
                          </div>



                          <div className="mobile-filter" >
                            <div className="filter-section" >
                              <div className="input select required listing_brand_id" >
                                <select className="select required chosen-single-select listing-brand-select" data-option="All" data-label="Brand" data-with-all="true">
                                  <option value="">Model</option>
                                  <option value="94">Honda</option>
                                  <option value="250">Ac</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>                                  
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                </select>
                                
                              </div>
                            </div>
                          </div>
                          

                          
                            <div className="filter-section">
                              <div className>
                              <div className="input select required listing_brand_id">
                                <select className="select1 required chosen-single-select listing-brand-select" data-option="All" data-label="Brand" data-with-all="true" >
                                  <option value="">All</option>
                                  <option value="94">Honda</option>
                                  <option value="250">Ac</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>                                  
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  
                                </select>
                                </div>
                                 <  div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%"}}>
                               
                                <span className="animate-label">city</span>
                                
                                </div> 
                              </div>
                            </div>
                         

                          

                          <div className="filter-section" >
                              <div className="new-ad-container"> 
                              <label for="listing_condition">Condition</label>
                              <div className="ac-checkbox">
                                <div className="input radio_buttons required listing_condition">
                                  <input type="hidden" name="listing[conditon]" value/>
                                  <span className="radio">
                                    <input className="radio_buttons required" type="radio" value  checked="checked" name=" listing[condition]" id="listing_condition_" />
                                    <label className="collection_radio_buttons" for="listing_condition_">All</label>
                                  </span>

                                  <span className="radio">
                                    <input className="radio_buttons required" type="radio" value="1" name="listing[condition]" id="listing_condition_1" />
                                    <label className="collection_radio_buttons" for="listing_condition_1">New</label>
                                  </span>

                                  <span className="radio">
                                    <input className="radio_buttons required" type="radio" value="2" name=" listing[condition]" id="listing_condition_2" />
                                    <label className="collection_radio_buttons" for="listing_condition_2">Used</label>
                                  </span>
                                  
                                </div>
                              </div>
                              </div>
                            </div>

                            <div className="filter-section get-car-type-js">
                              <div className="new-ad-container">
                                <label for="listing-car-type">Type</label>
                                <div className="ac-checkbox listing-car-type-radio">
                                  <div className="input radio_buttons required listing_car_type">
                                    <input type="hidden" name="listing[car_type]" value />
                                    <span className="radio">
                                    <input className="radio_buttons required" type="radio" value="car"  checked="checked" name=" listing[car_type]" id="listing_car_type_car" />
                                    <label className="collection_radio_buttons" for="listing_car_type_car">Cars</label>
                                  </span>

                                  <span className="radio">
                                    <input className="radio_buttons required" type="radio" value="moto"  name=" listing[car_type]" id="listing_car_type_moto" />
                                    <label className="collection_radio_buttons" for="listing_car_type_moto">Bikes</label>
                                  </span>

                                  <span className="radio">
                                    <input className="radio_buttons required" type="radio" value="truck"  name=" listing[car_type]" id="listing_car_type_truck" />
                                    <label className="collection_radio_buttons" for="listing_car_type_truck">Trucks</label>
                                  </span>
                                  </div>
                                  </div> 

                              </div>
                            </div>

                            <div className="filter-section">
                              <div className>
                              <div className="input select required listing_body_id">
                                <select className="select1 required chosen-single-select listing-body-select"  data-label="car type" data-with-all="true" name="listing[body_id]" id="listing_body_id" >
                                  <option value="">All</option>
                                  <option value="94">Honda</option>
                                  <option value="250">Ac</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>                                  
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  
                                </select>
                                </div>
                                 <  div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%"}}>
                               
                                <span className="animate-label">car type</span>
                                
                                </div> 
                              </div>
                            </div>


                            <div className="filter-section">
                              <div className="new-ad-container">
                                <label for="listing-gear-type">Transmission</label>
                                <div className="ac-radio">
                                  <div className="input radio_buttons required listing_gear_type">
                                    <input type="hidden" name="listing[gear_type]" value />
                                    <span className="radio">
                                    <input className="radio_buttons required" type="radio" value  checked="checked" name=" listing[gear_type]" id="listing_gear_type_" />
                                    <label className="collection_radio_buttons" for="listing_gear_type_">All</label>
                                  </span>

                                  <span className="radio">
                                    <input className="radio_buttons required" type="radio" value="1"  name=" listing[gear_type]" id="listing_gear_type_1" />
                                    <label className="collection_radio_buttons" for="listing_gear_type_1">Manual</label>
                                  </span>

                                  <span className="radio">
                                    <input className="radio_buttons required" type="radio" value="2"  name=" listing[gear_type]" id="listing_gear_type_2" />
                                    <label className="collection_radio_buttons" for="listing_gear_type_2">Automatic</label>
                                  </span>
                                  </div>
                                  </div> 

                              </div>
                            </div>


                            <div className="filter-section car-type-js">
                              <div className="new-ad-container">
                                <label for="listing_fuel_id">Fuel Type</label>
                                <div className="ac-radio">
                                  <div className="input radio_buttons required listing_fuel_id">
                                    <input type="hidden" name="listing[fuel_id]" value />
                                    <span className="radio">
                                    <input className="radio_buttons required" type="radio" value checked="checked" name="listing[fuel_id]" id="listing_fuel_id_" />
                                    <label className="collection_radio_buttons" for="listing_fuel_id_">All</label>
                                  </span>

                                  <span className="radio">
                                    <input className="radio_buttons required" type="radio" value="1"  name=" listing[fuel-id]" id="listing_fuel_id_1" />
                                    <label className="collection_radio_buttons" for="listing_fuel_id_1">Diesel</label>
                                  </span>

                                  <span className="radio">
                                    <input className="radio_buttons required" type="radio" value="2"  name=" listing[fuel_id]" id="listing_fuel_id_2" />
                                    <label className="collection_radio_buttons" for="listing_fuel_id_2">Petrol</label>
                                  </span>
                                  </div>
                                  </div> 

                              </div>
                            </div>




                            <div className="filter-section">
                              <div className>
                              <label for="listing_fuel_id">Mileage</label>
                              <div className="input select required listing_body_id">
                                <select className="select2 required chosen-single-select listing-body-select"  data-label="car type" data-with-all="true" name="listing[body_id]" id="listing_body_id" >
                                  <option value="">Min</option>
                                  <option value="94">Honda</option>
                                  <option value="250">Ac</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>                                  
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  <option value="1">Toyota</option>
                                  
                                </select>


                                <select className="select2 required chosen-single-select listing-body-select" style={{marginLeft:"10px"}} data-label="car type" data-with-all="true" name="listing[body_id]" id="listing_body_id" >
                                  <option value="">Max</option>
                                  <option value="1000">1000</option>
                                  <option value="10000">10000</option>
                                  <option value="50000">50000</option>
                                  <option value="50000">50000</option>
                                 <option value="100000">100000</option>
                                 <option value="200000">200000</option>
                                  <option value="500000">500000</option>
                                  
                                </select>
                                </div>
                                 
                              </div>
                            </div>

                           
                          </form> 
                        
                      </div>
        
        
        </div>

        {/* main section in this area */}
        <div className="col-12 col-lg-8 col-xl-9">
            <br/>
        <span  id="txt-id" className="text-muted m-5"><h2>Autoparts for sale in Afghansitan</h2></span>
        <div className="mainbody">
        
       {/* <SidebarTruckCardFunction /> */}

    

        </div>

       
        </div> 


        </div>

        
        {/* Main card car showing  */}

         
       

                    </div>
                </div>
            
                
            </section>
            </div>
        )
    }
}
export default Autoparts;