import React, { useState, useEffect } from 'react';
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


function Carousel(){
    const[suggestions,setSuggestions]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/sign-in/').then(res=>res.json()).then(data=>{
            setSuggestions(data);
        })
    });

        let setting ={
            infinite:false,
            speed:1000,
            arrows:true,
            slidesToShow:5,
            slidesToScroll:4,
        }
        return(
            <div className="container carousal-card">
                <h6 className="text-muted"> Friend suggestion</h6>
                {suggestions.length===0?(
                    <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                ):(
                    <Slider {...setting}>
                        {suggestions.map(current=>(
                            <div className="out" key={current.id}>
                                <img className="rounded" alt={"users here"} src={
                                    `https://source.unsplash.com/random/${current.id}`}
                                    height={56} width={30} />
                                    <div className="card-body">
                                        <h5 className="card-title">{current.phoneNumber}</h5>
                                        <small className="card-test text-sm-center text-muted">
                                            {current.password}
                                        </small>
                                        <br/>

                                    </div>
                                
                            </div>
                        ))}

                    </Slider>

                
                    )}
            </div>
        )
}
export default Carousel;