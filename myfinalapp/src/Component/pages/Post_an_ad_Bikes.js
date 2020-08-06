import React, { Component } from 'react';
import post_your_ad_icon from  '../assets/postyouradicon.svg';
import contact_icon from  '../assets/contacticon.svg';
import cloud_icon from  '../assets/cloud.png';
// import contact_back_icon from  '../assets/contact-back.svg';

import './Post_an_ad_vehicles_click.css';
// import $ from 'jquery';
import axios from 'axios';
import Upload from './Upload';
class Post_an_ad_Bikes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bikeprice:'',
            bikenegotiableprice:'false',
            bikecondition:'',
            brandname:'all',
            modelname:'',
            enginetype:'',
            Bikemileage:'',
            bikecolor:'',
            bikemenufyear:'',
            bikeantitheftlockfeature:'',
            bikediscbrakefeature:'',
            bikeledlightfeature:'',
            bikewindshieldfeature:'',
            bikedescription:'',
            bikeownername:'',
            bikeowneremail:'',
            bikeownercity:'',
            bikeownerphonenumber:''
         }
    }
    handleSelectBrandName=(event)=>{
        this.setState({
            brandname:event.target.value
        })
                  var s1 = document.getElementById("brand-select-id");
                  var s2 =document.getElementById("model-select-id");
                  s2.innerHTML="";
                  if(s1.value === "BMW"){
                    //   when we run the array the first value which is in small will 
                    // be populated as value and the send value which is in captial will be populated as the label value
                      var optionArray=["C|C","F 650|F 650","F 700|F 700","Flink|Flink","G|G","G 450|G 450","GS|GS","HP|HP"
                      ,"K|K","K 1|K 1","K 100|K 100","K 1100|K 1100","K 1200|K 1200","K 1300|K 1300","Krauser MKM 1000|Krauser MKM 1000"
                      ,"R|R","R 100|R 100","R 1100|R 1100","R 1150|R 1150","R1200GS Adventure|R1200GS Adventure","S 1000|S 1000"];
                    }else if(s1.value === "CRS"){
                        optionArray=["650 VUN|650 VUN"];
                        }else if(s1.value === "Crown"){
                         optionArray=["CR 70 Jazba|CR 70 Jazba","CR 100 Excellence|CR 100 Excellence","CR 125 Euro II|CR 125 Euro II",
                            "CR 70 HD Plus|CR 70 HD Plus"];
                            
                          }else if(s1.value === "Honda"){
                           optionArray=["CB 150F|CB 150F","CD 70|CD 70","CG 125|CG 125","Pridor|Pridor","CB 125F|CB 125F","CB 250F|CB 250F","CB 500X|CB 500X"
                            ,"CBR 150R|CBR 150R","CBR 500R|CBR 500R","CD 70 Dream|CD 70 Dream","CG 125 Dream|CG 125 Dream","CG 125 Special Edition|CG 125 Special Edition"
                            ,"Deluxe|Deluxe"];
                          }else if(s1.value === "Pamir"){
                           optionArray=["PAMIR 170 CC|PAMIR 170 CC","PAMIR 180 CC|PAMIR 180 CC","PAMIR 150 CC A|PAMIR 150 CC A","PAMIR150-11B|PAMIR150-11B"];

                          }else if(s1.value === "Yamaha"){
                           optionArray=["YBR 125|YBR 125","YBR 125G|YBR 125G","YB 125Z |YB 125Z ","YZF-R3|YZF-R3"];
                          }else if(s1.value === "Suzuki"){
                            optionArray=["Bandit|Bandit","GD 110|GD 110","GD 110S|GD 110S","GS 150|GS 150","GS 150 SE|GS 150 SE","GSX-R600|GSX-R600"
                            ,"Gixxer 150|Gixxer 150","GR 150|GR 150","Hayabusa|Hayabusa","Inazuma|Inazuma","Inazuma Aegis|Inazuma Aegis","Intruder|Intruder"
                            ,"Raider 110|Raider 110","Sprinter ECO|Sprinter ECO"];
                          }else if(s1.value === "Super Power"){
                            optionArray=["PK 150 Archi|PK 150 Archi ","SP 125|SP 125","SP 70|SP 70","SP 110 Cheetah|SP 110 Cheetah",
                            "Sultan SP 250|Sultan SP 250","Leo 200|Leo 200"];
                          }else if(s1.value === "Chinese Bikes"){
                            optionArray=["OW Ninja 250cc|OW Ninja 250cc","OW Ninja 300cc|OW Ninja 300cc","OW Ninja 400cc|OW Ninja 400cc"];
                          }else if(s1.value === "Kawasaki"){
                           optionArray=["GT 550|GT 550","Ninja ZX300|Ninja ZX300"];
                          }

                         // for all option in the optionarray this loop is going to run at least once

                  for(var option in optionArray){

                    var pair =optionArray[option].split("|");
                    var newOption =document.createElement("option");
                    newOption.value=pair[0];
                    newOption.innerHTML=pair[1];
                    s2.options.add(newOption);
                } 
}
    handleAntiTheftLockChagne=(event)=>{
        this.setState({
            bikeantitheftlockfeature:event.target.checked
        })
    }
    handleDiscBrakeChagne=(event)=>{
        this.setState({
            bikediscbrakefeature:event.target.checked
        })
    }
    handleWindShieldChagne=(event)=>{
        this.setState({
            bikewindshieldfeature:event.target.checked
        })
    }
    handleLedLightChagne=(event)=>{
        this.setState({
            bikeledlightfeature:event.target.checked
        })
    }
    handleSelectModelName=(event)=>{
        this.setState({
            modelname:event.target.value
       })
   
        }
    handlePriceChange=(event)=>{
        this.setState({
            bikeprice:event.target.value
       })
        }
    onRadioNegotiablePriceChange=(event)=>{
        this.setState({
            bikenegotiableprice:event.target.value
        })
    }
  
    onRadioConditionChange=(event)=>{
        this.setState({
            bikecondition:event.target.value
        })
    }
    handleSelectEngineType=(event)=>{
        this.setState({
            enginetype:event.target.value
        })
    }
    handleMileageChange=(event)=>{
        this.setState({
            bikemileage:event.target.value
        })
    }
    
    handleSelectColorChange=(event)=>{
        this.setState({
            bikecolor:event.target.value
        })
    }
    handleSelectYearChange=(event)=>{
        this.setState({
            bikemenufyear:event.target.value
        })
    }
    
    handleDescriptionChange=(event)=>{
        this.setState({
            bikedescription:event.target.value
        })
    }
    handleOwnerNameChange=(event)=>{
        this.setState({
            bikeownername:event.target.value
        })
    }
    handleOwnerEmailChange=(event)=>{
        this.setState({
            bikeowneremail:event.target.value
        })
    }
    handlePhoneNumberChange=(event)=>{
        this.setState({
            bikeownerphonenumber:event.target.value
        })
    }
    handleSelectCityChange=(event)=>{
        this.setState({
            bikeownercity:event.target.value
        })
    }

    handleSubmitBike=(event)=>{
        event.preventDefault()
        
        const newBikeadd={
            bikeprice:this.state.bikeprice,
            bikenegotiableprice:this.state.bikenegotiableprice,
            
            bikecondition:this.state.bikecondition,
            brandname:this.state.brandname,
            modelname:this.state.modelname,
           
            bikemileage:this.state.bikemileage,
            enginetype:this.state.enginetype,
            bikecolor:this.state.bikecolor,
            bikemenufyear:this.state.bikemenufyear,
            bikeantitheftlockfeature:this.state.bikeantitheftlockfeature,
            bikediscbrakefeature:this.state.bikediscbrakefeature,
            bikeledlightfeature:this.state.bikeledlightfeature,
            bikewindshieldfeature:this.state.bikewindshieldfeature,
            bikedescription:this.state.bikedescription,

            bikeownername:this.state.bikeownername,
            bikeowneremail:this.state.bikeowneremail,
            bikeownercity:this.state.bikeownercity,
            bikeownerphonenumber:this.state.bikeownerphonenumber
          



        }
        console.log(newBikeadd);
    
        axios.post('http://localhost:5000/post-new-bike/new-bike-add',newBikeadd)
        .then(res=>console.log(res.data));
        
        window.location='/';
        
    }
        handleClick3=()=>{
            let apple=document.getElementById("hiddencontents");
            apple.style.display="none";
            
            let ball=document.getElementById("someid");
            ball.style.display="block";
        }
        handleOptionChange=(changeEvent)=> {
            this.setState({
              biketype: changeEvent.target.value
            });
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
                            id="listing-form-with-dropzone">
                        <div className="nav-profile-tab tab-pane active" aria-labelledby="nav-profile-tab">
                            <div className="form-unit form-post-an-ad" id="postModal" >
                                <div className="new-ad-container">
                                    <h3>Bike Information</h3>
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
                                        <input value={ this.state.bikeprice} onChange={this.handlePriceChange} 
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
                                                        value="true" checked={this.state.bikenegotiableprice==="true"} 
                                                        onChange={this.onRadioNegotiablePriceChange} name="listing[negotiable_price]"
                                                         />
                                                        <label className="collection_radio_buttons" 
                                                        >Yes</label>
                                                    </span>
                                                    <span className="radio">
                                                        <input className="radio_buttons optional" readOnly="readOnly"
                                                          type="radio" value="false" 
                                                         checked={this.state.bikenegotiableprice==="false"}  
                                                         onChange={this.onRadioNegotiablePriceChange} name="listing[negotiable_price]" />
                                                         

                                                         
                                                        <label className="collection_radio_buttons" >No</label>
                                                       
                                                        {/* Value= {this.state.bikenegotiableprice.toString()} */}
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
                                    checked={this.state.bikecondition==="new"} onChange={this.onRadioConditionChange}
                                     value="new" name="listing[condition]" id="listing_condition_1" />
                                    <label className="collection_radio_buttons" for="listing_condition_1">New</label>
                                  </span>

                                  <span className="radio">
                                    <input className="radio_buttons" type="radio" 
                                    value={this.state.bikecondition==="used"} onChange={this.onRadioConditionChange}
                                     name="listing[condition]" id="listing_condition_2" />
                                    <label className="collection_radio_buttons" for="listing_condition_2">Used</label>
                                  </span>
                                  {/* Value= {this.state.bikecondition.toString()} */}
                                </div>
                              {/* </div> */}
                              </div>
                        </div>

                        <div className="form-unit form-unit-post-ad">
                            <div className="new-ad-container" >
                                <div className="select-group-wrapper">
                                <div className>
                              <div className="input select required listing_brand_id"  style={{width:"100%"}}>
                                <select ref="userinput" id="brand-select-id" value={this.state.brandname} onChange={this.handleSelectBrandName}
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
                                  <option value="BMW">BMW</option>
                                  <option value="CRS">CRS</option>
                                  <option value="Crown">Crown</option>
                                  <option value="Honda">Honda</option>
                                  <option value="Pamir">Pamir</option>
                                  <option value="Yamaha">Yamaha</option>
                                  <option value="Suzuki">Suzuki</option>
                                  <option value="Super Power">Super Power</option>
                                  <option value="Chinese Bikes">Chinese Bikes</option>
                                  <option value="Kawasaki">Kawasaki</option>
                                 
                         
                                </select>
                                </div>
                                 <  div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%"}}>
                               
                                <span className="animate-label">Brand</span>
                                
                                </div> 
                              </div>
                            
                                  
                              <div id="simplediv" className >
                              <div className="input select required listing_brand_id"   style={{width:"100%"}}>
                                <select id="model-select-id" value={this.state.modelname} onChange={this.handleSelectModelName}
                                 className="select1 required chosen-single-select listing-brand-select" >
              
                                </select>
                                
                                </div>
                                 <  div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%"}}>
                               
                                <span className="animate-label">Model</span>
                                
                                </div> 
                              </div>

                              <div className>
                              <div className="input select required listing_brand_id"  style={{width:"100%"}}>
                                <select value={this.state.enginetype} onChange={this.handleSelectEngineType} 
                                className="select1 required chosen-single-select listing-brand-select" >
                                  <option value="">All</option>
                                  <option value="4 Socket">4 Socket</option>
                                  <option value="2 Socket">2 Socket</option>  
                                </select>
                                </div>
                                 <div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%"}}>
                               
                                <span className="animate-label" style={{fontSize:"10px"}}>Engine Type</span>
                                
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
                                                value={this.state.bikemileage} onChange={this.handleMileageChange} 
                                                name="listing[mileage]" id="listing_mileage" />

                                            </div>
                                        </div>
                                        <div className="input-animate-wrapp">
                                            <div className="input string optional listing_engine_capacity">
                                              
                                                   <input className="string optional empty animate error-parent-js engine-input"
                                                    data-parsley-group="details-about-car" placeholder="Engine"
                                                    value={this.state.bikeengine} onChange={this.handleEngineChange} 
                                                     type="text" name="listing[engine_capacity]" id="listing_engine_capacity"/> 
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input-animate-wrapp">
                                            <div className="input select optional listing_year" style={{width:"100%",height:"48%"}}   >
                                            <select value={this.state.bikecolor} onChange={this.handleSelectColorChange} 
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
                                                <select value={this.state.bikemenufyear} onChange={this.handleSelectYearChange}
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
                                <label for="listing_fuel_id">Features</label>
                                    <div className="flex-checkbox-wrapper">
                                        <div>
                                       
                                                

                        
                                            <div className="editable-checkbox-wrapp xs-set empty-radio">
                                            <div className="custom-control custom-checkbox custom-control-inline">
                                                <input type="checkbox" class="custom-control-input" id="defaultInline1" 
                                                onClick={this.handleAntiTheftLockChagne}  checked={this.state.bikeantitheftlockfeature}/>
                                                <label className="custom-control-label" for="defaultInline1"> Anti Theft Lock</label>
                                                </div>
                                                {/* Value= {this.state.bikeantitheftlockfeature.toString()} */}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="editable-checkbox-wrapp empty-radio" title="Transmission">
                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                <input type="checkbox" className="custom-control-input" id="defaultInline2"
                                                onClick={this.handleDiscBrakeChagne} checked={this.state.bikediscbrakefeature} />
                                                <label className="custom-control-label" for="defaultInline2"> Disc Brake</label>
                                                </div>
                                                {/* Value= {this.state.bikediscbrakefeature.toString()} */}

                                            
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className="flex-checkbox-wrapper hidden-for-moto">
                                    <div>
                                            <div className="editable-checkbox-wrapp">
                                                
                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                <input type="checkbox" class="custom-control-input" id="defaultInline3" 
                                                onClick={this.handleLedLightChagne} checked={this.state.bikeledlightfeature}/>
                                                <label className="custom-control-label" for="defaultInline3"> Led Light</label>
                                                
                                             </div>
                                             {/* Value= {this.state.bikeledlightfeature.toString()} */}
                                            </div>
                                        </div>


                                        <div>
                                            <div className="editable-checkbox-wrapp">
                                                
                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                <input type="checkbox" class="custom-control-input" id="defaultInline4" 
                                                onClick={this.handleWindShieldChagne} checked={this.state.bikewindshieldfeature}/>
                                                <label className="custom-control-label" for="defaultInline4"> Wind Shield</label>
                                                
                                                </div>
                                                {/* Value= {this.state.bikewindshieldfeature.toString()} */}
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
                                            value={this.state.bikedescription} onChange={this.handleDescriptionChange} 
                                          
                                             placeholder="Example: first owner, genuine parts, maintained by authorized workshop, excellent mileage etc."
                                             name="listing[description]"></textarea>
                                           
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
                                        </div>
                                        {/* <div className="dz-message" style={{borderColor:"rgb(186, 194, 205)"}}>
                                            <img src={cloud_icon} alt="upload"/>
                                            <p>Drag here or 
                                                
                                           
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
                                    <button name="button " type="submit" value="commit"  onClick={this.handleClick3}  className="af-btn red lg create-ad-step" 
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
                            <form className="simple_form tab-content new_ad dropzone dz-clickable" onSubmit={this.handleSubmitBike}
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
                                                value={this.state.bikeownername} onChange={this.handleOwnerNameChange} 
                                                type="text" name="listing[name]" id="listing_name" placeholder="Name" />

                                               
                                             </div>
                                         </div>
                                         <div className="input-animate-wrapp">
                                             <div className="input string optional listing_email">
                                            
                                                {/* <label className="string optional form-label" for="listing_email">
                                                Email
                                                </label> */}
                                                <input className="string email optional animate " 
                                                value={this.state.bikeowneremail} onChange={this.handleOwnerEmailChange} 
                                                 type="email" name="listing[email]" id="listing_email" placeholder="Email" />

                                               
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="divider">
                                     <div className="new-ad-container form-unit">
                                         <div className="input-animate-wrapp">
                                         <div className="input select required listing_city_id" style={{marginLeft:"-10px",width:"107%",height:"48%"}}   >
                                            <select value={this.state.bikeownercity} onChange={this.handleSelectCityChange} 
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
                                            value={this.state.userphonenumber} onChange={this.handlePhoneNumberChange}
                                            type="tel" 
                                             placeholder="07X XXX XXXX"/>
                                        </div>
                                    </div>
                                  
                                </div>
                                     </div>
                                 </div>
                             </div>   
                             <div className="form-unit clear">
                                <div className="new-ad-container pb-45">
                                    <button name="button " type="submit" onClick={this.handleSubmitBike} className="af-btn red lg create-ad-step" 
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
 
export default Post_an_ad_Bikes;