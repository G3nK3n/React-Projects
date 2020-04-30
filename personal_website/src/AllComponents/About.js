import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import ListGroup from 'react-bootstrap/ListGroup'



const aboutComponent = (props) => {
    return(
        <div>  
            <Container className="AboutDiv">
                <Row>
                    <Col sm={12}>
                        <h1>About Me</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <ul className="AboutMeDesc">
                            <li> Kenneth Serrano </li>
                            <li> Computer Science Student (Concordia University)</li>
                            <li> 28 </li>
                            <li> Amateur Photographer </li>
                            <li> <a href="https://github.com/G3nK3n">Github (All my portfolio projects)</a> </li>
                            <li> <a href="https://www.linkedin.com/in/kenserrano/">LinkedIn</a> </li>
                            <li> Email: ken_serrano@Hotmail.com </li>
                            <li> UNDER CONSTRUCTION!! </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default aboutComponent;