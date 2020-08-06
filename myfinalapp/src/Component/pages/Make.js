import React from 'react';

import './Make.css';
import download11 from '../assets/Tyota.png';
import download12 from '../assets/Lexus.png';
import download13 from '../assets/mercedes.png';
import download14 from '../assets/mazda.png';

import download15 from '../assets/Honda.png';
import download16 from '../assets/KIA.png';
import download17 from '../assets/Mitsubishi.png';
import download18 from '../assets/porche.png';
import download19 from '../assets/BMW.png';

const Make =()=>{
    return(
        <div className="container">
            <div className="row" id="row-id1"> 
            <h3>Top Brand</h3>
            </div>
            <div className="row">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="cars-top">
                            <div className="top-make-card">
                                <a className="top-make-card" href="buy-car">
                                    <div className="image-wrapper">
                                        <img className="lazyautosizes lazyloaded" alt="i55" data-size="auto" src={download11} sizes="100px"/>

                                    </div>
                                 <span style={{position:"relative", marginLeft:"35px",color:"black"}}>Toyota</span>
                                </a>
                            </div>
                         </div>
                    </div>

                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="cars-top">
                            <div className="top-make-card">
                                <a className="top-make-card" href="buy-car">
                                    <div className="image-wrapper">
                                        <img className="lazyautosizes lazyloaded" alt="i55" data-size="auto" src={download12} sizes="100px"/>

                                    </div>
                                 <span style={{position:"relative", marginLeft:"35px",color:"black"}}>Luxes</span>
                                </a>
                              </div>
                      </div>
                     </div>

                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="cars-top">
                            <div className="top-make-card">
                                <a className="top-make-card" href="buy-car">
                                    <div className="image-wrapper">
                                        <img className="lazyautosizes lazyloaded" alt="i55" data-size="auto" src={download13} sizes="100px"/>

                                    </div>
                                 <span style={{position:"relative", marginLeft:"35px",color:"black"}}>Mercedes</span>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="cars-top">
                            <div className="top-make-card">
                                <a className="top-make-card" href="buy-car">
                                    <div className="image-wrapper">
                                        <img className="lazyautosizes lazyloaded" alt="i55" data-size="auto" src={download14} sizes="100px"/>

                                    </div>
                                 <span style={{position:"relative", marginLeft:"35px",color:"black"}}>Hyundai</span>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="cars-top">
                            <div className="top-make-card">
                                <a className="top-make-card" href="buy-car">
                                    <div className="image-wrapper">
                                        <img className="lazyautosizes lazyloaded" alt="i55" data-size="auto" src={download15} sizes="100px"/>

                                    </div>
                                 <span style={{position:"relative", marginLeft:"35px" ,color:"black"}}>Honda</span>
                                </a>
                             </div>
                         </div>
                    </div>
        
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="cars-top">
                            <div className="top-make-card">
                                <a className="top-make-card" href="buy-car">
                                    <div className="image-wrapper">
                                        <img className="lazyautosizes lazyloaded" alt="i55" data-size="auto" src={download16} sizes="100px"/>

                                    </div>
                                 <span style={{position:"relative", marginLeft:"35px",color:"black"}}>KIA</span>
                                </a>
                            </div>
                        </div>
                    </div>
        
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="cars-top">
                            <div className="top-make-card">
                                <a className="top-make-card" href="buy-car">
                                    <div className="image-wrapper">
                                        <img className="lazyautosizes lazyloaded" alt="i55" data-size="auto" src={download17} sizes="100px"/>

                                    </div>
                                 <span style={{position:"relative", marginLeft:"35px",color:"black"}}>Mitsubishi</span>
                                </a>
                           </div>
                        </div>
                    </div>
        
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="cars-top">
                            <div className="top-make-card">
                                <a className="top-make-card" href="buy-car">
                                    <div className="image-wrapper">
                                        <img className="lazyautosizes lazyloaded" alt="i55" data-size="auto" src={download18} sizes="100px"/>

                                    </div>
                                 <span style={{position:"relative", marginLeft:"35px",color:"black"}}>Porsche</span>
                                </a>
                           </div>
                        </div>
                    </div>
        
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="cars-top">
                            <div className="top-make-card">
                                <a className="top-make-card" href="buy-car">
                                    <div className="image-wrapper">
                                        <img className="lazyautosizes lazyloaded" alt="i55" data-size="auto" src={download19} sizes="100px"/>

                                    </div>
                                 <span style={{position:"relative", marginLeft:"35px",color:"black"}}>BMW</span>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        

    </div>
    
    )
}
export default Make;