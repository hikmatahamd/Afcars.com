import React, { Component } from 'react';
import './Cards.css';
import {
  Card, CardImg, CardText, CardBody,
  Row,Col,CardLink
} from 'reactstrap';

class Cards extends Component{
     render(){
         return (
            <div>
          
<Row>
   
<Col md={3}>
            <Card>
                <CardImg className ="name " top width="100%" src={process.env.PUBLIC_URL + "/pic2.jpg"} alt="Card image cap" />
                    <CardBody>
                    <CardLink href="#" >Mercedes</CardLink><br />
                        {/* <CardTitle><span className="big" style={{textDecoration:"none"}}><a href="car">Mercedes</a></span></CardTitle> */}
                    <span style={{fontSize:"80%"}}>2561321</span>
                            <CardText>asfjlaksdfjalskjdfalkklkjfda fakjsfda;lkjsda; a;lskjdflaskjdf;lak</CardText>
                                
                     </CardBody>
              </Card>
              </Col>
              
              <Col md={3}>
            <Card>
                <CardImg className ="name " top width="100%" src={process.env.PUBLIC_URL + "/pic2.jpg"} alt="Card image cap" />
                    <CardBody>
                    <CardLink href="#" >Mercedes</CardLink><br />
                        {/* <CardTitle><span className="big" style={{textDecoration:"none"}}><a href="car">Mercedes</a></span></CardTitle> */}
                    <span style={{fontSize:"80%"}}>2561321</span>
                            <CardText>asfjlaksdfjalskjdfalkklkjfda fakjsfda;lkjsda; a;lskjdflaskjdf;lak</CardText>
                                
                     </CardBody>
              </Card>
              </Col>
              <Col md={3}>
            <Card>
                <CardImg className ="name " top width="100%" src={process.env.PUBLIC_URL + "/pic2.jpg"} alt="Card image cap" />
                    <CardBody>
                    <CardLink href="#" >Mercedes</CardLink><br />
                        {/* <CardTitle><span className="big" style={{textDecoration:"none"}}><a href="car">Mercedes</a></span></CardTitle> */}
                    <span style={{fontSize:"80%"}}>2561321</span>
                            <CardText>asfjlaksdfjalskjdfalkklkjfda fakjsfda;lkjsda; a;lskjdflaskjdf;lak</CardText>
                                
                     </CardBody>
              </Card>
              </Col>
              <Col md={3}>
            <Card>
                <CardImg className ="name " top width="100%" src={process.env.PUBLIC_URL + "/pic2.jpg"} alt="Card image cap" />
                    <CardBody>
                    <CardLink href="#" >Mercedes</CardLink><br />
                        {/* <CardTitle><span className="big" style={{textDecoration:"none"}}><a href="car">Mercedes</a></span></CardTitle> */}
                    <span style={{fontSize:"80%"}}>2561321</span>
                            <CardText>asfjlaksdfjalskjdfalkklkjfda fakjsfda;lkjsda; a;lskjdflaskjdf;lak</CardText>
                                
                     </CardBody>
              </Card>
              </Col>
              
              
         </Row>

    
    </div>
         );
     }
}

export default Cards;