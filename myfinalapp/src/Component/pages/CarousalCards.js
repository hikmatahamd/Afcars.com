import React, { Component } from 'react';
// import Cards from './Cards';
import './CarousalCards.css';
import makawa from '../assets/whitecar1.jpg';
// import download2 from '../assets/mypic9.jpg';
// import download3 from '../assets/mypic4.jpg';
// import download4 from '../assets/mypic8.jpg';
import axios from 'axios';
// import './CarousalCards.css';
const Postingads= (props) => (
	

	<span className="price">  {props.newad.vehicalprice}</span>
	// <div className="ad-mileage">{props.mileage.vehicalmileage}</div>
  
  
)

class CarousalCards extends Component {
	constructor(props){
        super(props)
        
        this.state={
            newadpost:[]
        }
    }
    
	fetchPosts=()=>{
		axios.get('http://localhost:5000/new-ad-post/')
        .then(response=>{
            this.setState({newadpost:response.data})
        })
        .catch((error)=>{
            console.log(error);
            
        })
	}
	componentDidMount(){
        this.fetchPosts();
        
	}

	newAdsListing(){
        return this.state.newadpost.map(currentnewads=>{
            return <Postingads newad={currentnewads} mileage={currentnewads}/>
        })
	}

render(){
        return ( 		
			<div> 
			{/* <div className="most-recent most-recent-padding">
                     <div className="container">
                         <h2>Most recent cars for sale in 
                             <span> Afghanistan</span>
                         </h2> */}
			<div className="row sm-visibility listing-grid" id="listings-grid">

			<div className="own-grid" data-promoted="false">
				<a className="sm-ad-card" href="#home">
					<div className="overlay-wrapper overlay-wrapp-ads">
						<img alt="toyota car img" className="lazyautosizes ls-is-cached lazyloaded responsive" 
						data-size="auto" sizes="210px" src={makawa}/>
						  <div className="image-counter-wrapper">
							  <div className="image-counter">
								  <i className="fa fa-picture-o"></i><span>4</span>
							  </div>
						  </div>
						  <div className="ad-description-car">
							  <div className="ad-model" title="2020 toyota corolla">2018 Toyota land curser
							  </div>
							  <div className="wrapper">
								  <div className="price">
									  <div className="descr">price</div>
									  <div className="ad-price">
										  <span className="price-wrap">AFN
										   <span className="price"> 1,000,000</span> {/*HERE WANT IT */}
										  {/* <table className="table">
                   							 <thead>
                    						    <tr>
                     						       <th>price</th>
                     						       <th>price</th>
                       							     <th>price</th>
                       								 </tr>
                    								</thead>
                  							  <tbody>
                    					    </tbody>    */}
                     					   {/* {this.newAdsListing()}                                          */}
									{/* </table> */}
											</span>
									  </div>
								  </div>
								  <div className="mileage">
									  <div className="descr" >Mileage</div>
									  <div className="ad-mileage">2000</div>
									  {/* {this.newAdsListing} */}
								  </div>
							  </div>
							  <div className="ad-city">
								  <i className="fa fa-map-marker"></i>import Dubai
							  </div>
							  </div> 
					</div>
				</a>
				</div>
				
				{/* <div className="own-grid" data-promoted="false">
				<a className="sm-ad-card" href="#home">
					<div className="overlay-wrapper overlay-wrapp-ads">
						<img alt="toyota car img" className="lazyautosizes ls-is-cached lazyloaded" data-size="auto" src={download2} size="210px"/>
						  <div className="image-counter-wrapper">
							  <div className="image-counter">
								  <i className="fa fa-picture-o"></i><span>4</span>
							  </div>
						  </div>
						  <div className="ad-description-car">
							  <div className="ad-model" title="2020 toyota corolla">2020 toyota corolla
							  </div>
							  <div className="wrapper">
								  <div className="price">
									  <div className="descr">price</div>
									  <div className="ad-price">
										  <span className="price-wrap">AFN
										  <span className="price"> 17,0000</span>
										  </span>
									  </div>
								  </div>
								  <div className="mileage">
									  <div className="descr" >Mileage</div>
									  <div className="ad-mileage">N/A</div>
								  </div>
							  </div>
							  <div className="ad-city">
								  <i className="fa fa-map-marker"></i>import Dubai
							  </div>
							  </div> 
					</div>
				</a>
			</div>
			<div className="own-grid" data-promoted="false">
				<a className="sm-ad-card" href="#home">
					<div className="overlay-wrapper overlay-wrapp-ads">
						<img alt="toyota car img" className="lazyautosizes ls-is-cached lazyloaded" data-size="auto" src={download3} size="210px"/>
						  <div className="image-counter-wrapper">
							  <div className="image-counter">
								  <i className="fa fa-picture-o"></i><span>4</span>
							  </div>
						  </div>
						  <div className="ad-description-car">
							  <div className="ad-model" title="2020 toyota corolla">2020 toyota corolla
							  </div>
							  <div className="wrapper">
								  <div className="price">
									  <div className="descr">price</div>
									  <div className="ad-price">
										  <span className="price-wrap">AFN
										  <span className="price"> 17,0000</span>
										  </span>
									  </div>
								  </div>
								  <div className="mileage">
									  <div className="descr" >Mileage</div>
									  <div className="ad-mileage">N/A</div>
								  </div>
							  </div>
							  <div className="ad-city">
								  <i className="fa fa-map-marker"></i>import Dubai
							  </div>
							  </div> 
					</div>
				</a>
			</div>
			<div className="own-grid" data-promoted="false">
				<a className="sm-ad-card" href="#home">
					<div className="overlay-wrapper overlay-wrapp-ads">
						<img alt="toyota car img" className="lazyautosizes ls-is-cached lazyloaded" data-size="auto" src={download4} size="210px"/>
						  <div className="image-counter-wrapper">
							  <div className="image-counter">
								  <i className="fa fa-picture-o"></i><span>4</span>
							  </div>
						  </div>
						  <div className="ad-description-car">
							  <div className="ad-model" title="2020 toyota corolla">2020 toyota corolla
							  </div>
							  <div className="wrapper">
								  <div className="price">
									  <div className="descr">price</div>
									  <div className="ad-price">
										  <span className="price-wrap">AFN
										  <span className="price"> 17,0000</span>
										  </span>
									  </div>
								  </div>
								  <div className="mileage">
									  <div className="descr" >Mileage</div>
									  <div className="ad-mileage">N/A</div>
								  </div>
							  </div>
							  <div className="ad-city">
								  <i className="fa fa-map-marker"></i>import Dubai
							  </div>
							  </div> 
					</div>
				</a>
			</div><div className="own-grid" data-promoted="false">
				<a className="sm-ad-card" href="#home">
					<div className="overlay-wrapper overlay-wrapp-ads">
						<img alt="toyota car img" className="lazyautosizes ls-is-cached lazyloaded" data-size="auto" src={makawa} size="210px"/>
						  <div className="image-counter-wrapper">
							  <div className="image-counter">
								  <i className="fa fa-picture-o"></i><span>4</span>
							  </div>
						  </div>
						  <div className="ad-description-car">
							  <div className="ad-model" title="2020 toyota corolla">2020 toyota corolla
							  </div>
							  <div className="wrapper">
								  <div className="price">
									  <div className="descr">price</div>
									  <div className="ad-price">
										  <span className="price-wrap">AFN
										  <span className="price"> 17,0000</span>
										  </span>
									  </div>
								  </div>
								  <div className="mileage">
									  <div className="descr" >Mileage</div>
									  <div className="ad-mileage">N/A</div>
								  </div>
							  </div>
							  <div className="ad-city">
								  <i className="fa fa-map-marker"></i>import Dubai
							  </div>
							  </div> 
					</div>
				</a>
			</div>

			<div className="own-grid" data-promoted="false">
				<a className="sm-ad-card" href="#home">
					<div className="overlay-wrapper overlay-wrapp-ads">
						<img alt="toyota car img" className="lazyautosizes ls-is-cached lazyloaded" data-size="auto" src={makawa} size="210px"/>
						  <div className="image-counter-wrapper">
							  <div className="image-counter">
								  <i className="fa fa-picture-o"></i><span>4</span>
							  </div>
						  </div>
						  <div className="ad-description-car">
							  <div className="ad-model" title="2020 toyota corolla">2020 toyota corolla
							  </div>
							  <div className="wrapper">
								  <div className="price">
									  <div className="descr">price</div>
									  <div className="ad-price">
										  <span className="price-wrap">AFN
										  <span className="price"> 17,0000</span>
										  </span>
									  </div>
								  </div>
								  <div className="mileage">
									  <div className="descr" >Mileage</div>
									  <div className="ad-mileage">N/A</div>
								  </div>
							  </div>
							  <div className="ad-city">
								  <i className="fa fa-map-marker"></i>import Dubai
							  </div>
							  </div> 
					</div>
				</a>
			</div>
			<div className="own-grid" data-promoted="false">
				<a className="sm-ad-card" href="#home">
					<div className="overlay-wrapper overlay-wrapp-ads">
						<img alt="toyota car img" className="lazyautosizes ls-is-cached lazyloaded" data-size="auto" src={makawa} size="210px"/>
						  <div className="image-counter-wrapper">
							  <div className="image-counter">
								  <i className="fa fa-picture-o"></i><span>4</span>
							  </div>
						  </div>
						  <div className="ad-description-car">
							  <div className="ad-model" title="2020 toyota corolla">2020 toyota corolla
							  </div>
							  <div className="wrapper">
								  <div className="price">
									  <div className="descr">price</div>
									  <div className="ad-price">
										  <span className="price-wrap">AFN
										  <span className="price"> 17,0000</span>
										  </span>
									  </div>
								  </div>
								  <div className="mileage">
									  <div className="descr" >Mileage</div>
									  <div className="ad-mileage">N/A</div>
								  </div>
							  </div>
							  <div className="ad-city">
								  <i className="fa fa-map-marker"></i>import Dubai
							  </div>
							  </div> 
					</div>
				</a>
			</div>
			<div className="own-grid" data-promoted="false">
				<a className="sm-ad-card" href="#home">
					<div className="overlay-wrapper overlay-wrapp-ads">
						<img alt="toyota car img" className="lazyautosizes ls-is-cached lazyloaded" data-size="auto" src={makawa} size="210px"/>
						  <div className="image-counter-wrapper">
							  <div className="image-counter">
								  <i className="fa fa-picture-o"></i><span>4</span>
							  </div>
						  </div>
						  <div className="ad-description-car">
							  <div className="ad-model" title="2020 toyota corolla">2020 toyota corolla
							  </div>
							  <div className="wrapper">
								  <div className="price">
									  <div className="descr">price</div>
									  <div className="ad-price">
										  <span className="price-wrap">AFN
										  <span className="price"> 17,0000</span>
										  </span>
									  </div>
								  </div>
								  <div className="mileage">
									  <div className="descr" >Mileage</div>
									  <div className="ad-mileage">N/A</div>
								  </div>
							  </div>
							  <div className="ad-city">
								  <i className="fa fa-map-marker"></i>import Dubai
							  </div>
							  </div> 
					</div>
				</a>
			</div>
			<div className="own-grid" data-promoted="false">
				<a className="sm-ad-card" href="#home">
					<div className="overlay-wrapper overlay-wrapp-ads">
						<img alt="toyota car img" className="lazyautosizes ls-is-cached lazyloaded" data-size="auto" src={makawa} size="210px"/>
						  <div className="image-counter-wrapper">
							  <div className="image-counter">
								  <i className="fa fa-picture-o"></i><span>4</span>
							  </div>
						  </div>
						  <div className="ad-description-car">
							  <div className="ad-model" title="2020 toyota corolla">2020 toyota corolla
							  </div>
							  <div className="wrapper">
								  <div className="price">
									  <div className="descr">price</div>
									  <div className="ad-price">
										  <span className="price-wrap">AFN
										  <span className="price"> 17,0000</span>
										  </span>
									  </div>
								  </div>
								  <div className="mileage">
									  <div className="descr" >Mileage</div>
									  <div className="ad-mileage">N/A</div>
								  </div>
							  </div>
							  <div className="ad-city">
								  <i className="fa fa-map-marker"></i>import Dubai
							  </div>
							  </div> 
					</div>
				</a>
			</div>
			<div className="own-grid" data-promoted="false">
				<a className="sm-ad-card" href="#home">
					<div className="overlay-wrapper overlay-wrapp-ads">
						<img alt="toyota car img" className="lazyautosizes ls-is-cached lazyloaded" data-size="auto" src={makawa} size="210px"/>
						  <div className="image-counter-wrapper">
							  <div className="image-counter">
								  <i className="fa fa-picture-o"></i><span>4</span>
							  </div>
						  </div>
						  <div className="ad-description-car">
							  <div className="ad-model" title="2020 toyota corolla">2020 toyota corolla
							  </div>
							  <div className="wrapper">
								  <div className="price">
									  <div className="descr">price</div>
									  <div className="ad-price">
										  <span className="price-wrap">AFN
										  <span className="price"> 17,0000</span>
										  </span>
									  </div>
								  </div>
								  <div className="mileage">
									  <div className="descr" >Mileage</div>
									  <div className="ad-mileage">N/A</div>
								  </div>
							  </div>
							  <div className="ad-city">
								  <i className="fa fa-map-marker"></i>import Dubai
							  </div>
							  </div> 
					</div>
				</a>
			</div> */}
			
			
				</div>
				{/* </div>
                     </div>  */}
				
			



			
			 
			

			
			
			
			
			
{/* 		
            // <div className="container-fluid">
            //     <div id="myCarousel" className="carousel slide" data-ride="carousel">
            //       <div className="carousel-inner row w-100 mx-auto">
            //           <div className="carousel-item col-md-3 active">
            //               <div className="card">
            //                   <img className="card-img-top img-fluid" src={process.env.PUBLIC_URL + "/pic2.jpg"} alt="cardimage" />
            //                   <div className="card-body">
            //                       <h4 className="card-title">titele</h4>
            //                       <p className="card-txt">asdjflakjsdflkajsdflaksjdfkjhasdklfjhaklsdjfhaklsdfhaklsjdf</p>
                             
            //                   </div>

                              
            //               </div>
            //           </div>

            //           <div className="carousel-item col-md-3 ">
            //               <div className="card">
            //                   <img className="card-img-top img-fluid" src={process.env.PUBLIC_URL + "/pic.jpg"} alt="cardimage" />
            //                   <div className="card-body">
            //                       <h4 className="card-title">titele</h4>
            //                       <p className="card-txt">asdjflakjsdflkajsdflaksjdfkjhasdklfjhaklsdjfhaklsdfhaklsjdf</p>
                             
            //                   </div>

                              
            //               </div>
            //           </div>

            //           <div className="carousel-item col-md-3 ">
            //               <div className="card">
            //                   <img className="card-img-top img-fluid" src={process.env.PUBLIC_URL + "/pic1.jpg"} alt="cardimage" />
            //                   <div className="card-body">
            //                       <h4 className="card-title">titele</h4>
            //                       <p className="card-txt">asdjflakjsdflkajsdflaksjdfkjhasdklfjhaklsdjfhaklsdfhaklsjdf</p>
                             
            //                   </div>

                              
            //               </div>
            //           </div>
			// 		  <div className="carousel-item col-md-3 ">
            //               <div className="card">
            //                   <img className="card-img-top img-fluid" src={process.env.PUBLIC_URL + "/pic1.jpg"} alt="cardimage" />
            //                   <div className="card-body">
            //                       <h4 className="card-title">titele</h4>
            //                       <p className="card-txt">asdjflakjsdflkajsdflaksjdfkjhasdklfjhaklsdjfhaklsdfhaklsjdf</p>
                             
            //                   </div>

                              
            //               </div>
            //           </div>
			// 		  <div className="carousel-item col-md-3 ">
            //               <div className="card">
            //                   <img className="card-img-top img-fluid" src={process.env.PUBLIC_URL + "/pic1.jpg"} alt="cardimage" />
            //                   <div className="card-body">
            //                       <h4 className="card-title">titele</h4>
            //                       <p className="card-txt">asdjflakjsdflkajsdflaksjdfkjhasdklfjhaklsdjfhaklsdfhaklsjdf</p>
                             
            //                   </div>

                              
            //               </div>
            //           </div>
			// 		  <div className="carousel-item col-md-4 ">
            //               <div className="card">
            //                   <img className="card-img-top img-fluid" src={process.env.PUBLIC_URL + "/pic1.jpg"} alt="cardimage" />
            //                   <div className="card-body">
            //                       <h4 className="card-title">titele</h4>
            //                       <p className="card-txt">asdjflakjsdflkajsdflaksjdfkjhasdklfjhaklsdjfhaklsdfhaklsjdf</p>
                             
            //                   </div>

                              
            //               </div>
            //           </div>
            
            //           <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            //           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            //             <span className="sr-only">previous</span>
            //           </a>

            //           <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            //           <span className="carousel-control-next-icon" aria-hidden="true"></span>
            //             <span className="sr-only">next</span>
            //           </a>

                      
            //           </div>  
            //     </div>
            // </div>
		// 	<div className="container-fluid">
		// 	<div className="row">
		// 		<div className="col-sm-12">
		// 			<div id="inam" className="carousel slide" data-ride="carousel">
		// 				<div className="carousel-inner  row w-100 mx-auto">
		// 					<div className="carousel-item active">
		// 						 <div className="container">
		// 							 <div className="row">
		// 								 <div className="col-sm-12 col-lg-3">
		// 									 <div className="card" style={{width:"300px", margin: "auto"}}>
		// 									 <img className="card-img-top img-fluid" src={process.env.PUBLIC_URL + "/pic.jpg"} alt="cardimage" />
		// 										 <div className="card-body">
		// 											 <h6 className="card-title">toyota carolla </h6>
													
													 
		// 										 </div>
												 
		// 									 </div>
											 
		// 								 </div>
										 
		// 								 <div className="col-sm-12 col-lg-3">
		// 									 <div className="card" style={{width: "300px"}}>
		// 									 <img className="card-img-top img-fluid" src={process.env.PUBLIC_URL + "/pic1.jpg"} alt="cardimage" />
		// 										 <div className="card-body">
													 
													 
		// 										 </div>
												 
		// 									 </div>
											 
		// 								 </div>
		// 								 <div className="col-sm-12 col-lg-3">
		// 									 <div className="card" style={{width: "300px"}}>
		// 									 <img className="card-img-top img-fluid" src={process.env.PUBLIC_URL + "/pic1.jpg"} alt="cardimage" />
		// 										 <div className="card-body">
		// 											 <h4 className="card-title">Why you should use skin masks ?</h4>
													 
													 
													 
		// 										 </div>
												 
		// 									 </div>
											 
		// 								 </div>
		// 								 <div className="col-sm-12 col-lg-3">
		// 									 <div className="card" style={{width: "300px"}}>
		// 									 <img className="card-img-top img-fluid" src={process.env.PUBLIC_URL + "/pic1.jpg"} alt="cardimage" />
		// 										 <div className="card-body">
		// 											 <h6 className="card-title">Toyota carolla</h6>
													
													 
		// 										 </div>
												 
		// 									 </div>
											 
		// 								 </div>
		// 							 </div>
									 
		// 						 </div>
		
								
		// 					</div>
		// 					<div className="carousel-item">
		// 						 <div className="container">
		// 							 <div className="row">
		// 								 <div className="col-sm-12 col-lg-3">
		// 									 <div className="card"  style={{width:"300px", margin: "auto"}}>
		// 									 <img className="card-img-top img-fluid" src={process.env.PUBLIC_URL + "/pic1.jpg"} alt="cardimage" />
		// 										 <div className="card-body">
		// 											 <h4 className="card-title">Why you should use skin masks ?</h4>
													 
		// 										 </div>
												 
		// 									 </div>
											 
		// 								 </div>
		// 								 <div className="col-sm-12 col-lg-3">
		// 									 <div className="card" style={{width: "300px"}}>
		// 									 <img className="card-img-top img-fluid" src={process.env.PUBLIC_URL + "/pic1.jpg"} alt="cardimage" />
		// 										 <div className="card-body">
		// 											 <h4 className="card-title">Why you should use skin masks ?</h4>
													
													 
		// 										 </div>
												 
		// 									 </div>
											 
		// 								 </div>
		// 								 <div className="col-sm-12 col-lg-2">
		// 									 <div className="card" style={{width: "300px"}}>
		// 									 <img className="card-img-top img-fluid" src={process.env.PUBLIC_URL + "/pic5.jpg"} alt="cardimage" />
		// 										 <div className="card-body">
		// 											 <h4 className="card-title">Why you should use skin masks ?</h4>
													 
													 
		// 										 </div>
												 
		// 									 </div>
											 
		// 								 </div>
										 
		// 							 </div>
									 
		// 						 </div>
		
								
		// 					</div>
							
		// 				</div>
		// 				<a href="#inam" className="carousel-control-prev" data-slide="prev">
		// 					<span className="carousel-control-prev-icon"></span>
		// 					<span className="sr-only">previous</span>
		// 				</a>
		// 				<a href="#inam" className="carousel-control-next" data-slide="next">
		// 					<span className="carousel-control-next-icon"></span>
		// 					<span className="sr-only">next</span>
		// 				</a>
						
		// 			</div>
					
		// 		</div>
				
		// 	</div>
			
		// </div> */}

		</div>
         );
}

}
 
export default CarousalCards;