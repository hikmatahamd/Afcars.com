import React, { Component } from 'react';
import post_your_ad_icon from  '../assets/postyouradicon.svg';
import contact_icon from  '../assets/contacticon.svg';
import cloud_icon from  '../assets/cloud.png';
import contact_back_icon from  '../assets/contact-back.svg';
import './Post_an_ad_vehicles_click.css';
import './Post_an_ad_Parts.css';
import wheel_tire from '../assets/wheels-tires.svg';
import oils_filters_icon from '../assets/oils-filters.svg';
import exaust_exaust_line_parts_icon from '../assets/exaust-exaust-line-parts.svg';
import suspensions_bumper_parts_icon from '../assets/suspensions-bumper-parts.svg';
import sterling_camshaft_icon from '../assets/sterling-camshaft.svg';
import devices_parts_icon from '../assets/devices-parts.svg';
import cooling_heater_parts_icon from '../assets/cooling-heater-parts.svg';
import disc_brake_pads_parts_icon from '../assets/disc-brake-pads-parts.svg';
import body_part_icon from '../assets/body-part.svg';
import hairness_light_icon from '../assets/hairness-light.svg';
import gearbox_transmissions_icon from '../assets/gearbox-transmissions.svg';
import engine_ignition_parts_icon from '../assets/engine-ignition-parts.svg';


// import $ from 'jquery';
import axios from 'axios';
class Post_an_ad_Parts extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            partprice:'',
            partnegotiableprice:'false',
            partcondition:'',
            brandname:'all',
            modelname:'',
            wheeltire:'',
            oilsfilters:'',
            exaustlineparts:'',
            bumperparts:'',
            sterling:'',
            deviceparts:'',
            discbrakeparts:'',
            coolingheaterparts:'',
            bodyparts:'',
            hairnesslightparts:'',
            gearboxtransmisssionparts:'',
            engineparts:'',
            partdescription:'',
            partownername:'',
            partowneremail:'',
            partownercity:'',
            partownerphonenumber:''
         }
    }
   handleWheelTireSelect=(event)=>{
       this.setState({
           wheel_tire:event.target.value
       })
   }
    handleSelectModelName=(event)=>{
        this.setState({
            modelname:event.target.value
       })
   
        }
    handlePriceChange=(event)=>{
        this.setState({
            partprice:event.target.value
       })
        }
    onRadioNegotiablePriceChange=(event)=>{
        this.setState({
            partnegotiableprice:event.target.value
        })
    }
  
    onRadioConditionChange=(event)=>{
        this.setState({
            partcondition:event.target.value
        })
    }
    
    handleDescriptionChange=(event)=>{
        this.setState({
            partdescription:event.target.value
        })
    }
    handleOwnerNameChange=(event)=>{
        this.setState({
            partownername:event.target.value
        })
    }
    handleOwnerEmailChange=(event)=>{
        this.setState({
            partowneremail:event.target.value
        })
    }
    handlePhoneNumberChange=(event)=>{
        this.setState({
            partownerphonenumber:event.target.value
        })
    }
    

    handleSubmit1=(event)=>{
        event.preventDefault()
        
        const newVehicaladd={
            partprice:this.state.partprice,
            partnegotiableprice:this.state.partnegotiableprice,
            partcondition:this.state.partcondition,
            brandname:this.state.brandname,
            modelname:this.state.modelname,
            partdescription:this.state.partdescription,

            ownername:this.state.ownername,
            owneremail:this.state.owneremail,
            ownercity:this.state.ownercity,
            ownerphonenumber:this.state.ownerphonenumber,
            



        }
        console.log(newVehicaladd);
    
        axios.post('http://localhost:5000/new-ad-post/new-add',newVehicaladd)
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
              parttype: changeEvent.target.value
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
                                 href="latter" role="tab">
                                <img src={post_your_ad_icon} alt="selectionicone"/>Post your ad
                                </a>
                                <a aria-selected="false" className="nav-item nav-link disabled" 
                                id="listing-contact-link" data-toggle="tab" href="no value" role="tab">
                                <img src={contact_icon} alt="selectionicone"/>Contact
                                </a>
                            </div>
                            
                            <form className="simple_form tab-content new_ad dropzone dz-clickable" 
                            id="listing-form-with-dropzone"  >
                        <div className="nav-profile-tab tab-pane active" aria-labelledby="nav-profile-tab">
                            <div className="form-unit form-post-an-ad" id="postModal" >
                                <div className="new-ad-container">
                                    <h2>Spare parts Information</h2>
                                </div>
                            </div>
                            <div className="spare-parts-image-container">
                                <div className="spare-parts-image" data-category-id="649">
                                    <img src={wheel_tire} alt="wheel tire"/>
                                    <div>Wheels & tires</div>
                                    
                                    <label value={this.state.wheeltire} onClick={this.handleWheelTireSelect}>Wheels & tires</label>
                                    {/* Value= {this.state.wheeltire.toString()} */}
                                </div>
                            </div>
                            <div className="spare-parts-image-container">
                                <div className="spare-parts-image" data-category-id="653">
                                    <img src={oils_filters_icon} alt="wheel tire"/>
                                    <div>Oils/ filters </div>
                                </div>
                            </div>
                            <div className="spare-parts-image-container">
                                <div className="spare-parts-image" data-category-id="683">
                                    <img src={exaust_exaust_line_parts_icon} alt="wheel tire"/>
                                    <div>Exaust, Exaust line & parts </div>
                                </div>
                            </div>
                            <div className="spare-parts-image-container">
                                <div className="spare-parts-image" data-category-id="738">
                                    <img src={suspensions_bumper_parts_icon} alt="wheel tire"/>
                                    <div>Suspensions, bumper & parts</div>
                                </div>
                            </div>
                            <div className="spare-parts-image-container">
                                <div className="spare-parts-image" data-category-id="764">
                                    <img src={sterling_camshaft_icon} alt="wheel tire"/>
                                    <div>Sterling & camshaft</div>
                                </div>
                            </div>
                            <div className="spare-parts-image-container">
                                <div className="spare-parts-image" data-category-id="775">
                                    <img src={devices_parts_icon} alt="wheel tire"/>
                                    <div>Devices & parts</div>
                                </div>
                            </div>
                            <div className="spare-parts-image-container">
                                <div className="spare-parts-image" data-category-id="796">
                                    <img src={cooling_heater_parts_icon} alt="wheel tire"/>
                                    <div>Cooling, heater & parts </div>
                                </div>
                            </div>
                            <div className="spare-parts-image-container">
                                <div className="spare-parts-image" data-category-id="820">
                                    <img src={disc_brake_pads_parts_icon} alt="wheel tire"/>
                                    <div>Disc brake, pads & parts </div>
                                </div>
                            </div>
                            <div className="spare-parts-image-container">
                                <div className="spare-parts-image" data-category-id="851">
                                    <img src={body_part_icon} alt="wheel tire"/>
                                    <div>Body part  </div>
                                </div>
                            </div>
                            <div className="spare-parts-image-container">
                                <div className="spare-parts-image" data-category-id="636">
                                    <img src={hairness_light_icon} alt="wheel tire"/>
                                    <div>Hairness & light </div>
                                </div>
                            </div>
                            <div className="spare-parts-image-container">
                                <div className="spare-parts-image" data-category-id="659">
                                    <img src={gearbox_transmissions_icon} alt="wheel tire"/>
                                    <div>Gearbox & transmissions</div>
                                </div>
                            </div>
                            <div className="spare-parts-image-container">
                                <div className="spare-parts-image" data-category-id="702">
                                    <img src={engine_ignition_parts_icon} alt="wheel tire"/>
                                    <div>Engine, ignition & parts </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="new-ad-container">
                                    <label for="listing_condition">Condition</label>
                                    <div className="input radio_buttons required listing_condition" >
                                  

                                  <span className="radio" style={{marginLeft:"20px"}}>
                                    <input className="radio_buttons" type="radio"
                                    checked={this.state.partcondition==="new"} onChange={this.onRadioConditionChange}
                                     value="new" name="listing[condition]" id="listing_condition_1" />
                                    <label className="collection_radio_buttons" for="listing_condition_1">New</label>
                                  </span>

                                  <span className="radio"style={{marginLeft:"20px"}}>
                                    <input className="radio_buttons" type="radio" 
                                    value={this.state.partcondition==="used"} onChange={this.onRadioConditionChange}
                                    name="listing[condition]" id="listing_condition_2" />
                                    <label className="collection_radio_buttons" for="listing_condition_2">Used</label>
                                  </span>
                                  <span className="radio"style={{marginLeft:"20px"}}>
                                    <input className="radio_buttons" type="radio"  
                                    value={this.state.partcondition==="reconditioned"} onChange={this.onRadioConditionChange}
                                    name="listing[condition]" id="listing_condition_2" />
                                    <label className="collection_radio_buttons" for="listing_condition_2">Reconditioned</label>
                                  </span>
                                  {/* Value= {this.state.partcondition.toString()} */}
                                </div>
                                </div>
                            </div>
                            <div className="form-unit form-post-an-ad">
                                     <div className="new-ad-container">
                                         
                                         <div className="input-animate-wrapp" >
                                             <div className="input string required listing_name" >
                                            
                                                {/* <label className="string optional form-label" for="listing_name">
                                                Name
                                                </label> */}
                                                <input className="string required animate " aria-required="true" 
                                                value={this.state.ownername} onChange={this.handleOwnerNameChange} style={{height:"60px"}}
                                                type="text" name="listing[name]" id="listing_name" placeholder="Title of your list" />

                                               
                                             </div>
                                         </div>
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
                                        <input value={ this.state.partprice} onChange={this.handlePriceChange} 
                                        validate="false" className="string required empty number-input" 
                                        id="price-input" type="Number"  name="listing[price]"/>
                                    </div>
                                    {/* <div className="prise-bottom-text">Price range from 7669 to 23009664</div> */}
                                    <div>
                                    <br/>
                                    <br/>
                                    <div className="editable-checkbox-wrapp" >
                                    <div className="new-ad-container">
                                        <label for="listing_condition" >Negotiable price</label>
                                        {/* <div className="ac-checkbox indent"> */}
                                        <div className="input radio_buttons optional listing_negotiable_price">
                                

                                                <input type="hidden" name="listing[negotiable_price]" value/>
                                                    <span className="radio">
                                                       
                                                        <input className="radio_buttons optional" type="radio" 
                                                        value="true" checked={this.state.partnegotiableprice==="true"} 
                                                        onChange={this.onRadioNegotiablePriceChange} name="listing[negotiable_price]"
                                                         />
                                                        <label className="collection_radio_buttons" 
                                                        >Yes</label>
                                                    </span>
                                                    <span className="radio">
                                                        <input className="radio_buttons optional" readOnly="readOnly"
                                                          type="radio" value="false" 
                                                         checked={this.state.partnegotiableprice==="false"}  
                                                         onChange={this.onRadioNegotiablePriceChange} name="listing[negotiable_price]" />
                                                         

                                                         
                                                        <label className="collection_radio_buttons" >No</label>
                                                       
                                                        {/* Value= {this.state.partnegotiableprice.toString()} */}
                                                    </span>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                

                            </div>
                        </div>

                        <div className="form-unit form-unit-post-ad">
                        <div className="new-ad-container" >
                        
                                </div>
                        </div>
                        <div className="form-unit">
                                <div className="new-ad-container">
                                <div className="select-group-wrapper">
                                <div className >
                              <div className="input select required listing_brand_id"  style={{width:"100%"}}>
                                <select ref="userinput" id="brand" value={this.state.brandname} onChange={this.handleSelectBrandName}
                                 className="select1 required chosen-single-select listing-brand-select" 
                                 required>
                                     

                                  <option value="">All</option>
                                  <option value="Abarth">Abarth</option>
                                  <option value="Ac">Ac</option>
                                  <option value="Acura">Acura</option>
                                  <option value="Adler">Adler</option>
                                  <option value="Alfa Romeo">Alfa Romeo</option>
                                  <option value="Alpina">Alpina</option>
                                  <option value="Hummer">Hummer</option>                                  
                                  <option value="Hyundai">Hyundai</option>
                                  <option value="Jeep">Jeep</option>
                                  <option value="Honda">Honda</option>
                                  <option value="Toyota">Toyota</option>
                                  <option value="Lamborghini">Lamborghini</option>
                                  <option value="Land Rover">Land Rover</option>
                                  <option value="Lexus">Lexus</option>
                                  <option value="Mazda">Mazda</option>
                                  <option value="Mega">Mega</option>
                                  <option value="Mercedes">Mercedes</option>
                                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                                  <option value="MINI">MINI</option>
                                  <option value="Mitsubishi">Mitsubishi</option>
                                  <option value="Nissan">Nissan</option>
                                  <option value="Porsche">Porsche</option>
                                  <option value="Puma">Puma</option>
                                  <option value="Rover">Rover</option>
                                  <option value="Zenvo">Zenvo</option>
                                  
                                </select>
                                </div>
                                 <  div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%"}}>
                               
                                <span className="animate-label">Brand</span>
                                
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
                                            value={this.state.partdescription} onChange={this.handleDescriptionChange} 
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
                                            {/* if you want to ad question mark button here ad here  */}
                                        </div>
                                        <div className="dz-message" style={{borderColor:"rgb(186, 194, 205)"}}>
                                            <img src={cloud_icon} alt="upload"/>
                                            <p>Drag here or 
                                                
                                            {/* <input type="file" name="file" onChange={this.onChangeHandler}/> */}
                                            <span>browse</span>
                                            to upload
                                            </p>
                                        </div>
                                        <div className="dropzone-previews ui-sortable">

                                        </div>
                                        alot of work is remaning here
                                    </div>
                                </div>
                            </div>
                            <div className="form-unit clear">
                                <div className="new-ad-container pb-45">
                                    <button name="button " type="submit" value="commit" onClick={this.handleClick3} className="af-btn red lg create-ad-step" 
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
                                 href="no value" role="tab">
                                <img src={post_your_ad_icon} alt="selectionicone"/>Post your ad
                                </a>
                                <a aria-selected="false"  style={{backgroundColor:"#fff"}} className="nav-item nav-link active" 
                                id="listing-contact-link" data-toggle="tab" href="no value" role="tab">
                                <img src={contact_icon} alt="selectionicone"/>Contact
                                </a>
                            </div>
                            <form className="simple_form tab-content new_ad dropzone dz-clickable" onSubmit={this.handleSubmit} 
                            id="listing-form-with-dropzone" novalidate data-required="true" 
                            data-form="listing" data-parsley-validate data-parsley-trigger="change" data-parsley-focus="none" >
                             <div className="nav-contact-tab tab-pane fade active show" aria-labelledby="nav-contact-tab" id="nav-contact" role="tabpanel">
                                 <div className="edit-previous-step">
                                     <img src={contact_back_icon} alt="contect-back-button-img"/>
                                     Edit ad
                                 </div>
                                 <div className="form-unit form-post-an-ad">
                                     <div className="new-ad-container">
                                         <h2 className="text-center">Contact</h2>
                                         <div className="input-animate-wrapp">
                                             <div className="input string required listing_name">
                                            
                                                {/* <label className="string optional form-label" for="listing_name">
                                                Name
                                                </label> */}
                                                <input className="string required animate " aria-required="true" 
                                                value={this.state.ownername} onChange={this.handleOwnerNameChange} 
                                                type="text" name="listing[name]" id="listing_name" placeholder="Name" />

                                               
                                             </div>
                                         </div>
                                         <div className="input-animate-wrapp">
                                             <div className="input string optional listing_email">
                                            
                                                {/* <label className="string optional form-label" for="listing_email">
                                                Email
                                                </label> */}
                                                <input className="string email optional animate " 
                                                value={this.state.owneremail} onChange={this.handleOwnerEmailChange} 
                                                 type="email" name="listing[email]" id="listing_email" placeholder="Email" />

                                               
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="divider">
                                     <div className="new-ad-container form-unit">
                                         <div className="input-animate-wrapp">
                                         <div className="input select required listing_city_id" style={{marginLeft:"-10px",width:"107%",height:"48%"}}   >
                                            <select value={this.state.ownercity} onChange={this.handleSelectCityChange} 
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
                                             <div className="input string optional listing_email" style={{marginLeft:"-10px",width:"107%",height:"48%"}}>
                                            
                                                {/* <label className="string optional form-label" for="listing_email">
                                                telephone number
                                                </label> */}
                                                <input className="string email optional animate "  type="tel"
                                                value={this.state.ownerphonenumber} onChange={this.handlePhoneNumberChange} 
                                                name="listing[email]" id="listing_email" placeholder="telephone Number" />

                                               
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>   
                             <div className="form-unit clear">
                                <div className="new-ad-container pb-45">
                                    <button name="button " type="submit"  className="af-btn red lg create-ad-step" onClick={this.handleSubmit1}
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
 
export default Post_an_ad_Parts;