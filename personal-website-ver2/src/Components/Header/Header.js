import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../Header/Header.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const header = () => (
    <div>
        <Container>
            <Row>
                <Col>
                    <div className={classes.Logo}>
                        <h1>Ken Serrano</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={classes.Links}>
                        <a className={classes.HomeLink} href="#" >Home</a>
                        <a href="#" >Resume</a>
                        <a href="#" >Projects</a>
                        <a href="#" >About</a>
                        <a href="#" >Contact</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default header;