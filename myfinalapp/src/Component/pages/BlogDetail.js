import React, { Component } from 'react';
import "./BlogDetail.css";
import {Link } from 'react-router-dom';
import AfgLargeCarIndustry from '../assets/Afg-large-car-industry.jpg';

class BlogDetail extends Component {
    handleBack=()=>{
        this.props.history.goBack();
    }
    state = {  }

    render() { 
        return ( 
            <div className="container">
                <div className="nav-wrapper">
                    <button className="return-search" type="submit" id="back-button" name="button" onClick={this.handleBack}>
                        <i className="fa fa-search"></i>Return Back
                    </button>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="post-article">
                            <div className="post-header">
                                <h1>
                                Automotive production in Afghanistan is expected to reach
                                 2.2 million units.
                                </h1>
                            </div>
                            <div className="post-info">
                                <div className="news-label green">
                                    <span>
                                        <Link to="/blogs">Afghanistan Automotive Industry</Link>
                                    </span>
                                </div>
                            </div>
                            <div className="post-image" id="sticky-image">
                                <img src={AfgLargeCarIndustry} alt="Afg car industry"/>
                            </div>
                            <div className="post-content">
                                <p>Because many consumers have higher purchasing power Therefore, 
                                    it is expected that this year the production of motor vehicles in Thailand will be
                                    as high as 2.2 million vehicles, divided into domestic cars for sale and exports by 1.1 
                                    million vehicles, which can be seen that the automotive 
                                    industry has grown a lot. And expected to have high sales this year as well
                                </p>
                                <p><strong>Permanent Secretary, Ministry of Industry Mention the car trading ....
                                   </strong></p>
                                <p>Mr. Pasu Lohan Chun, Permanent Secretary, Ministry of Industry Has said that the automotive
                                     industry is considered an important economy to generate income for the country Since it is
                                      a product with high demand and demand for cars from both Thai and foreign consumers.
                                       Therefore, the government attaches great importance to the automotive industry.
                                     Which has planned to prepare for the future industry growth and attract more investment
                                </p>
                                <p><strong>lean! The automotive industry is not affected.</strong></p>
                                <p>Phatthadej Arsa Sappakit, car expert and president of Fast Auto Show Thailand 2019,
                                     confirmed that the automobile industry will definitely not be affected by the 
                                     international trade war. Although the overall economy of the country will be
                                      affected somewhat Which the automotive industry will
                                     continue to produce sales and production as before Both first and second
                                      hand cars and regardless of the brand</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3" style={{position:"relative"}}>
                        <div className="banner">
                        <div className="sticky-networks">
                            <div className="info-wrapper">
                                <span>Share on</span>
                            </div>
                            <div className="networks-wrapper">
                                <a className="circle facebook" target="_blank" rel="nooperner nofollow" href="www.facebook.com">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

         );
    }
}
 
export default BlogDetail;