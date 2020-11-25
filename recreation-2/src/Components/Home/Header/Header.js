import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../Header/Header.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../../../logo.png';


const header = (props) => (
    <div className={classes.DivHeader}>
        <Container className={classes.Header}>
            <Row>
                <Col lg={4}>
                    <Navbar>
                        <a href="#" ><img src={logo} /></a>   
                    </Navbar>
                </Col>
                <Col className="d-none d-lg-block d-xl-block" lg={8}>
                    <div>
                        <Nav className={classes.Links}>
                            <Nav.Link onClick={props.clickHomePage}>Home</Nav.Link>
                            <Nav.Link>About</Nav.Link>
                            <Nav.Link>Projects</Nav.Link>
                            <Nav.Link>Blog</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default header;