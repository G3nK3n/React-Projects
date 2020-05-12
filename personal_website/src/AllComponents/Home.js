import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well
import Typist from 'react-typist'; //Typing effect API

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const homePage = props => {
    return(
        <div>
            <Container className="HomeDiv">
                <Row>
                    <Col>
                        <Typist>
                            <div className="homeTitle">
                                <h1 className="AboutMe">Kenneth Serrano</h1>
                                <h5 className="JobTitle">Software Developer Student - Amateur Photographer</h5>
                            </div>
                        </Typist>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default homePage;