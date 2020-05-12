import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

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
                        <div className="homeTitle">
                            <h1 className="AboutMe">Kenneth Serrano</h1>
                            <h5 className="JobTitle">Software/Web Developer - Student</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default homePage;