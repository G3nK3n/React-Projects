import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../Header/Header.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import SideDrawer from '../Header/SideDrawer/SideDrawer';

import logo from '../../../logo.png';


const header = (props) => (
    <div className={classes.DivHeader}>
        <Container className={classes.Header}>
            <Row>
                <Col sm={6} md={6} lg={4}>
                    <Navbar>
                        <a href="#" ><img src={logo} /></a>   
                    </Navbar>
                </Col>
                <Col md={5} lg={8} className="d-none d-lg-block d-xl-block" >
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
                {/* Responsive Links */}
                <Col sm={6} md={6} className="d-none d-sm-block d-md-block d-lg-none">
                    <Navbar expand="lg" variant="dark" className={classes.Test}>
                        <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse className={classes.ResponsiveLinks} id="responsive-navbar-nav">
                            <div>
                                <Nav className={classes.Links}>
                                    <Nav.Link onClick={props.clickHomePage}>Home</Nav.Link>
                                    <Nav.Link>About</Nav.Link>
                                    <Nav.Link>Projects</Nav.Link>
                                    <Nav.Link>Blog</Nav.Link>
                                    <Nav.Link>Contact</Nav.Link>
                                </Nav>
                            </div>
                        </Navbar.Collapse>   
                    </Navbar>
                
                </Col>
            </Row>
        </Container>
    </div>
)

export default header;