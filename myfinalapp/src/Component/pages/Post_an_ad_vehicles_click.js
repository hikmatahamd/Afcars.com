import React, { Component } from 'react';
// import FileUpload from './FileUpload';
import Upload from './Upload';

import post_your_ad_icon from  '../assets/postyouradicon.svg';
import contact_icon from  '../assets/contacticon.svg';
// import cloud_icon from  '../assets/cloud.png';
// import contact_back_icon from  '../assets/contact-back.svg';
import './Post_an_ad_vehicles_click.css';
import axios from 'axios';

class Post_an_ad_vehicles_click extends Component {
    constructor(props){
        super(props);
        
        this.state={
            vehicalprice:'',
            vehicalnegotiableprice:'false',   
            selectedOption: 'option1',
            vehicalcondition:'',
            brandname:'all',
            modelname:'',
            bodytype:'',
            vehicalmileage:'',
            vehicalengine:'',
            vehicalcolor:'',
            vehicalmenufyear:'',
            vehicalfuletype:'',
            vehicaltransmission:'',
            vehicaldriver:'',
            vehicalaircon:'',
            vehicaldescription:'',

            ownername:'',
            owneremail:'',
            ownercity:'',
            ownerphonenumber:'',   
        

        };
       
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
                      var optionArray2=["124 Spider|124 Spider","500|500","500C|500C","595|595","695|695","Grande Punto|Grande Punto","Punto Evo|Punto Evo"];
                  }else if(s1.value === "Ac"){
                     optionArray2=["378 GT Zagato|378 GT Zagato","Ace|Ace","Aceca|Aceca","Cobra|Cobra"];
                  }else if(s1.value === "Audi"){
                     optionArray2=["100|100","200|200","50|50","5000|5000","80|80","90|90","920|920","20|50","A1|A1","A2|A2","A3|A3","A4|A4",
                    "A4 allroad|A4 allroad","A5|A5","A6|A6","A6 allroad|A6 allroad","A7|A7","Cabriolet|Cabriolet","Coupe|Coupe","NSU RO 80|NSU RO 80",
                    "Q2|Q2","Q3|Q3","Q5|Q5","Q7|Q7","Q8|Q8","quattro|quattro","R8|R8","RS2|RS2","RS3|RS3","RS4|RS4","RS5|RS5","RS6|RS6","RS7|RS7",
                    "RS Q3|RS Q3","S1|S1","S2|S2","S3|S3","S4|S4","S5|S5","S6|S6","S7|S7","S8|S8","SQ5|SQ5","SQ7|SQ7","TT|TT","TTS|TTS","Typ R|Typ R","V8|V8"];
                  }else if(s1.value === "BMW"){
                    optionArray2=["02 (E10)|02 (E10)","1er|1er","1M|1M","2000 C/CS|2000 C/CS","2er|2er","2er Active Tourer|2er Active Tourer",
                    "2er Grand Tourer|2er Grand Tourer","315|315","3200|3200","321|321","326|326","327|327","340|340","3er|3er","3–Series|3–Series",
                    "4er|4er","501|501","502|502","503|503","507|507","5er|5er","5–Series|5–Series","600|600","6er|6er","700|700","7er|7er",
                    "8er|8er","E3|E3","E9|E9","i3|i3","i8|i8","M2|M2","M3|M3","M4|M4","M5|M5","M6|M6","New Class|New Class","X1|X1","X2|X1","X3|X3",
                    "X4|X4","X5|X5","X6|X6","X6 M|X6 M","X7|X7","Z1|Z1","Z3|Z3","Z3 M|Z3 M","Z4|Z4","Z4 M|Z4 M","Z8|Z8"];
                    
                  }else if(s1.value === "Daihastu"){
                    optionArray2=["Altis|Altis","Applause|Applause","Atrai|Atrai","Bee|Bee","Be-go|Be-go","Boon|Boon","Boon Luminas|Boon Luminas","Ceria|Ceria"
                    ,"Charade|Charade","Charmant|Charmant","Coo|Coo","Copen|Copen","Cuore|Cuore","Delta Wagon|Delta Wagon","Esse|Esse","Fellow|Fellow","Feroza|Feroza",
                    "Gran Move|Gran Move","Hijet|Hijet","Leeza|Leeza","Materia|Materia","MAX|MAX","Midget|Midget","Mira|Mira","Mira Gino|Mira Gino","Move|Move"
                    ,"Move Canbus|Move Canbus","Rocky|Rocky","Rugger|Rugger","Sirion|Sirion","Wildcat|Wildcat"];
                  }else if(s1.value === "Ford"){
                    optionArray2=["Aerostar|Aerostar","B-MAX|B-MAX","Capri|Capri","Bronco|Bronco","Club Wagon|Club Wagon","Cougar|Cougar","Crown Victoria|Crown Victoria",
                    "Custom|Custom","Escort (North America)|Escort (North America)","E–Series Van|E–Series Van","Excursion|Excursion","Explorer Sport Trac|Explorer Sport Trac"
                    ,"Fairlane|Fairlane","Fairmont|Fairmont","Five Hundred|Five Hundred","Focus|Focus","Focus RS|Focus RS","Fusion|Fusion"
                    ,"Granada|Granada","GT40|GT40","M151|M151","Model A|Model A","Model T|Model T","Pickup|Pickup","Ranger|Ranger","Thunderbird|Thunderbird"
                    ,"V8|V8","Zephyr|Zephyr"];
                  }else if(s1.value === "Hummer"){
                     optionArray2=["H1|H1","H2|H2","H3|H3"];
                  }else if(s1.value === "Hyundai"){
                    optionArray2=["Accent|Accent","Aslan|Aslan","Cargo|Cargo","Centennial|Centennial","Coupe|Coupe","Dynasty|Dynasty","EON|EON","Genesis|Genesis"
                    ,"Grace|Grace","H1|H1","H200|H200","i10|i10","i20|i20","i30|i30","i40|i40","Kona|Kona","Veracruz|Veracruz","XG|XG"];
                  }else if(s1.value === "Jeep"){
                     optionArray2=["Cherokee|Cherokee","CJ|CJ","Commander|Commander","Grand Wagoneer|Grand Wagoneer"];
                  }else if(s1.value === "Honda"){
                     optionArray2=["145|145","Accord|Accord","Acty|Acty","Airwave|Airwave","Ascot|Ascot","Ascot Innova|Ascot Innova","City|City","Civic|Civic"
                    ,"Civic Ferio|Civic Ferio","Civic Type R|Civic Type R","Crossroad|Crossroad","Crosstour|Crosstour","CR–V|CR–V","CR-X|CR-X","CR-Z|CR-Z"
                    ,"Fit|Fit","Fit Shuttle|Fit Shuttle","Freed|Freed","Grace|Grace","HR–V|HR–V","Legend|Legend","Life|Life","Logo|Logo","N360|N360"
                    ,"N-One|N-One","N-BOX|N-BOX","N-WGN|N-WGN","Odyssey|Odyssey","Partner|Partner","Passport|Passport","S2000|S2000","S660|S660",
                    "Street|Street","Today|Today","Vezel|Vezel","Vigor|Vigor","Z|Z"];
                  }else if(s1.value === "Toyota"){
                     optionArray2=["2000GT|2000GT","4Runner|4Runner","Allex|Allex","Aqua|Aqua","Axio|Axio","Aygo|Aygo","Blade|Blade",
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
                     optionArray2=["350/400 GT|350/400 GT","Centanario|Centanario","Countach|Countach","Gallardo|Gallardo","Huracán|Huracán",
                    "Jalpa|Jalpa","LM001|LM001","LM002|LM002","Reventon|Reventon","Urus Concept|Urus Concept","Veneno|Veneno"];
                  }else if(s1.value === "Land Rover"){
                     optionArray2=["Defender|Defender","Discovery|Discovery","Discovery Sport|Discovery Sport","Range Rover|Range Rover","Range Rover Evoque|Range Rover Evoque"
                    ,"Range Rover Sport|Range Rover Sport","Series I|Series I","Series II|Series II","Series III|Series III"];
                  }else if(s1.value === "Lexus"){
                     optionArray2=["CT|CT","ES|ES","ES 300|ES 300","GS|GS","GS F|GS F","IS|IS","LFA|LFA","LX 450|LX 450","LX 570|LX 570","RX 330|RX 330","RX 350|RX 350","SC 430|SC 430","UX|UX"];
                  }else if(s1.value === "Mazda"){
                     optionArray2=["1000|1000","1300|1300","Atenza|Atenza","AZ-Offroad|AZ-Offroad","AZ-Wagon|AZ-Wagon","B–series|B–series","Laputa|Laputa"];
                  }else if(s1.value === "Mercedes"){
                     optionArray2=["Viano|Viano"];
                  }else if(s1.value === "Mercedes-Benz"){
                     optionArray2=["190|190","190 Series|190 Series","190 (W201)|190 (W201)","200|200","230|230","250|250","270D|270D","A-klasse AMG|A-klasse AMG","C-klasse|C-klasse"];
                  }else if(s1.value === "Mitsubishi"){
                    optionArray2=["3000 GT|3000 GT","Airtrek|Airtrek","Carisma|Carisma","Challenger|Challenger","Dingo|Dingo","Eclipse Cross|Eclipse Cross","FTO|FTO","Outlander|Outlander"];
                  }
                // for all option in the optionarray this loop is going to run at least once

                  for(var option in optionArray2){

                      var pair =optionArray2[option].split("|");
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
                vehicalprice:event.target.value
           })
            }
        onRadioNegotiablePriceChange=(event)=>{
            this.setState({
                vehicalnegotiableprice:event.target.value
            })
        }
        onRadioConditionChange=(event)=>{
            this.setState({
                vehicalcondition:event.target.value
            })
        }
        handleSelectBodyTypeName=(event)=>{
            this.setState({
                bodytype:event.target.value
            })
        }
        handleMileageChange=(event)=>{
            this.setState({
                vehicalmileage:event.target.value
            })
        }
        handleEngineChange=(event)=>{
            this.setState({
                vehicalengine:event.target.value
            })
        }
        handleSelectColorChange=(event)=>{
            this.setState({
                vehicalcolor:event.target.value
            })
        }
        handleSelectYearChange=(event)=>{
            this.setState({
                vehicalmenufyear:event.target.value
            })
        }
        onRadioFuleTypeChange=(event)=>{
            this.setState({
                vehicalfuletype:event.target.value
            })
        }
        onRadioTransmissionChange=(event)=>{
            this.setState({
                vehicaltransmission:event.target.value
            })
        }
        onRadioTransmissionChange=(event)=>{
            this.setState({
                vehicaltransmission:event.target.value
            })
        }
        onRadioDriveChange=(event)=>{
            this.setState({
                vehicaldriver:event.target.value
            })
        }
        onRadioAirConChange=(event)=>{
            this.setState({
                vehicalaircon:event.target.value
            })
        }
        handleDescriptionChange=(event)=>{
            this.setState({
                vehicaldescription:event.target.value
            })
        }
        handleOwnerNameChange=(event)=>{
            this.setState({
                ownername:event.target.value
            })
        }
        handleOwnerEmailChange=(event)=>{
            this.setState({
                owneremail:event.target.value
            })
        }
        handlePhoneNumberChange=(event)=>{
            this.setState({
                ownerphonenumber:event.target.value
            })
        }
        handleSelectCityChange=(event)=>{
            this.setState({
                ownercity:event.target.value
            })
        }
     

        handleSubmit2(event) {
            event.preventDefault();
            alert(
              `Selected file - ${this.fileInput.current.files[0].name}`
            );
          }
        handleSubmit1=(event)=>{
            // alert(`${this.state.phoneNumber} ${this.state.password} ${this.state.check}`)
            event.preventDefault()
            
            const newVehicaladd={
                vehicalprice:this.state.vehicalprice,
                vehicalnegotiableprice:this.state.vehicalnegotiableprice,
                vehicalcondition:this.state.vehicalcondition,
                brandname:this.state.brandname,
                modelname:this.state.modelname,
                bodytype:this.state.bodytype,
                vehicalmileage:this.state.vehicalmileage,
                vehicalengine:this.state.vehicalengine,
                vehicalcolor:this.state.vehicalcolor,
                vehicalmenufyear:this.state.vehicalmenufyear,
                vehicalfuletype:this.state.vehicalfuletype,
                vehicaltransmission:this.state.vehicaltransmission,
                vehicaldriver:this.state.vehicaldriver,
                vehicalaircon:this.state.vehicalaircon,
                vehicaldescription:this.state.vehicaldescription,
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
        

        // onClickHandler = () => {
        //     const data = new FormData()
        //     data.append('file', this.state.selectedFile)
        //     axios.post("http://localhost:5000/uploads", data, { 
        //        // receive two    parameter endpoint url ,form data
        //    })
        //  .then(res => { // then print response status
        //      console.log(res.statusText)
        //   })
        //  }
            handleClick3=()=>{
                let apple=document.getElementById("hiddencontents");
                apple.style.display="none";
                let ball=document.getElementById("someid");
                ball.style.display="block";
            }
            handleOptionChange=(changeEvent)=> {
                this.setState({
                  vehicaltype: changeEvent.target.value
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
                            id="listing-form-with-dropzone" method="POST" encType="multipart/form-data" >
                        <div className="nav-profile-tab tab-pane active" aria-labelledby="nav-profile-tab">
                            <div className="form-unit form-post-an-ad" id="postModal" >
                                <div className="new-ad-container">
                                    <h3>Car Information</h3>
                                </div>
                            </div>
                            <div className="form-unit">
                                <div className="new-ad-container">
                                    <div className="field-price">
                                        <label htmlFor="listing_price">
                                            Price
                                        </label>
                                        <span className="currency">AFN</span>
                                        {/* input string required listing_price custom_field_with_errors */}
                                        <input value={ this.state.vehicalprice} onChange={this.handlePriceChange} 
                                        validate="false" className="string required empty number-input" 
                                        id="price-input" type="Number"  name="listing[price]"/>
                                    </div>
                                    {/* <div className="prise-bottom-text">Price range from 7669 to 23009664</div> */}
                                    <div>
                                    <br/>
                                    <br/>
                                    
                                    <div className="editable-checkbox-wrapp" >
                                        <label htmlFor="nog">Negotiable price</label>
                                        {/* <div className="ac-checkbox indent"> */}
                                            <div className="input radio_buttons optional listing_negotiable_price">
                                

                                                <input type="hidden" name="listing[negotiable_price]" value/>
                                                    <span className="radio">
                                                       
                                                        <input className="radio_buttons optional" type="radio" 
                                                        value="true" checked={this.state.vehicalnegotiableprice==="true"} 
                                                        onChange={this.onRadioNegotiablePriceChange} name="listing[negotiable_price]"
                                                         />
                                                        <label className="collection_radio_buttons" 
                                                        >Yes</label>
                                                    </span>
                                                    <span className="radio">
                                                        <input className="radio_buttons optional" readOnly="readOnly"
                                                          type="radio" value="false" 
                                                         checked={this.state.vehicalnegotiableprice==="false"}  
                                                         onChange={this.onRadioNegotiablePriceChange} name="listing[negotiable_price]" />
                                                        <label className="collection_radio_buttons" >No</label>
                                                       
                                                        {/* Value= {this.state.vehicalnegotiableprice.toString()} */}
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
                              <label htmlFor="listing_condition">Condition</label>
                              {/* <div className="ac-checkbox"> */}
                                <div className="input radio_buttons required listing_condition">
                                  

                                  <span className="radio">
                                    <input className="radio_buttons" type="radio" value="New"
                                    checked={this.state.vehicalcondition==="new"} onChange={this.onRadioConditionChange}
                                      name="listing[condition]" id="listing_condition_1" />
                                    <label className="collection_radio_buttons" htmlFor="listing_condition_1">New</label>
                                  </span>

                                  <span className="radio">
                                    <input className="radio_buttons" type="radio" value="used"
                                    checked={this.state.vehicalcondition==="used"} onChange={this.onRadioConditionChange}
                                    name="listing[condition]" id="listing_condition_2" />
                                    <label className="collection_radio_buttons" htmlFor="listing_condition_2">Used</label>
                                  </span>
                                  {/* Value= {this.state.vehicalcondition.toString()} */}
                                </div>
                              {/* </div> */}
                              </div>
                        </div>

                        <div className="form-unit form-unit-post-ad">
                            <div className="new-ad-container" >
                                <div className="select-group-wrapper">
                                   <div className>
                                     <div className="input select required listing_brand_id"  style={{width:"100%"}}>
                                       <select value={this.state.brandname} onChange={this.handleSelectBrandName}
                                          className="select1 required chosen-single-select listing-brand-select" id="select1" name="select1"
                                          required="required">
                                     
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
                            
                                  
                              <div id="simplediv" className >
                              <div className="input select required listing_brand_id"   style={{width:"100%"}}>
                                <select value={this.state.modelname} onChange={this.handleSelectModelName}
                                 className="select1 required chosen-single-select listing-brand-select" id="select2" name="select2">
                                   
                                </select>
                                
                                </div>
                                 <  div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%"}}>
                               
                                <span className="animate-label">Model</span>
                                
                                </div> 
                              </div>

                              <div className>
                              <div className="input select required listing_brand_id"  style={{width:"100%"}}>
                                <select value={this.state.bodytype} onChange={this.handleSelectBodyTypeName} 
                                className="select1 required chosen-single-select listing-brand-select" >
                                  <option value="">All</option>
                                  <option value="SUVs">4 Wheel Drives & SUVs</option>
                                  <option value="Buses">Buses & Vans</option>
                                  <option value="Convertibles">Convertibles</option>
                                  <option value="Hatchback ">Hatchback & Station Wagons</option>
                                  <option value="Saloon">Saloon</option>
                                  <option value="Trucks">Trucks</option>
                                  
                                  
                                </select>
                                </div>
                                 <div className="chosen-container chosen-container-single filled" title_id="listing_brand_id_chosen" style={{width:"100%"}}>
                               
                                <span className="animate-label">Body Type</span>
                                
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
                                                value={this.state.vehicalmileage} onChange={this.handleMileageChange} 
                                                name="listing[mileage]" id="listing_mileage" />

                                            </div>
                                        </div>
                                        <div className="input-animate-wrapp">
                                            <div className="input string optional listing_engine_capacity">
                                               {/* <label className="string optional form-label" for="listing_engine_capacity">
                                               Engine
                                                   </label> */}
                                                   <input className="string optional empty animate error-parent-js engine-input"
                                                    data-parsley-group="details-about-car" placeholder="Engine"
                                                    value={this.state.vehicalengine} onChange={this.handleEngineChange} 
                                                     type="text" name="listing[engine_capacity]" id="listing_engine_capacity"/> 
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input-animate-wrapp">
                                            <div className="input select optional listing_year" style={{width:"100%",height:"48%"}}   >
                                            <select value={this.state.vehicalcolor} onChange={this.handleSelectColorChange} 
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
                                            <div className="input select optional listing_year" style={{width:"100%",height:"48%" ,marginTop:"-30px"}}   >
                                                <select value={this.state.vehicalmenufyear} onChange={this.handleSelectYearChange}
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
                                                <label htmlFor="listing_fuel_id">Fuel Type</label>
                                                {/* <div className="ac-checkbox"> */}
                                                    <div className="input radio_buttons required listing_fuel_id">
                                                      
                                                        <span className="radio">
                                                            <input className="radio_buttons required" type="radio"
                                                             value="diesel" checked={this.state.vehicalfuletype==="diesel"} onChange={this.onRadioFuleTypeChange}
                                                             name="listing[fuel_id]" id="listing_fuel_id_2" 
                                                             data-parsley-multiple="listingfuel_id"/>
                                                             <label className="collection_radio_buttons" htmlFor="listing_fuel_id_2">Diesel</label>   
                                                            
                                                        </span>
                                                       
                                                        <span className="radio">
                                                            <input className="radio_buttons required" type="radio" value="petrol"
                                                            checked={this.state.vehicalfuletype==="petrol"} onChange={this.onRadioFuleTypeChange} 
                                                             name="listing[fuel_id]" id="listing_fuel_id_1" data-parsley-multiple="listingfuel_id"/>
                                                             <label className="collection_radio_buttons" htmlFor="listing_fuel_id_1">Petrol</label>   
                                                            
                                                        </span>
                                                        {/* Value= {this.state.vehicalfuletype.toString()} */}
                                                    </div>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="editable-checkbox-wrapp empty-radio" title="Transmission">
                                                <label htmlFor="listing_gear_type">Transmission</label>
                                                {/* <div className="ac-checkbox"> */}
                                                    <div className="input radio_buttons required listing_gear_type">
                                                        <input type="hidden" name="listing[gear_type]" value/> 
                                                        <span className="radio">
                                                            <input className="radio_buttons required" type="radio" value="manual"
                                                             checked={this.state.vehicaltransmission==="manual"} onChange={this.onRadioTransmissionChange} 
                                                             name="listing[gear_type]" id="listing_gear_type_manual" 
                                                             data-parsley-multiple="listinggear_type" data-parsley-id="72"/>
                                                             <label className="collection_radio_buttons"
                                                              htmlFor="listing_gear_type_manual">Manual</label>   
                                                            
                                                        </span>
                                                        <span className="radio">
                                                            <input className="radio_buttons required" type="radio" value="auto" 
                                                            checked={this.state.vehicaltransmission==="auto"} onChange={this.onRadioTransmissionChange} 
                                                             name="listing[gear_type]" id="listing_gear_type_automatic"
                                                              data-parsley-multiple="listinggear_type"/>
                                                             <label className="collection_radio_buttons" htmlFor="listing_fuel_id_1">Automatic</label>   
                                                            
                                                        </span>
                                                        <br/>
                                                        {/* Value= {this.state.vehicaltransmission.toString()} */}
                                                    </div>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className="flex-checkbox-wrapper hidden-for-moto">
                                    <div>
                                            <div className="editable-checkbox-wrapp">
                                                <label htmlFor="listing_wheel">Driver</label>
                                                {/* <div className="ac-checkbox"> */}
                                                    <div className="input radio_buttons optional listing_wheel">
                                                        <input type="hidden" name="listing[wheel]" value/> 
                                                        <span className="radio">
                                                            <input className="radio_buttons optional" type="radio" value="right" 
                                                            checked={this.state.vehicaldriver==="right"} onChange={this.onRadioDriveChange} 
                                                             name="listing[wheel]" id="listing_wheel_right" data-parsley-multiple="listingwheel" />
                                                             <label className="collection_radio_buttons" htmlFor="listing_wheel_right">Right</label>   
                                                            
                                                        </span>
                                                        <span className="radio">
                                                            <input className="radio_buttons optional" type="radio" value="left" 
                                                            checked={this.state.vehicaldriver==="left"} onChange={this.onRadioDriveChange} 
                                                             name="listing[wheel]" id="listing_wheel_left" data-parsley-multiple="listingwheel"/>
                                                             <label className="collection_radio_buttons" htmlFor="listing_wheel_left">Left</label>   
                                                            
                                                        </span>
                                                        {/* Value= {this.state.vehicaldriver.toString()} */}
                                                    </div>
                                                {/* </div> */}
                                            </div>
                                        </div>


                                        <div>
                                            <div className="editable-checkbox-wrapp">
                                                <label htmlFor="listing_climatisation">Air Con</label>
                                                {/* <div className="ac-checkbox indent"> */}
                                                    <div className="input radio_buttons optional listing_climatisation">
                                                        <input type="hidden" name="listing[climatisation]" value/> 
                                                        <span className="radio">
                                                            <input className="radio_buttons optional" type="radio" value="true" 
                                                            checked={this.state.vehicalaircon==="true"} onChange={this.onRadioAirConChange} 
                                                             name="listing[climatisation]" id="listing_climatisation_true"
                                                             />
                                                             <label className="collection_radio_buttons" htmlFor="listing_climatisation_true">Yes</label>   
                                                            
                                                        </span>
                                                        <span className="radio">
                                                            <input className="radio_buttons optional" readOnly="readOnly" type="radio"
                                                             value="false" checked={this.state.vehicalaircon==="false"} onChange={this.onRadioAirConChange} 
                                                             name="listing[climatisation]" id="listing_climatisation_false" 
                                                             data-parsley-multiple="listingclimatisation"/>
                                                             <label className="collection_radio_buttons" htmlFor="listing_climatisation_false">No</label>   
                                                            
                                                        </span>
                                                        {/* Value= {this.state.vehicalaircon.toString()} */}
                                                    </div>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                     
                            <div className="form-unit form-unit-post-ad">
                                <div className="new-ad-container">
                                <label style={{fontSize:"15px"}}>Description</label>
                                    <div className="editable-field-wrapp fluid input-animate-wrapp input-description">
                                    
                                        <div className="input text required listing_description">
                                            {/* <label className="text required form-label" for="listing-description">
                                            Description
                                            </label> */}
                                            <textarea className="text required animate af-text-area" id="listing-description" 
                                            value={this.state.vehicaldescription} onChange={this.handleDescriptionChange} 
                                             placeholder="Example: Alloy rim, first owner, genuine parts, 
                                            maintained by authorized workshop, excellent mileage, original paint etc."
                                             name="listing[description]"/>
                                           
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
                                            {/* <h1>this is some text</h1> */}
                                        </div>
                                        {/* <div className="dz-message" style={{borderColor:"rgb(186, 194, 205)"}}>
                                            <img src={cloud_icon} alt="upload"/>
                                            <p>Drag here or 
                                                
                                                <FileUpload />
                                          
                                            
                                            <span>browse</span>
                                            to upload
                                            </p>
                                            
                                        </div> */}
                                        {/* <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>  */}
                                        <div className="dropzone-previews ui-sortable">
                                        {/* <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-unit clear">
                                <div className="new-ad-container pb-45">
                                    <button name="button "  onClick={this.handleClick3} className="af-btn red lg create-ad-step" 
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
                            <form className="simple_form tab-content new_ad dropzone dz-clickable" onSubmit={this.handleSubmit1} 
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
                                    <label className="string optional form-label phone-label" htmlFor="user_Phone number">
                                        Phone Number
                                    </label>
                                    <div className="input string optional user_login">
                                        <div className="intl-tel-input allow-dropdown">
                                            <div className="flag-container">
                                                <div className="selected-flag">
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
                                    <button name="button " type="submit" value="commit" onClick={this.handleSubmit1} className="af-btn red lg create-ad-step"
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
 
export default Post_an_ad_vehicles_click;

// const handleclick1 = () => {
//     $('input').on('focusin', function(){
//       $(this).parent().find('label').addClass('active');
//     });
//     $('input').on('focusout', function(){
//         $(!this.value).parent().find('label').removeClass('active');
//       });
//  }
 