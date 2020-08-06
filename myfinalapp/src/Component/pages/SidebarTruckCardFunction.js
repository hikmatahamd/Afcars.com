import React, { useEffect,useState } from 'react';
import download1 from '../assets/icon1.svg';
// import download2 from '../assets/whitecar1.jpg';
import download3 from '../assets/auto.svg';
import {Link } from 'react-router-dom';
// import download4 from '../assets/mileage.png';


function SidebarTruckCardFunction(){
    const[sidebartruckcard,setSideBarTruckCard]=useState([])

    useEffect(()=>{
    fetch('http://localhost:5000/post-new-truck/').then(res=>res.json()).then(data=>{
        setSideBarTruckCard(data);
    })
    });
    return(
        <div className="container" >
            {sidebartruckcard.length===0?(
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ):(
                <div>
                     {sidebartruckcard.map(current=>(
                 <div class="card mb-3" style={{maxWidth:"1000px",height:"180px"}}>
         <div class="row no-gutters">
          <div class="col-md-4">
            <a href="#home"><img src={`https://source.unsplash.com/random/${current._id}`} class="card-img" alt="..." style={{maxWidth:"300px",height:"180px"}}/></a>
           </div>
             <div class="col-md-8">
               <div class="card-body" style={{marginLeft:"auto"}}>
                 <div className="car-info d-flex justify-content-between">
                        <div className="car-text text-uppercase">
                     <Link to="/show-car-details"><h4 className="font-weight-bold">{current.truckmenufyear} {current.brandname}</h4></Link>
                        {/* <a href="#home"><h4 className="font-weight-bold">Toyota corolla</h4></a> */}
                           
                            {/* <Link className="navbar-brand ml-5" to="/bikes">Bikes</Link> */}
                            <div className="location">
                              <i className="fa fa-map-marker"></i><span>Kabul Afghansitan</span>
                              </div>
                            </div>
                            <h5 className="car-value align-self-center py-2 px-3" style={{color:"#de1f26"}}><b>AFN</b> 
                     <span className="car-price" ><b>  {current.truckprice}</b></span>
                                </h5> 
                                <br/>
                                
                             
                    </div>
                    <div className="new-div" style={{borderTop:"solid lightgray 1px ", width:"100%",height:"100%"}}>
                    
                    </div>
          
       
      </div>
      <div className="card-footer text-capitalize d-flex justify-content-between " style={{marginLeft:"auto",marginTop:"20px"}}>
                     <span><img src={download1} alt="imagetext" style={{marginTop:"5px"}}/>{current.enginetype} L <span className="text-muted">
                       ({current.truckfuletype})</span></span> 
                     <p><span><i className="fa fa-truck" style={{marginLeft:"12px"}}></i></span> <br/>{current.truckbodytype}</p>
                     <span  ><i className="fa fa-tachometer" style={{marginLeft:"12px"}}></i><br/>{current.truckmileage}</span>
                     <span><img src={download3} alt="imagetext"style={{marginTop:"5px"}}/>{current.trucktransmission}</span> 
                    {/* <p><span><i className="fa fa-cogs"></i></span>Automatic</p> */}
                   
                </div>
    </div>
  </div>
</div>  
                     ))}
     
                 </div>
            )};
            </div>
    )
}
export default SidebarTruckCardFunction;