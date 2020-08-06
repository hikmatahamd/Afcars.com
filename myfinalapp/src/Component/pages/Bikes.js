import React, { Component } from 'react';
import SidebarBikeCardFunction from './SidebarBikeCardFunction';

class Bike extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      brandname:'',
      modelname:''
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
                  var optionArray5=["C|C","F 650|F 650","F 700|F 700","Flink|Flink","G|G","G 450|G 450","GS|GS","HP|HP"
                  ,"K|K","K 1|K 1","K 100|K 100","K 1100|K 1100","K 1200|K 1200","K 1300|K 1300","Krauser MKM 1000|Krauser MKM 1000"
                  ,"R|R","R 100|R 100","R 1100|R 1100","R 1150|R 1150","R1200GS Adventure|R1200GS Adventure","S 1000|S 1000"];
                }else if(s1.value === "CRS"){
                   optionArray5=["650 VUN|650 VUN"];
                    }else if(s1.value === "Crown"){
                    optionArray5=["CR 70 Jazba|CR 70 Jazba","CR 100 Excellence|CR 100 Excellence","CR 125 Euro II|CR 125 Euro II",
                        "CR 70 HD Plus|CR 70 HD Plus"];
                      
                      }else if(s1.value === "Honda"){
                      optionArray5=["CB 150F|CB 150F","CD 70|CD 70","CG 125|CG 125","Pridor|Pridor","CB 125F|CB 125F","CB 250F|CB 250F","CB 500X|CB 500X"
                        ,"CBR 150R|CBR 150R","CBR 500R|CBR 500R","CD 70 Dream|CD 70 Dream","CG 125 Dream|CG 125 Dream","CG 125 Special Edition|CG 125 Special Edition"
                        ,"Deluxe|Deluxe"];
                      }else if(s1.value === "Pamir"){
                       optionArray5=["PAMIR 170 CC|PAMIR 170 CC","PAMIR 180 CC|PAMIR 180 CC","PAMIR 150 CC A|PAMIR 150 CC A","PAMIR150-11B|PAMIR150-11B"];

                      }else if(s1.value === "Yamaha"){
                       optionArray5=["YBR 125|YBR 125","YBR 125G|YBR 125G","YB 125Z |YB 125Z ","YZF-R3|YZF-R3"];
                      }else if(s1.value === "Suzuki"){
                       optionArray5=["Bandit|Bandit","GD 110|GD 110","GD 110S|GD 110S","GS 150|GS 150","GS 150 SE|GS 150 SE","GSX-R600|GSX-R600"
                        ,"Gixxer 150|Gixxer 150","GR 150|GR 150","Hayabusa|Hayabusa","Inazuma|Inazuma","Inazuma Aegis|Inazuma Aegis","Intruder|Intruder"
                        ,"Raider 110|Raider 110","Sprinter ECO|Sprinter ECO"];
                      }else if(s1.value === "Super Power"){
                       optionArray5=["PK 150 Archi|PK 150 Archi ","SP 125|SP 125","SP 70|SP 70","SP 110 Cheetah|SP 110 Cheetah",
                        "Sultan SP 250|Sultan SP 250","Leo 200|Leo 200"];
                      }else if(s1.value === "Chinese Bikes"){
                       optionArray5=["OW Ninja 250cc|OW Ninja 250cc","OW Ninja 300cc|OW Ninja 300cc","OW Ninja 400cc|OW Ninja 400cc"];
                      }else if(s1.value === "Kawasaki"){
                       optionArray5=["GT 550|GT 550","Ninja ZX300|Ninja ZX300"];
                      }

                     // for all option in the optionarray this loop is going to run at least once

              for(var option in optionArray5){

                var pair =optionArray5[option].split("|");
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
  onResetClick=(e)=> {
    e.preventDefault();
    document.getElementById("filter_form").reset();
  }
  render() { 
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
                            <a id="reset" href="#id" onClick={this.onResetClick}>Reset All</a>
                          </div>
                          <div className="mobile-filter">
                            <div className="filter-section">
                              <div className>
                              <div className="input select required listing_brand_id">
                                <select className="select1 required chosen-single-select listing-brand-select" 
                                data-option="All" data-label="Brand" data-with-all="true" id="brand-select-id" value={this.state.brandname} onChange={this.handleSelectBrandName}>
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
                            </div>
                          </div>



                          <div className="mobile-filter" >
                            <div className="filter-section" >
                              <div className="input select required listing_brand_id" >
                                <select className="select required chosen-single-select listing-brand-select" id="model-select-id"
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
                                  <option value="4 Socket">4 Socket</option>
                                  <option value="2 Socket">2 Socket</option>  
                                </select>
                                </div>
                                 <  div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%"}}>
                               
                                <span className="animate-label">moto type</span>
                                
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
        <span  id="txt-id" className="text-muted m-5"><h2>Bikes for sale in Afghansitan</h2></span>
        <div className="mainbody">
        
       <SidebarBikeCardFunction />

    

        </div>

       
        </div> 


        </div>

        
        {/* Main card car showing  */}

         
       

                    </div>
                </div>
            
                
            </section>
       

      </div>
     );
  }
}
 
export default Bike;