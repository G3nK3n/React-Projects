import React from 'react';
import classes from '../Home/Home.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const homePage = () => (
    <div>
        <Container>
            <Row>
                <Col>
                    <div className={classes.HomeText}>
                        <h1>Kenneth Serrano</h1>
                        <h3>Web Developer - Amateur Photographer</h3>        
                    </div>
                </Col>
            </Row>
        </Container>
        
    </div>
);

export default homePage;