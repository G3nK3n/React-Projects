import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const aboutComponent = (props) => {
    return(
        <div>  
            <Container className="AboutDiv">
                <Row>
                    <Col sm={12}>
                        <h1>About</h1>
                    </Col>
                    <Col sm={5}>
                        <p>Hi</p>
                        {/*MAKE LIST FOR ABOUT ME*/}
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default aboutComponent;