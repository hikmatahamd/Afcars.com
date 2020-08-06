
import React, {  useState, useEffect } from 'react';
import './Carousel.css';
import {Link } from 'react-router-dom';
// import makawa from '../assets/mypic1.jpg';
import './NewCard.css';

function NewCard(){
    const[newads,setNewAds]=useState([])

    useEffect(()=>{
    fetch('http://localhost:5000/new-ad-post/').then(res=>res.json()).then(data=>{
        setNewAds(data);
    })
    });

    return(

        <div className="container" >
            {newads.length===0?(
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ):(
                <div>
                {/* <Slider> */}
                {newads.map(current1=>(
                    // <div style={{display:"flex"}} >
                //  <div className="row sm-visibility listing-grid" id="listings-grid"> 
                    <div className="own-grid" style={{float:"left",padding:"10px"}}>
                    <Link className="sm-ad-card" to={`car-details/${current1._id}`} style={{colot:"black",textDecoration:"none"}}>
                        <div className="overlay-wrapper overlay-wrapp-ads">
                            <img alt="toyota car img" className="lazyautosizes ls-is-cached lazyloaded responsive" 
                            data-size="auto" sizes="210px" src={`https://source.unsplash.com/random/${current1.id}`}/>
                              {/* <div className="image-counter-wrapper">
                                  <div className="image-counter">
                                      <i className="fa fa-picture-o"></i><span>4</span>
                                  </div>
                              </div> */}
                              <div className="ad-description-car">
                                  <div className="ad-model" title="2020 toyota corolla">{current1.vehicalmenufyear} {current1.brandname} land curser
                                  </div>
                                  <div className="wrapper">
                                      <div className="price">
                                          <div className="descr">price</div>
                                          <div className="ad-price">
                                              <span className="price-wrap">AFN
                                                  <span className="price"> {current1.vehicalprice}</span> {/*HERE WANT IT */}
                                             
                                                </span>
                                          </div>
                                      </div>
                                      <div className="mileage">
                                          <div className="descr" >Mileage</div>
                                          <div className="ad-mileage">{current1.vehicalmileage}</div>
                                       
                                      </div>
                                  </div>
                                  <div className="ad-city">
                                      <i className="fa fa-map-marker"></i>{current1.ownercity}
                                  </div>
                                  </div> 
                        </div>
                    </Link>
                    </div>

                    
                    // </div>

                    
                ))}
                {/* </Slider> */}
                </div>
            )
            }
        </div>

    )
}

export default NewCard;