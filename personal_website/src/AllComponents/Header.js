import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

//Bootstrap Imports
import Navbar from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//Used for Responsive behavior
import Navbar2 from 'react-bootstrap/Navbar';

const headerComponent = (props) => {
    
    
    
    return(
        <div className="header">
         <Container fluid>
         <Navbar className="wholeNav">
            <Row>
                <Col sm={3} md={3} lg={2} className="d-none d-sm-block" > 
                    <NavbarBrand onClick={props.clickHome}className="NavBarBrand" href="#"> KEN SERRANO </NavbarBrand>
                </Col>

                <Col sm={9} md={9} lg={10} className="d-none d-sm-block">
                    <div className="NavBarItems">
                        <Navbar.Item>
                            <Navbar.Link onClick={props.clickResume} className="NavBarLink" href="#"> Resume </Navbar.Link>
                        </Navbar.Item>
                        <vl className="someVerticalLine2"/>
                        <Navbar.Item>
                            <Navbar.Link onClick={props.clickProject} className="NavBarLink" href="#"> Projects </Navbar.Link>
                        </Navbar.Item>
                        <vl className="someVerticalLine2"/>
                        <Navbar.Item>
                            <Navbar.Link onClick={props.clickPhotog} className="NavBarLink" href="#"> Photography </Navbar.Link>
                        </Navbar.Item>
                        <vl className="someVerticalLine2"/>
                        <Navbar.Item>
                            <Navbar.Link className="NavBarLink" onClick={props.clickAbout} href="#"> About </Navbar.Link>
                        </Navbar.Item>
                        <vl className="someVerticalLine2"/>
                        <Navbar.Item>
                            <Navbar.Link onClick={props.clickContact} className="NavBarLink" href="#"> Contact </Navbar.Link>
                        </Navbar.Item>
                    </div>
                </Col>
                

                {/* Added this to practice Bootstrap with react.
                    This translates to only show in XS, while not in SM 
                    Refer to the Bootstrap V4 website for more info */}
                <Col xs={4} className="d-block d-sm-none" >
                    <div className="navbarBrand">
                        <Navbar2.Brand onClick={props.clickHome}className="NavBarBrand" href="#"> KEN SERRANO </Navbar2.Brand>
                    </div>
                </Col>

                {/* RESPONSIVE HEADER */}
                <Col xs={8} className="d-block d-sm-none">
                    
                    
                    <Navbar2 expand="lg" variant="dark">
                        <Navbar2.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar2.Collapse id="responsive-navbar-nav">
                        {/* <div className="NavBarItems"> */}
                            <Navbar.Item>
                                <Navbar.Link onClick={props.clickResume} className="NavBarLink" href="#"> Resume </Navbar.Link>
                            </Navbar.Item>
                            <vl className="someVerticalLine2"/>
                            <Navbar.Item>
                                <Navbar.Link onClick={props.clickProject} className="NavBarLink" href="#"> Projects </Navbar.Link>
                            </Navbar.Item>
                            <vl className="someVerticalLine2"/>
                            <Navbar.Item>
                                <Navbar.Link onClick={props.clickPhotog} className="NavBarLink" href="#"> Photography </Navbar.Link>
                            </Navbar.Item>
                            <vl className="someVerticalLine2"/>
                            <Navbar.Item>
                                <Navbar.Link className="NavBarLink" onClick={props.clickAbout} href="#"> About </Navbar.Link>
                            </Navbar.Item>
                            <vl className="someVerticalLine2"/>
                            <Navbar.Item>
                                <Navbar.Link onClick={props.clickContact} className="NavBarLink" href="#"> Contact </Navbar.Link>
                            </Navbar.Item>
                        {/* </div> */}
                        </Navbar2.Collapse>
                    </Navbar2>
                </Col>
            </Row>
         </Navbar>
         </Container>
        </div>
    );
}

export default headerComponent;