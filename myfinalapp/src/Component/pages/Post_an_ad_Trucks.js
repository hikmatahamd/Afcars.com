import React, { Component } from 'react';
import post_your_ad_icon from  '../assets/postyouradicon.svg';
import contact_icon from  '../assets/contacticon.svg';
import cloud_icon from  '../assets/cloud.png';
// import contact_back_icon from  '../assets/contact-back.svg';
import './Post_an_ad_vehicles_click.css';
import phone_icon from '../assets/phone.svg';
// import $ from 'jquery';
import axios from 'axios';
import Upload from './Upload';
class Post_an_ad_Trucks extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            truckprice:'',
            trucknegotiableprice:'false',        
            truckcondition:'',
            brandname:'all',
            enginetype:'',
            modelname:'',
            truckbodytype:'',
            truckmileage:'',
            truckcolor:'',
            truckmenufyear:'',
            truckfuletype:'',
            trucktransmission:'',
            truckdriver:'',
            truckaircon:'',
            truckdescription:'',
            truckownername:'',
            truckowneremail:'',
            truckownercity:'',
            truckownerphonenumber:''
         }
    }
    handleSelectBrandName=(event)=>{
        this.setState({
            brandname:event.target.value
        })
                 var s1 = document.getElementById("truck-brand-id");
                  var s2 =document.getElementById("truck-model-id");
                  s2.innerHTML="";
                  if(s1.value ==="Caterpillar"){
                    //   when we run the array the first value which is in small will 
                    // be populated as value and the send value which is in captial will be populated as the label value
                      var optionArray1=["120|120"];
                    }else if(s1.value === "Citroen"){
                      optionArray1=["Berlingo|Berlingo","Jumper|Jumper"];
                        }else if(s1.value === "Daewoo"){
                        optionArray1=["|"];
                          }else if(s1.value === "DAF"){
                          optionArray1=["CF|CF"];
                          }else if(s1.value === "Daihatsu"){
                           optionArray1=["|"];
                          }else if(s1.value === "Fiat"){
                            optionArray1=["|"];
                          }else if(s1.value === "Ford"){
                            optionArray1=["AEV AMBULANCE|AEV AMBULANCE","E 150 Cargo Van|E 150 Cargo Van"];
                          }else if(s1.value === "Hino"){
                            optionArray1=["300 Series|300 Series","Ranger|Ranger"];
                          }else if(s1.value === "Hyundai"){
                           optionArray1=["Chorus|Chorus","H200|H200"];
                          }else if(s1.value === "Isuzu"){
                           optionArray1=["FTR 850|FTR 850"];
                          }else if(s1.value === "Iveco"){
                           optionArray1=["Cargo|Cargo","CURSOR|CURSOR","Daily|Daily","Zeta|Zeta"];
                          }else if(s1.value === "Komatsu"){
                           optionArray1=["D31S|D31S"];
                          }
                          else if(s1.value === "Man"){
                           optionArray1=["Silent|Silent"];
                          }else if(s1.value === "Mazada"){
                           optionArray1=["|"];
                          }else if(s1.value === "Mercedes‒Benz"){
                           optionArray1=["1117|1117","1120|1120","1127|1127","117|117","1213|1213","1317|1317"
                            ,"1520|1520","1622|1622","1722|1722","1729|1729","1820|1820","1824|1824","1840|1840"
                            ,"1922|1922","1940|1940","2024|2024","2538|2538","2628|2628","Arocs|Arocs","MB100|MB100"
                            ,"Sprinter|Sprinter","Tipper|Tipper","Truck|Truck","Unimog|Unimog","Vito|Vito"];
                          }else if(s1.value === "Mitsubishi"){
                           optionArray1=["L400|L400","Van|Van"];
                          }else if(s1.value === "Nissan"){
                           optionArray1=["Evalia|Evaila","UD|UD"];
                          }else if(s1.value === "Peugeot"){
                           optionArray1=["|"];
                          }else if(s1.value === "Renault"){
                           optionArray1=["D55|D55","G300|G300","Master|Master","PJ|PJ","S–160|S–160",
                            "Tracer|Tracer","Trafic|Trafic","TRM 10000|TRM 10000"];
                          }else if(s1.value === "Ricomag"){
                           optionArray1=["BW200|BW200"];
                          }else if(s1.value === "Scania"){
                           optionArray1=["Irizar|Irizar","R420|R420"];
                          }else if(s1.value === "Suzuki"){
                           optionArray1=["Carry|Carry","Every|Every"];
                          }else if(s1.value === "Toyota"){
                           optionArray1=["DA|DA","Dyna|Dyna","HiAce|HiAce","LITEACE|LITEACE"];
                          }else if(s1.value === "Volkswagen"){
                           optionArray1=["TRUCK|TRUCK"];
                          }else if(s1.value === "Volvo"){
                           optionArray1=["F4|F4"];
                          }
                        for(var option in optionArray1){

                            var pair =optionArray1[option].split("|");
                            var newOption =document.createElement("option");
                            newOption.value=pair[0];
                            newOption.innerHTML=pair[1];
                            s2.options.add(newOption);
                        } 
                 
    }
   
    handleSelectModelName=(event)=>{
        this.setState({
            modelname:event.target.value
       })
   
        }
    handlePriceChange=(event)=>{
        this.setState({
            truckprice:event.target.value
       })
        }
    onRadioNegotiablePriceChange=(event)=>{
        this.setState({
            trucknegotiableprice:event.target.value
        })
    }
  
    onRadioConditionChange=(event)=>{
        this.setState({
            truckcondition:event.target.value
        })
    }
    handleBodyTypeChange=(event)=>{
        this.setState({
            truckbodytype:event.target.value
        })
    }
    handleMileageChange=(event)=>{
        this.setState({
            truckmileage:event.target.value
        })
    }
    handleEngineChange=(event)=>{
        this.setState({
            enginetype:event.target.value
        })
    }
    handleSelectColorChange=(event)=>{
        this.setState({
            truckcolor:event.target.value
        })
    }
    handleSelectYearChange=(event)=>{
        this.setState({
            truckmenufyear:event.target.value
        })
    }
    
    handleDescriptionChange=(event)=>{
        this.setState({
            truckdescription:event.target.value
        })
    }
    handleOwnerNameChange=(event)=>{
        this.setState({
            truckownername:event.target.value
        })
    }
    handleOwnerEmailChange=(event)=>{
        this.setState({
            truckowneremail:event.target.value
        })
    }
    handlePhoneNumberChange=(event)=>{
        this.setState({
            truckownerphonenumber:event.target.value
        })
    }
    handleSelectCityChange=(event)=>{
        this.setState({
            truckownercity:event.target.value
        })
    }
    onRadioFuleTypeChange=(event)=>{
        this.setState({
            truckfuletype:event.target.value
        })
    }
    onRadioTransmissionChange=(event)=>{
        this.setState({
            trucktransmission:event.target.value
        })
    }
    
    onRadioDriveChange=(event)=>{
        this.setState({
            truckdriver:event.target.value
        })
    }
    onRadioAirConChange=(event)=>{
        this.setState({
            truckaircon:event.target.value
        })
    }

    handleSubmitTruck=(event)=>{
        event.preventDefault()
        
        const newTruckadd={
            truckprice:this.state.truckprice,
            trucknegotiableprice:this.state.trucknegotiableprice,
            truckcondition:this.state.truckcondition,
            brandname:this.state.brandname,
            modelname:this.state.modelname,
            truckbodytype:this.state.truckbodytype,
            truckmileage:this.state.truckmileage,
            enginetype:this.state.enginetype,
            truckcolor:this.state.truckcolor,
            truckmenufyear:this.state.truckmenufyear,
            truckfuletype:this.state.truckfuletype,
            trucktransmission:this.state.trucktransmission,
            truckdriver:this.state.truckdriver,
            truckaircon:this.state.truckaircon,
            truckdescription:this.state.truckdescription,

            ownername:this.state.ownername,
            owneremail:this.state.owneremail,
            ownercity:this.state.ownercity,
            ownerphonenumber:this.state.ownerphonenumber
            



        }
        console.log(newTruckadd);
    
        axios.post('http://localhost:5000/post-new-truck/new-truck-post',newTruckadd)
        .then(res=>console.log(res.data));
        
        window.location='/';
        
    }
        
          handleClick=()=>{
            let apple1=document.getElementById("hiddencontents");
            apple1.style.display="none";
            let ball1=document.getElementById("someid");
            ball1.style.display="block";
        }
    render() { 
        return ( 
            <div className="container-fluid">
              <div className="inner-new-ads afghanistan">
                    <div className="title"><h1>Post your ad</h1>
                    <p>With 3 Easy And Simple Steps! </p>
                    </div>
                    <div className="cover-background"></div>
                </div>
                <div className="container-sell-car-banner">
                    <div className="new-ad-tabs">
                    <nav id="hiddencontents">
                            <div className="nav" role="tablist">
                                {/* <a aria-selected="false" id="selection-id-hidden" className="nav-item nav-link active" data-toggle="tab" href="#" role="tab">
                                <img src={selected_Img} alt="selectionicone"/>Selection
                                </a> */}
                                <a aria-selected="false"   className="nav-item nav-link active"  data-toggle="tab"
                                 href="link" role="tab">
                                <img src={post_your_ad_icon} alt="selectionicone"/>Post your ad
                                </a>
                                <a aria-selected="false" className="nav-item nav-link disabled" 
                                id="listing-contact-link" data-toggle="tab" href="link" role="tab">
                                <img src={contact_icon} alt="selectionicone"/>Contact
                                </a>
                            </div>
                            
                            <form className="simple_form tab-content new_ad dropzone dz-clickable" 
                            id="listing-form-with-dropzone"  >
                        <div className="nav-profile-tab tab-pane active" aria-labelledby="nav-profile-tab">
                            <div className="form-unit form-post-an-ad" id="postModal" >
                                <div className="new-ad-container">
                                    <h3>Truck Information</h3>
                                </div>
                            </div>
                            <div className="form-unit">
                                <div className="new-ad-container">
                                    <div className="field-price">
                                        <label for="listing_price">
                                            Price
                                        </label>
                                        <span className="currency">AFN</span>
                                        {/* input string required listing_price custom_field_with_errors */}
                                        <input value={ this.state.truckprice} onChange={this.handlePriceChange} 
                                        validate="false" className="string required empty number-input" 
                                        id="price-input" type="Number"  name="listing[price]"/>
                                    </div>
                                    {/* <div className="prise-bottom-text">Price range from 7669 to 23009664</div> */}
                                    <div>
                                    <br/>
                                    
                                    <div className="editable-checkbox-wrapp" >
                                        <label >Negotiable price</label>
                                        {/* <div className="ac-checkbox indent"> */}
                                        <div className="input radio_buttons optional listing_negotiable_price">
                                

                                                <input type="hidden" name="listing[negotiable_price]" value/>
                                                    <span className="radio">
                                                       
                                                        <input className="radio_buttons optional" type="radio" 
                                                        value="true" checked={this.state.trucknegotiableprice==="true"} 
                                                        onChange={this.onRadioNegotiablePriceChange} name="listing[negotiable_price]"
                                                         />
                                                        <label className="collection_radio_buttons" 
                                                        >Yes</label>
                                                    </span>
                                                    <span className="radio">
                                                        <input className="radio_buttons optional" readOnly="readOnly"
                                                          type="radio" value="false" 
                                                         checked={this.state.trucknegotiableprice==="false"}  
                                                         onChange={this.onRadioNegotiablePriceChange} name="listing[negotiable_price]" />
                                                         

                                                         
                                                        <label className="collection_radio_buttons" >No</label>
                                                       
                                                        {/* Value= {this.state.trucknegotiableprice.toString()} */}
                                                    </span>
                                                
                                            </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                                </div>
                                

                            </div>
                        </div>
                           
                        <div className="form-unit">
                        <div className="new-ad-container"> 
                              <label for="listing_condition">Condition</label>
                              {/* <div className="ac-checkbox"> */}
                                <div className="input radio_buttons required listing_condition">
                                  

                                  <span className="radio">
                                    <input className="radio_buttons" type="radio"
                                    checked={this.state.truckcondition==="new"} onChange={this.onRadioConditionChange}
                                      name="listing[condition]" id="listing_condition_1" />
                                    <label className="collection_radio_buttons" for="listing_condition_1">New</label>
                                  </span>

                                  <span className="radio">
                                    <input className="radio_buttons" type="radio" 
                                    value={this.state.truckcondition==="used"} onChange={this.onRadioConditionChange}
                                     name="listing[condition]" id="listing_condition_2" />
                                    <label className="collection_radio_buttons" for="listing_condition_2">Used</label>
                                  </span>
                                  {/* Value= {this.state.truckcondition.toString()} */}
                                </div>
                              {/* </div> */}
                              </div>
                        </div>

                        <div className="form-unit form-unit-post-ad">
                            <div className="new-ad-container" >
                                <div className="select-group-wrapper">
                                <div className>
                              <div className="input select required listing_brand_id"  style={{width:"100%"}}>
                                <select ref="userinput" id="truck-brand-id" value={this.state.brandname} onChange={this.handleSelectBrandName}
                                 className="select1 required chosen-single-select listing-brand-select"
                                 required>
                                     
                                     {/* #################this is when we get data from the database in to the select option ######### */}
                                     {/* in selection box there are many options and we are geting our options form our
                                     brands array */}
                                     {/* map function return each element for an array */}
                                     {/* {
                                         this.state.brands.map(function(brand){
                                             return <option key={brand}
                                         value={brand}>{brand}</option>;
                                         })
                                     } */}
                                    {/* ###################3tell here geting data from the database#########333 */}

                                  <option value="">All</option>
                                  <option value="Caterpillar">Caterpillar</option>
                                  <option value="Citroen">Citroen</option>
                                  <option value="Daewoo">Daewoo</option>
                                  <option value="DAF">DAF</option>
                                  <option value="Daihatsu">Daihatsu</option>
                                  <option value="Fiat">Fiat</option>
                                  <option value="Ford">Ford</option>
                                  <option value="Hino">Hino</option>
                                  <option value="Isuzu">Isuzu</option>
                                  <option value="Iveco">Iveco</option>
                                  <option value="Komatsu">Komatsu</option>
                                  <option value="Man">Man</option>
                                  <option value="Mazda">Mazda</option>
                                  <option value="Mercedes‒Benz">Mercedes‒Benz</option>
                                  <option value="Mitsubishi">Mitsubishi</option>
                                  <option value="Nissan">Nissan</option>
                                  <option value="Peugeot">Peugeot</option>
                                  <option value="Renault">Renault</option>
                                  <option value="Ricomag">Ricomag</option>
                                  <option value="Scania">Scania</option>
                                  <option value="Suzuki">Suzuki</option>
                                  <option value="Toyota">Toyota</option>
                                  <option value="Volkswagen">Volkswagen</option>
                                  <option value="Volvo">Volvo</option>
                                 
                         
                                </select>
                                </div>
                                 <  div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%"}}>
                               
                                <span className="animate-label">Brand</span>
                                
                                </div> 
                              </div>
                            
                                  
                              <div id="simplediv" className >
                              <div className="input select required listing_brand_id"   style={{width:"100%"}}>
                                <select id="truck-model-id" value={this.state.modelname} onChange={this.handleSelectModelName}
                                 className="select1 required chosen-single-select listing-brand-select" >
                                  
                                </select>
                                
                                </div>
                                 <  div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%"}}>
                               
                                <span className="animate-label">Model</span>
                                
                                </div> 
                              </div>

                              <div className>
                              <div className="input select required listing_brand_id"  style={{width:"100%"}}>
                                <select value={this.state.truckbodytype} onChange={this.handleBodyTypeChange} 
                                className="select1 required chosen-single-select listing-brand-select" >
                                  <option value="">All</option>
                                  <option value="Bus/Coach">Buses/Coaches</option>
                                  <option value="Forklifts">Forklifts</option> 
                                  <option value="Semi‒Trailers">Semi‒Trailers</option>
                                  <option value="Semi Trailertrucks">Semi Trailertrucks</option>
                                  <option value="Trucks 7,5t">Trucks over 7,5t</option> 
                                  <option value="Vans 7,5t">Vans / Trucks up to 7,5t</option> 
                                  
                                </select>
                                </div>
                                 <div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%"}}>
                               
                                <span className="animate-label" style={{fontSize:"10px"}}>Truck Type</span>
                                
                                </div> 
                              </div>

                                </div>
                            
                            <div className="new-ad-container">
                                <div className="flex-wrapper">
                                    <div>
                                        <div className="input-animate-wrapp">
                                            <div className="input string optional listing_mileage">
                                                {/* <label className="string optional form-label" for="listing_mileage">
                                                Mileage
                                                </label> */}
                                                <input className="string optional empty animate error-parent-js number-input" 
                                                data-parsley-group="details-about-car" type="text" placeholder="Mileage"
                                                value={this.state.truckmileage} onChange={this.handleMileageChange} 
                                                name="listing[mileage]" id="listing_mileage" />

                                            </div>
                                        </div>
                                        <div className="input-animate-wrapp">
                                            <div className="input string optional listing_engine_capacity">
                                              
                                                   <input className="string optional empty animate error-parent-js engine-input"
                                                    data-parsley-group="details-about-car" placeholder="Engine"
                                                    value={this.state.enginetype} onChange={this.handleEngineChange} 
                                                     type="text" name="listing[engine_capacity]" id="listing_engine_capacity"/> 
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input-animate-wrapp">
                                            <div className="input select optional listing_year" style={{width:"100%",height:"48%"}}   >
                                            <select value={this.state.truckcolor} onChange={this.handleSelectColorChange} 
                                            className="select1 required chosen-single-select listing-brand-select" >
                                                <option value="">All</option>
                                                <option value="Beige">Beige</option>
                                                <option value="Blue">Blue</option>
                                                <option value="Brown">Brown</option>
                                                <option value="Green">Green</option>
                                                <option value="Other">Other</option>
                                                <option value="Red">Red</option>
                                                
                                                <option value="Silver">Silver</option>
                                                <option value="White">White</option>
            
                                                <option value="Yellow">Yellow</option>

                                  
                                             </select>
                                                
                                            </div>
                                            <div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%",marginTop:"-35px"}}>
                               
                               <span className="animate-label">Color</span>
                               
                               </div> 
                                        </div>
                                        <div>
                                        <div className="input-animate-wrapp">
                                            <div className="input select optional listing_year" style={{width:"100%",height:"48%",marginTop:"-32px"}}   >
                                                <select value={this.state.truckmenufyear} onChange={this.handleSelectYearChange}
                                                    className="select1 required chosen-single-select listing-brand-select" >
                                                       <option value="">All</option>
                                                        <option value="2020">2020</option>
                                                        <option value="2019">2019</option>
                                                        <option value="2018">2018</option>
                                                        <option value="2017">2017</option>
                                                        <option value="2016">2016</option>
                                                        <option value="2015">2015</option>
                                                        <option value="2015">2014</option>
                                                        <option value="2015">2013</option>
                                                        <option value="2015">2012</option>
                                                        <option value="2015">2011</option>
                                                        <option value="2015">2010</option>
                                                        <option value="2015">2009</option>
                                                        <option value="2015">2008</option>
                                                        <option value="2015">2007</option>
                                                        <option value="2015">2006</option>
                                                        <option value="2015">2005</option>
                                                        <option value="2015">2004</option>
                                                        <option value="2015">2003</option>
                                                        <option value="2015">2002</option>
                                                        <option value="2015">2001</option>
                                                        <option value="2015">2000</option>

                                  
                                </select>
                                                
                                            </div>
                                            <div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%",marginTop:"-35px"}}>
                               
                               <span className="animate-label">Year</span>
                               
                               </div> 
                                        </div>
                                    </div>
                                    </div>

                                    
                                </div>
                                
                            </div>
                               
                            </div>
                        </div>
                        <div className="form-unit">
                                <div className="new-ad-container">
                                    <div className="flex-checkbox-wrapper">
                                        <div>
                                            <div className="editable-checkbox-wrapp xs-set empty-radio">
                                                <label for="listing_fuel_id">Fuel Type</label>
                                                {/* <div className="ac-checkbox"> */}
                                                    <div className="input radio_buttons required listing_fuel_id">
                                                      
                                                        <span className="radio">
                                                            <input className="radio_buttons required" type="radio"
                                                             value="diesel" checked={this.state.truckfuletype==="diesel"} onChange={this.onRadioFuleTypeChange}
                                                             name="listing[fuel_id]" id="listing_fuel_id_2" 
                                                             data-parsley-multiple="listingfuel_id"/>
                                                             <label className="collection_radio_buttons" for="listing_fuel_id_2">Diesel</label>   
                                                            
                                                        </span>
                                                       
                                                        <span className="radio">
                                                            <input className="radio_buttons required" type="radio" value="petrol"
                                                            checked={this.state.truckfuletype==="petrol"} onChange={this.onRadioFuleTypeChange} 
                                                             name="listing[fuel_id]" id="listing_fuel_id_1" data-parsley-multiple="listingfuel_id"/>
                                                             <label className="collection_radio_buttons" for="listing_fuel_id_1">Petrol</label>   
                                                            
                                                        </span>
                                                        {/* Value= {this.state.truckfuletype.toString()} */}
                                                    </div>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="editable-checkbox-wrapp empty-radio" title="Transmission">
                                                <label for="listing_gear_type">Transmission</label>
                                                {/* <div className="ac-checkbox"> */}
                                                    <div className="input radio_buttons required listing_gear_type">
                                                        <input type="hidden" name="listing[gear_type]" value/> 
                                                        <span className="radio">
                                                            <input className="radio_buttons required" type="radio" value="Manual"
                                                             checked={this.state.trucktransmission==="Manual"} onChange={this.onRadioTransmissionChange} 
                                                             name="listing[gear_type]" id="listing_gear_type_manual" 
                                                             data-parsley-multiple="listinggear_type" data-parsley-id="72"/>
                                                             <label className="collection_radio_buttons"
                                                              for="listing_gear_type_manual">Manual</label>   
                                                            
                                                        </span>
                                                        <span className="radio">
                                                            <input className="radio_buttons required" type="radio" value="Automatic" 
                                                            checked={this.state.trucktransmission==="Automatic"} onChange={this.onRadioTransmissionChange} 
                                                             name="listing[gear_type]" id="listing_gear_type_automatic"
                                                              data-parsley-multiple="listinggear_type"/>
                                                             <label className="collection_radio_buttons" for="listing_fuel_id_1">Automatic</label>   
                                                            
                                                        </span>
                                                        <br/>
                                                        {/* Value= {this.state.trucktransmission.toString()} */}
                                                    </div>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className="flex-checkbox-wrapper hidden-for-moto">
                                    <div>
                                            <div className="editable-checkbox-wrapp">
                                                <label for="listing_wheel">Driver</label>
                                                {/* <div className="ac-checkbox"> */}
                                                    <div className="input radio_buttons optional listing_wheel">
                                                        <input type="hidden" name="listing[wheel]" value/> 
                                                        <span className="radio">
                                                            <input className="radio_buttons optional" type="radio" value="right" 
                                                            checked={this.state.truckdriver==="right"} onChange={this.onRadioDriveChange} 
                                                             name="listing[wheel]" id="listing_wheel_right" data-parsley-multiple="listingwheel" />
                                                             <label className="collection_radio_buttons" for="listing_wheel_right">Right</label>   
                                                            
                                                        </span>
                                                        <span className="radio">
                                                            <input className="radio_buttons optional" type="radio" value="left" 
                                                            checked={this.state.truckdriver==="left"} onChange={this.onRadioDriveChange} 
                                                             name="listing[wheel]" id="listing_wheel_left" data-parsley-multiple="listingwheel"/>
                                                             <label className="collection_radio_buttons" for="listing_wheel_left">Left</label>   
                                                            
                                                        </span>
                                                        {/* Value= {this.state.truckdriver.toString()} */}
                                                    </div>
                                                {/* </div> */}
                                            </div>
                                        </div>


                                        <div>
                                            <div className="editable-checkbox-wrapp">
                                                <label for="listing_climatisation">Air Con</label>
                                                {/* <div className="ac-checkbox indent"> */}
                                                    <div className="input radio_buttons optional listing_climatisation">
                                                        <input type="hidden" name="listing[climatisation]" value/> 
                                                        <span className="radio">
                                                            <input className="radio_buttons optional" type="radio" value="true" 
                                                            checked={this.state.truckaircon==="true"} onChange={this.onRadioAirConChange} 
                                                             name="listing[climatisation]" id="listing_climatisation_true"
                                                             />
                                                             <label className="collection_radio_buttons" for="listing_climatisation_true">Yes</label>   
                                                            
                                                        </span>
                                                        <span className="radio">
                                                            <input className="radio_buttons optional" readOnly="readOnly" type="radio"
                                                             value="false" checked={this.state.truckaircon==="false"} onChange={this.onRadioAirConChange} 
                                                             name="listing[climatisation]" id="listing_climatisation_false" 
                                                             data-parsley-multiple="listingclimatisation"/>
                                                             <label className="collection_radio_buttons" for="listing_climatisation_false">No</label>   
                                                            
                                                        </span>
                                                        {/* Value= {this.state.truckaircon.toString()} */}
                                                    </div>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-unit form-unit-post-ad">
                                <div className="new-ad-container">
                                <label for="listing_fuel_id">Description</label>
                                    <div className="editable-field-wrapp fluid input-animate-wrapp input-description">
                                        <div className="input text required listing_description">
                                           
                                            <textarea className="text required animate af-text-area" id="listing-description" 
                                            value={this.state.truckdescription} onChange={this.handleDescriptionChange} 
                                             maxLength="1000"
                                             placeholder="Example: first owner, genuine parts, maintained by authorized workshop, excellent mileage etc."
                                            required aria_required="true" name="listing[description]"></textarea>
                                            {/* error message here  */}
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="form-unit-post-ad">
                                <div className="new-ad-container">
                                    <div className="drop-file-zone">
                                        <div className="post-ad-bottom-header">
                                            <h2>Photos</h2>
                                            <Upload />
                                            {/* if you want to ad question mark button here ad here  */}
                                        </div>
                                        {/* <div className="dz-message" style={{borderColor:"rgb(186, 194, 205)"}}>
                                            <img src={cloud_icon} alt="upload"/>
                                            <p>Drag here or 
                                                
                                            
                                            <span>browse</span>
                                            to upload
                                            </p>
                                        </div>
                                        <div className="dropzone-previews ui-sortable">

                                        </div> */}
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="form-unit clear">
                                <div className="new-ad-container pb-45">
                                    <button name="button " type="submit" value="commit" onClick={this.handleClick} className="af-btn red lg create-ad-step" 
                                    id="listing-next-step ">Next step<i className="fa fa-long-arrow-right"  /></button>
                                </div>
                            </div>
                        
                            </form>
                             
                                
                        </nav>
                        <div className="making" id="someid" style={{display:"none"}}>
                        <div className="nav" role="tablist">
                                {/* <a aria-selected="false" id="selection-id-hidden" className="nav-item nav-link active" data-toggle="tab" href="#" role="tab">
                                <img src={selected_Img} alt="selectionicone"/>Selection
                                </a> */}
                                <a aria-selected="false"  className="nav-item nav-link disabled"  data-toggle="tab"
                                 href="link" role="tab">
                                <img src={post_your_ad_icon} alt="selectionicone"/>Post your ad
                                </a>
                                <a aria-selected="false"  style={{backgroundColor:"#fff"}} className="nav-item nav-link active" 
                                id="listing-contact-link" data-toggle="tab" href="link" role="tab">
                                <img src={contact_icon} alt="selectionicone"/>Contact
                                </a>
                            </div>
                            <form className="simple_form tab-content new_ad dropzone dz-clickable" onSubmit={this.handleSubmitTruck}

                            id="listing-form-with-dropzone" novalidate data-required="true" 
                            data-form="listing" data-parsley-validate data-parsley-trigger="change" data-parsley-focus="none" >
                             <div className="nav-contact-tab tab-pane fade active show" aria-labelledby="nav-contact-tab" id="nav-contact" role="tabpanel">
                                 
                                 <div className="form-unit form-post-an-ad">
                                     <div className="new-ad-container">
                                         <h2 className="text-center">Contact</h2>
                                         <div className="input-animate-wrapp">
                                             <div className="input string required listing_name">
                                            
                                                {/* <label className="string optional form-label" for="listing_name">
                                                Name
                                                </label> */}
                                                <input className="string required animate " aria-required="true" 
                                                value={this.state.truckownername} onChange={this.handleOwnerNameChange} 
                                                type="text" name="listing[name]" id="listing_name" placeholder="Name" />

                                               
                                             </div>
                                         </div>
                                         <div className="input-animate-wrapp">
                                             <div className="input string optional listing_email">
                                            
                                                {/* <label className="string optional form-label" for="listing_email">
                                                Email
                                                </label> */}
                                                <input className="string email optional animate " 
                                                value={this.state.truckowneremail} onChange={this.handleOwnerEmailChange} 
                                                 type="email" name="listing[email]" id="listing_email" placeholder="Email" />

                                               
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="divider">
                                     <div className="new-ad-container form-unit">
                                         <div className="input-animate-wrapp">
                                         <div className="input select required listing_city_id" style={{marginLeft:"-10px",width:"107%",height:"48%"}}   >
                                            <select value={this.state.truckownercity} onChange={this.handleSelectCityChange} 
                                            className="select1 required chosen-single-select listing-brand-select" >
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
                                         <div className="input-animate-wrapp">
                                    <label className="string optional form-label phone-label" for="user_Phone number">
                                        Phone Number
                                    </label>
                                    <div className="input string optional user_login">
                                        <div className="intl-tel-input allow-dropdown">
                                            <div className="flag-container">
                                                <div className="selected-flag" >
                                                    <div className="iti-flag af"></div>
                                                    
                                                </div>
                                              
                                            </div>
                                            <input className="string optional animate phone-input" 
                                            value={this.state.truckownerphonenumber} onChange={this.handlePhoneNumberChange}
                                            type="tel" 
                                             placeholder="07X XXX XXXX"/>
                                        </div>
                                    </div>
                                    <img src={phone_icon} alt="phone"/>
                                </div>
                                     </div>
                                 </div>
                             </div>   
                             <div className="form-unit clear">
                                <div className="new-ad-container pb-45">
                                    <button name="button " type="submit" onClick={this.handleSubmitTruck}  className="af-btn red lg create-ad-step" 
                                    id="listing-next-step ">Post an ad</button>
                                </div>
                             </div>
                                </form>
                              </div>
                              

                    </div>
                   
                </div>
            </div>

         );
    }
}
 
export default Post_an_ad_Trucks;