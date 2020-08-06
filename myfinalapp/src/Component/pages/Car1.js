import React, { Component } from 'react';
import './Car1.css';

 class Car1 extends Component{
     render (){
         return (
             <React.Fragment>
                 <div className="container  text-center mt-4 ">
                        <nav className="nav-tabs nav-justified justify-content-center">
                        <ul className="nav bg-dark nav nav-pills" role="tablist">
                        <li className="nav-item nav-link ">
                            <a href="#step-1" id="step1-tab" className="nav-link active" aria-controls="cars" aria-selected="true" data-toggle="pill" role="tab">Cars</a>
                        </li>
                        <li className="nav-item nav-link">
                            <a href="#step-2" id="step2-tab" className="nav-link"  aria-controls="bikes" aria-selected="false" data-toggle="pill" role="tab">Bikes</a>
                        </li>
                        <li className="nav-item nav-link">
                            <a href="#step-3" id="step3-tab" className="nav-link"  aria-controls="trucks" aria-selected="false" data-toggle="pill" role="tab">Trucks</a>
                            </li> 
                           {/* <div className="panel rounded "></div> */}
                        </ul>
                        </nav>
                    
                    
                    <div className="tab-content" id="pills-Content">
                        <div className="tab-pane fade show active " id="step-1" aria-labelledby="step1-tab" role="tabpanel">
                        <div className="innerContent">
                        <div className="innerclass1">
                         <h3>  this is simple text for car tab<br/>make table Remember</h3>
                        </div>
                        </div>
                        </div>
                        
                        <div className="tab-pane fade" id="step-2" aria-labelledby="step2-tab" role="tabpanel">
                            <div className="innerContent">
                                <div className="innerclass1">
                                <h4>second number text content</h4>
                            </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="step-3" aria-labelledby="step3-tab" role="tabpanel">
                            <div className="innerContent">
                                <div className="innerclass1">
                            <h4>this some other text for content 3</h4>   
                            </div> 
                            </div>
                                </div>
                    </div>
            
                  
                   
            </div>
            
             </React.Fragment>
            
         )
     }
 }
 export default Car1;