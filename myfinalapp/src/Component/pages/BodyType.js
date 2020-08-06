import React from 'react';
import './BodyType.css';
import img1 from '../assets/saloon.svg';
import img2 from '../assets/hatchback.svg';
import img3 from '../assets/buses-vans.svg';
import img4 from '../assets/trucks.svg';
import img5 from '../assets/4-wheel-drives.svg';
import img6 from '../assets/convertibles-wagons.svg';

const BodyType=()=>{
    return(
        <section>
            <div className="container">
                <div className="type body-type">
                    <h3>Body Type</h3>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="cars-bot">
                            <div className="row" style={{marginTop:"35px"}}>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <a className="car-type" href="#some">
                                        <div className="car-type-img">
                                            <img src={img1} alt="..."/>
                                        </div>
                                        <span>Saloon</span>
                                    </a>
                                </div>

                                <div className="col-4 col-md-3 col-lg-2">
                                    <a className="car-type" href="#some">
                                        <div className="car-type-img">
                                            <img src={img2} alt="..."/>
                                        </div>
                                        <span>Hatchback & Station Wagons</span>
                                    </a>
                                </div>

                                <div className="col-4 col-md-3 col-lg-2">
                                    <a className="car-type" href="#some">
                                        <div className="car-type-img">
                                            <img src={img3} alt="..."/>
                                        </div>
                                        <span>Bus & Vans</span>
                                    </a>
                                </div>

                                <div className="col-4 col-md-3 col-lg-2">
                                    <a className="car-type" href="#some">
                                        <div className="car-type-img">
                                            <img src={img4} alt="..."/>
                                        </div>
                                        <span>Trucks</span>
                                    </a>
                                </div>

                                <div className="col-4 col-md-3 col-lg-2">
                                    <a className="car-type" href="#some">
                                        <div className="car-type-img">
                                            <img src={img5} alt="..."/>
                                        </div>
                                        <span>4 Wheel Drives</span>
                                    </a>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <a className="car-type" href="#some">
                                        <div className="car-type-img">
                                            <img src={img6} alt="..."/>
                                        </div>
                                        <span>Convertibles wagons</span>
                                    </a>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

    )
}
export default BodyType;