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
                        <a className={classes.HomeLink} href="#Home" >Home</a>
                        <a href="#Resume" >Resume</a>
                        <a href="#Project" >Projects</a>
                        <a href="#About" >About</a>
                        <a href="#Contact" >Contact</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default header;