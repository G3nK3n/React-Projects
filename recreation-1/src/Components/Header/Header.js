import React from 'react';
import classes from '../Header/Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Must include this to make Bootstrap work? Not sure....
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Links from '../Header/HeaderList/HeaderList';



const header = props => (
    <div className={classes.Header}>
        <Container>
            <Navbar>
                <Col md={3}>
                    <Navbar.Brand className={classes.Navbar} href="#home">KENNETH SERRANO</Navbar.Brand>
                </Col>
                <Col md={9}>
                    <Links clickHome={props.clickHomePage} clickAbout={props.clickAboutPage}/>
                </Col>
            </Navbar>
        </Container>
    </div>
);

export default header;