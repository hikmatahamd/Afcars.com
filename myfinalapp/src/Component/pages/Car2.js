import React, { Component } from 'react';
import $ from 'jquery';

class Car2 extends Component {
    
    render() { 
        return ( 
           <div className="Container">
               <div className="row" style={{padding: "100px 100px 25px",border:"solid red 2px"}}>
                   <div className="college col-sm-12 " style={{background:"background: rgba(0, 0, 0, 0.25)",borderRadius:"8px",border: "1px solid rgba(255, 255, 255, 0.35)",padding: "20px 30px"}}>
                       <div className="col-sm-12d-flex justify"  id="slt-1">
                            < div className="select">
                                <select id="select1" className="slt-1">
                                    <option style={{width:"250px"}}>Make</option>
                                    <option value="1">BMW</option>
                                    <option value="2">Toyota</option>
                                    <option value="3">Audi</option>
                                    <option value="4">Mazda</option>
                                    <option value="5">Honda</option>
                               

                                </select>
                            </div>
                       </div>
                       {/* //////////////////////// */}
                       
                       <div className="d-flex justify" id="slt-2">
                            < div className="select" >
                                <select id="select1" className="slt-2">
                                    <option style={{width:"250px"}}>Model</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                               

                                </select>
                            </div>
                       </div>
                       <div className="d-flex justify" id="slt-3">
                            < div   className="select" >
                                <select id="select1" className="slt-2">
                                    <option style={{width:"250px"}}>Location</option>
                                    <option value="1">Kabul</option>
                                    <option value="2">Nangharhar</option>
                                    <option value="3">kunar</option>
                                    <option value="4">khust</option>
                                    <option value="5">paktia</option>
                               

                                </select>
                            </div>
                       </div>
                       {/* ///////////////////////// */}
                       <br />
                       <div className="d-flex justify" id="slt-4">
                            < div className="select" >
                                <select id="select1" className="slt-2">
                                    <option style={{width:"250px"}}>Price</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                               

                                </select>
                            </div>
                       </div>
                       {/* 000000000000000 */}
                      
                       <div className="d-flex justify" id="slt-5">
                            < div  className="select" >
                                <select id="select1" className="slt-2">
                                    <option style={{width:"250px"}}>Body Type</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                               

                                </select>
                            </div>
                       </div>
                       {/* ////////////////////////// */}
                       <div className="d-flex justify" id="slt-6">
                            < div className="select" placeholder="keywords">
                                <select id="select1" className="slt-2">
                                    <option style={{width:"250px"}} >Keywords</option>
                                   
                               

                                </select>
                            </div>
                       </div>
                   </div>
               </div>
               <div className="row" >

                   <button className="btn btn-primary btn-lg" id="searchbutton" onClick={handleClick1}>
                       search for all cars
                   </button>

               </div>

           </div>
         );
    }
}
 
 const handleClick1 = () => {
    $('#searchbutton').on('click', function(){
    alert("Search button is clicked")
    });
 }
export default Car2;