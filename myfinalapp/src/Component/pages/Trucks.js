import React, { Component } from 'react';
import SidebarTruckCardFunction from './SidebarTruckCardFunction';

class Trucks extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      brandname:'all',
      modelname:''
     }
  }
  handleSelectBrandName=(event)=>{
    this.setState({
        brandname:event.target.value
    })
             var s1 = document.getElementById("select1");
              var s2 =document.getElementById("select2");
              s2.innerHTML="";
              if(s1.value === "Caterpillar"){
                //   when we run the array the first value which is in small will 
                // be populated as value and the send value which is in captial will be populated as the label value
                  var optionArray4=["120|120"];
                }else if(s1.value === "Citroen"){
                     optionArray4=["Berlingo|Berlingo","Jumper|Jumper"];
                    }else if(s1.value === "Daewoo"){
                      optionArray4=["|"];
                      }else if(s1.value === "DAF"){
                      optionArray4=["CF|CF"];
                      }else if(s1.value === "Daihatsu"){
                       optionArray4=["|"];
                      }else if(s1.value === "Fiat"){
                       optionArray4=["|"];
                      }else if(s1.value === "Ford"){
                       optionArray4=["AEV AMBULANCE|AEV AMBULANCE","E 150 Cargo Van|E 150 Cargo Van"];
                      }else if(s1.value === "Hino"){
                       optionArray4=["300 Series|300 Series","Ranger|Ranger"];
                      }else if(s1.value === "Hyundai"){
                       optionArray4=["Chorus|Chorus","H200|H200"];
                      }else if(s1.value === "Isuzu"){
                       optionArray4=["FTR 850|FTR 850"];
                      }else if(s1.value === "Iveco"){
                       optionArray4=["Cargo|Cargo","CURSOR|CURSOR","Daily|Daily","Zeta|Zeta"];
                      }else if(s1.value === "Komatsu"){
                      optionArray4=["D31S|D31S"];
                      }
                      else if(s1.value === "Man"){
                       optionArray4=["Silent|Silent"];
                      }else if(s1.value === "Mazada"){
                       optionArray4=["|"];
                      }else if(s1.value === "Mercedes‒Benz"){
                       optionArray4=["1117|1117","1120|1120","1127|1127","117|117","1213|1213","1317|1317"
                        ,"1520|1520","1622|1622","1722|1722","1729|1729","1820|1820","1824|1824","1840|1840"
                        ,"1922|1922","1940|1940","2024|2024","2538|2538","2628|2628","Arocs|Arocs","MB100|MB100"
                        ,"Sprinter|Sprinter","Tipper|Tipper","Truck|Truck","Unimog|Unimog","Vito|Vito"];
                      }else if(s1.value === "Mitsubishi"){
                       optionArray4=["L400|L400","Van|Van"];
                      }else if(s1.value === "Nissan"){
                       optionArray4=["Evalia|Evaila","UD|UD"];
                      }else if(s1.value === "Peugeot"){
                       optionArray4=["|"];
                      }else if(s1.value === "Renault"){
                       optionArray4=["D55|D55","G300|G300","Master|Master","PJ|PJ","S–160|S–160",
                        "Tracer|Tracer","Trafic|Trafic","TRM 10000|TRM 10000"];
                      }else if(s1.value === "Ricomag"){
                       optionArray4=["BW200|BW200"];
                      }else if(s1.value === "Scania"){
                       optionArray4=["Irizar|Irizar","R420|R420"];
                      }else if(s1.value === "Suzuki"){
                       optionArray4=["Carry|Carry","Every|Every"];
                      }else if(s1.value === "Toyota"){
                       optionArray4=["DA|DA","Dyna|Dyna","HiAce|HiAce","LITEACE|LITEACE"];
                      }else if(s1.value === "Volkswagen"){
                       optionArray4=["TRUCK|TRUCK"];
                      }else if(s1.value === "Volvo"){
                       optionArray4=["F4|F4"];
                      }
                    for(var option in optionArray4){

                        var pair =optionArray4[option].split("|");
                        var newOption =document.createElement("option");
                        newOption.value=pair[0];
                        newOption.innerHTML=pair[1];
                        s2.options.add(newOption);
                    } 
             
}
onResetClick=(e)=> {
  e.preventDefault();
  document.getElementById("filter_form").reset();
}


      handleSelectModelName=(event)=>{
        this.setState({
            modelname:event.target.value
      })

        }
           

            
  render() {
     
    return ( 
<section >
          <div className="container-fluid" id="container-fluid-1">
            <div className="container" >
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-3 " id="sidebar">
                      <div className="filter-ads" >
                        <form id="filter_form" className="simple_form listing" >
                          <div className="headline headline-desktop">
                            <span>Filters</span>
                            <a id="reset" href="#id" onClick={this.onResetClick}>Reset All</a>
                          </div>
                          <div className="mobile-filter">
                            <div className="filter-section">
                              <div className>
                              <div className="input select required listing_brand_id">
                                <select className="select1 required chosen-single-select listing-brand-select" 
                                data-option="All" data-label="Brand" data-with-all="true" id="select1" value={this.state.brandname} onChange={this.handleSelectBrandName}>
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
                            </div>
                          </div>



                          <div className="mobile-filter" >
                            <div className="filter-section" >
                              <div className="input select required listing_brand_id" >
                                <select className="select required chosen-single-select listing-brand-select" id="select2"
                                data-option="All" data-label="Brand" data-with-all="true" value={this.state.modelname} onChange={this.handleSelectModelName}>
                                 
                                </select>
                                
                              </div>
                            </div>
                          </div>
                          <div className="filter-section">
                              <div className>
                              <label for="listing_fuel_id">Price Range</label>
                              <div className="input select required listing_body_id">
                                <select className="select2 required chosen-single-select listing-body-select"  data-label="car type" data-with-all="true" name="listing[body_id]" id="listing_body_id" >
                                  <option value="">Min</option>
                                  <option value="1000">1000</option>
                                  <option value="10000">10000</option>
                                  <option value="50000">50000</option>
                                  <option value="50000">50000</option>
                                 <option value="100000">100000</option>
                                 <option value="200000">200000</option>
                                  <option value="500000">500000</option>
                                  
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
                          
                          

                          
                            <div className="filter-section">
                              <div className>
                              <div className="input select required listing_brand_id">
                                <select className="select1 required chosen-single-select listing-brand-select" data-option="All" data-label="Brand" data-with-all="true" >
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

                           
                            <div className="filter-section">
                              <div className>
                              <div className="input select required listing_body_id">
                                <select className="select1 required chosen-single-select listing-body-select"  data-label="car type" data-with-all="true" name="listing[body_id]" id="listing_body_id" >
                                  <option value="">All</option>
                                  <option value="Bus/Coach">Buses/Coaches</option>
                                  <option value="Forklifts">Forklifts</option> 
                                  <option value="Semi‒Trailers">Semi‒Trailers</option>
                                  <option value="Semi Trailertrucks">Semi Trailertrucks</option>
                                  <option value="Trucks 7,5t">Trucks over 7,5t</option> 
                                  <option value="Vans 7,5t">Vans / Trucks up to 7,5t</option> 
                                  
                                </select>
                                </div>
                                 <  div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%"}}>
                               
                                <span className="animate-label">Truck type</span>
                                
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
                                  <option value="1000">1000</option>
                                  <option value="10000">10000</option>
                                  <option value="50000">50000</option>
                                  <option value="50000">50000</option>
                                 <option value="100000">100000</option>
                                 <option value="200000">200000</option>
                                  <option value="500000">500000</option>
                                  
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
        <span  id="txt-id" className="text-muted m-5"><h2>Trucks for sale in Afghansitan</h2></span>
        <div className="mainbody">
        
       <SidebarTruckCardFunction />

    

        </div>

       
        </div> 


        </div>

        
        {/* Main card car showing  */}

         
       

                    </div>
                </div>
            
                
            </section>

     );
  }
}
 
export default Trucks;
