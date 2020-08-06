import React, { Component } from 'react';
import './Sidebar.css';
// import {Link } from 'react-router-dom';
import SidebarCardFunction from './SidebarCardFunction';
class Sidebar extends Component {
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
          var s1 = document.getElementById("select1");
          var s2 =document.getElementById("select2");
          s2.innerHTML="";
          if(s1.value === "Abarth"){
            //   when we run the array the first value which is in small will 
            // be populated as value and the send value which is in captial will be populated as the label value
              var optionArray=["124 Spider|124 Spider","500|500","500C|500C","595|595","695|695","Grande Punto|Grande Punto","Punto Evo|Punto Evo"];
          }else if(s1.value === "Ac"){
             optionArray=["378 GT Zagato|378 GT Zagato","Ace|Ace","Aceca|Aceca","Cobra|Cobra"];
          }else if(s1.value === "Audi"){
             optionArray=["100|100","200|200","50|50","5000|5000","80|80","90|90","920|920","20|50","A1|A1","A2|A2","A3|A3","A4|A4",
            "A4 allroad|A4 allroad","A5|A5","A6|A6","A6 allroad|A6 allroad","A7|A7","Cabriolet|Cabriolet","Coupe|Coupe","NSU RO 80|NSU RO 80",
            "Q2|Q2","Q3|Q3","Q5|Q5","Q7|Q7","Q8|Q8","quattro|quattro","R8|R8","RS2|RS2","RS3|RS3","RS4|RS4","RS5|RS5","RS6|RS6","RS7|RS7",
            "RS Q3|RS Q3","S1|S1","S2|S2","S3|S3","S4|S4","S5|S5","S6|S6","S7|S7","S8|S8","SQ5|SQ5","SQ7|SQ7","TT|TT","TTS|TTS","Typ R|Typ R","V8|V8"];
          }else if(s1.value === "BMW"){
             optionArray=["02 (E10)|02 (E10)","1er|1er","1M|1M","2000 C/CS|2000 C/CS","2er|2er","2er Active Tourer|2er Active Tourer",
            "2er Grand Tourer|2er Grand Tourer","315|315","3200|3200","321|321","326|326","327|327","340|340","3er|3er","3–Series|3–Series",
            "4er|4er","501|501","502|502","503|503","507|507","5er|5er","5–Series|5–Series","600|600","6er|6er","700|700","7er|7er",
            "8er|8er","E3|E3","E9|E9","i3|i3","i8|i8","M2|M2","M3|M3","M4|M4","M5|M5","M6|M6","New Class|New Class","X1|X1","X2|X1","X3|X3",
            "X4|X4","X5|X5","X6|X6","X6 M|X6 M","X7|X7","Z1|Z1","Z3|Z3","Z3 M|Z3 M","Z4|Z4","Z4 M|Z4 M","Z8|Z8"];
            
          }else if(s1.value === "Daihastu"){
             optionArray=["Altis|Altis","Applause|Applause","Atrai|Atrai","Bee|Bee","Be-go|Be-go","Boon|Boon","Boon Luminas|Boon Luminas","Ceria|Ceria"
            ,"Charade|Charade","Charmant|Charmant","Coo|Coo","Copen|Copen","Cuore|Cuore","Delta Wagon|Delta Wagon","Esse|Esse","Fellow|Fellow","Feroza|Feroza",
            "Gran Move|Gran Move","Hijet|Hijet","Leeza|Leeza","Materia|Materia","MAX|MAX","Midget|Midget","Mira|Mira","Mira Gino|Mira Gino","Move|Move"
            ,"Move Canbus|Move Canbus","Rocky|Rocky","Rugger|Rugger","Sirion|Sirion","Wildcat|Wildcat"];
          }else if(s1.value === "Ford"){
             optionArray=["Aerostar|Aerostar","B-MAX|B-MAX","Capri|Capri","Bronco|Bronco","Club Wagon|Club Wagon","Cougar|Cougar","Crown Victoria|Crown Victoria",
            "Custom|Custom","Escort (North America)|Escort (North America)","E–Series Van|E–Series Van","Excursion|Excursion","Explorer Sport Trac|Explorer Sport Trac"
            ,"Fairlane|Fairlane","Fairmont|Fairmont","Five Hundred|Five Hundred","Focus|Focus","Focus RS|Focus RS","Fusion|Fusion"
            ,"Granada|Granada","GT40|GT40","M151|M151","Model A|Model A","Model T|Model T","Pickup|Pickup","Ranger|Ranger","Thunderbird|Thunderbird"
            ,"V8|V8","Zephyr|Zephyr"];
          }else if(s1.value === "Hummer"){
             optionArray=["H1|H1","H2|H2","H3|H3"];
          }else if(s1.value === "Hyundai"){
             optionArray=["Accent|Accent","Aslan|Aslan","Cargo|Cargo","Centennial|Centennial","Coupe|Coupe","Dynasty|Dynasty","EON|EON","Genesis|Genesis"
            ,"Grace|Grace","H1|H1","H200|H200","i10|i10","i20|i20","i30|i30","i40|i40","Kona|Kona","Veracruz|Veracruz","XG|XG"];
          }else if(s1.value === "Jeep"){
             optionArray=["Cherokee|Cherokee","CJ|CJ","Commander|Commander","Grand Wagoneer|Grand Wagoneer"];
          }else if(s1.value === "Honda"){
            optionArray=["145|145","Accord|Accord","Acty|Acty","Airwave|Airwave","Ascot|Ascot","Ascot Innova|Ascot Innova","City|City","Civic|Civic"
            ,"Civic Ferio|Civic Ferio","Civic Type R|Civic Type R","Crossroad|Crossroad","Crosstour|Crosstour","CR–V|CR–V","CR-X|CR-X","CR-Z|CR-Z"
            ,"Fit|Fit","Fit Shuttle|Fit Shuttle","Freed|Freed","Grace|Grace","HR–V|HR–V","Legend|Legend","Life|Life","Logo|Logo","N360|N360"
            ,"N-One|N-One","N-BOX|N-BOX","N-WGN|N-WGN","Odyssey|Odyssey","Partner|Partner","Passport|Passport","S2000|S2000","S660|S660",
            "Street|Street","Today|Today","Vezel|Vezel","Vigor|Vigor","Z|Z"];
          }else if(s1.value === "Toyota"){
             optionArray=["2000GT|2000GT","4Runner|4Runner","Allex|Allex","Aqua|Aqua","Axio|Axio","Aygo|Aygo","Blade|Blade",
            "Blizzard|Blizzard","Caldina|Caldina","Cami|Cami","Camry|Camry","Camry (Japan)|Camry (Japan)","Camry Solara|Camry Solara"
            ,"Cavalier|Cavalier","C-HR|C-HR","Coaster|Coaster","Comfort|Comfort","Corolla|Corolla","Corolla II|Corolla II",
            "Corolla Rumion|Corolla Rumion","Corolla Spacio|Corolla Spacio","Corolla Verso|Corolla Verso","Corona|Corona"
            ,"Corona EXiV|Corona EXiV","Crown|Crown","Crown Majesta|Crown Majesta","Dolphin|Dolphin","Echo|Echo","Fortuner|Fortuner","Grand HiAce|Grand HiAce"
            ,"Granvia|Granvia","GT86|GT86","Highlander|Highlander","Hilux|Hilux"
            ,"Hilux Surf|Hilux Surf","Land Cruiser|Land Cruiser","Land Cruiser Prado|Land Cruiser Prado","Mark II|Mark II"
            ,"Mark X|Mark X","Mark X ZiO|Mark X ZiO"
            ,"MasterAce Surf|MasterAce Surf","Paseo|Paseo","Passo|Passo","Passo Sette|Passo Sette","Pickup|Pickup","Platz|Platz"
            ,"Prado|Prado","Premio|Premio","Prius|Prius","Prius Alpha|Prius Alpha","Prius c|Prius c","Prius v (+)|Prius v (+)","Probox|Probox"
            ,"RAV4|RAV4","Rush|Rush","Sports 800|Sports 800","Succeed|Succeed"
            ,"Surf|Surf","Urban Cruiser|Urban Cruiser","Vitz|Vitz","Wish|Wish"];
          }else if(s1.value === "Lamborghini"){
             optionArray=["350/400 GT|350/400 GT","Centanario|Centanario","Countach|Countach","Gallardo|Gallardo","Huracán|Huracán",
            "Jalpa|Jalpa","LM001|LM001","LM002|LM002","Reventon|Reventon","Urus Concept|Urus Concept","Veneno|Veneno"];
          }else if(s1.value === "Land Rover"){
             optionArray=["Defender|Defender","Discovery|Discovery","Discovery Sport|Discovery Sport","Range Rover|Range Rover","Range Rover Evoque|Range Rover Evoque"
            ,"Range Rover Sport|Range Rover Sport","Series I|Series I","Series II|Series II","Series III|Series III"];
          }else if(s1.value === "Lexus"){
            optionArray=["CT|CT","ES|ES","ES 300|ES 300","GS|GS","GS F|GS F","IS|IS","LFA|LFA","LX 450|LX 450","LX 570|LX 570","RX 330|RX 330","RX 350|RX 350","SC 430|SC 430","UX|UX"];
          }else if(s1.value === "Mazda"){
             optionArray=["1000|1000","1300|1300","Atenza|Atenza","AZ-Offroad|AZ-Offroad","AZ-Wagon|AZ-Wagon","B–series|B–series","Laputa|Laputa"];
          }else if(s1.value === "Mercedes"){
             optionArray=["Viano|Viano"];
          }else if(s1.value === "Mercedes-Benz"){
             optionArray=["190|190","190 Series|190 Series","190 (W201)|190 (W201)","200|200","230|230","250|250","270D|270D","A-klasse AMG|A-klasse AMG","C-klasse|C-klasse"];
          }else if(s1.value === "Mitsubishi"){
             optionArray=["3000 GT|3000 GT","Airtrek|Airtrek","Carisma|Carisma","Challenger|Challenger","Dingo|Dingo","Eclipse Cross|Eclipse Cross","FTO|FTO","Outlander|Outlander"];
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
                                data-option="All" data-label="Brand" data-with-all="true" id="select1"
                                 value={this.state.brandname} onChange={this.handleSelectBrandName} >
                                <option value="">All</option>
                                  <option value="Abarth">Abarth</option>
                                  <option value="Ac">Ac</option>
                                  <option value="Audi">Audi</option>
                                  <option value="BMW">BMW</option>
                                  <option value="Daihastu">Daihastu</option>
                                  <option value="Ford">Ford</option>
                                  <option value="Hummer">Hummer</option>                                  
                                  <option value="Hyundai">Hyundai</option>
                                  <option value="Jeep">Jeep</option>
                                  <option value="Honda">Honda</option>
                                  <option value="Toyota">Toyota</option>
                                  <option value="Lamborghini">Lamborghini</option>
                                  <option value="Land Rover">Land Rover</option>
                                  <option value="Lexus">Lexus</option>
                                  <option value="Mazda">Mazda</option>  
                                  <option value="Mercedes">Mercedes</option>
                                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                                  <option value="Mitsubishi">Mitsubishi</option>
                                  
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
                                <select className="select required chosen-single-select listing-brand-select"
                                 data-option="All" data-label="Brand" data-with-all="true" id="select2"
                                 value={this.state.modelname} onChange={this.handleSelectModelName} >
                                
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
                                  <option value="SUVs">4 Wheel Drives & SUVs</option>
                                  <option value="Buses">Buses & Vans</option>
                                  <option value="Convertibles">Convertibles</option>
                                  <option value="Hatchback ">Hatchback & Station Wagons</option>
                                  <option value="Saloon">Saloon</option>
                                  <option value="Trucks">Trucks</option>
                                  
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
                                  <option value="">Max</option>
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
        <span  id="txt-id" className="text-muted m-5"><h2>Vehicles for sale in Afghansitan</h2></span>
        <div className="mainbody">
        
       <SidebarCardFunction />

     
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
 
export default Sidebar;

