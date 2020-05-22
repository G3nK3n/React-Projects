import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import ListGroup from 'react-bootstrap/ListGroup'

// Fade-in animation and const
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

const TheFade = styled.div`
  animation: 0.3s ${fadeAnimation};
`;

const resumeComponent = (props) => {
    return(
        <div>
            <TheFade>  
                <Container className="AboutDiv">  
                    <h1 className="ResumeTitle">My Resume</h1>                
                    <hr className="someLine"/>

                    { /* EDUCATION SECTION */ }
                    <div>
                        <h4 className="Sub-Title">Education</h4>
                        <Row>
                            <Col sm md lg={4}>
                                <h5>Concordia University</h5>
                                <p className="DateStartEnd">2014 - Present</p>
                            </Col>
                            <Col sm md lg={8}>
                                <h6>Bachelors of Computer Science</h6>
                                <p> Currently pursuing my degree in Computer Science, option Web Services and Application</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm md lg={4}>
                                <h5>CEGEP Vanier</h5>
                                <p className="DateStartEnd">2009 - 2013</p>
                            </Col>
                            <Col sm md lg={8}>
                                <h6>DEC in Computer Science and Technology</h6>
                                <p> Obtained my DEC in Computer Science. Most of the education was done with Java, but we had some courses that
                                    taught us basic C++ and Visual Basic. During my time in CEGEP, we had an E-Commerce course were we 
                                    also learned allot of different Web Languages, such as JavaScript, ASP, JSP, PHP, MySQL, etc.
                                    This became my specilization after my studies in CEGEP.
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <hr className="someLine"/>

                    { /* EXPERIENCE SECTION */ }
                    <div>
                        <h4 className="Sub-Title">Experience</h4>
                        <Row>
                            <Col sm md lg={4}>
                                <h5>Ville de D.D.O.</h5>
                                <p className="DateStartEnd">May 2019 - Present</p>
                            </Col>
                            <Col sm md lg={8}>
                                <h6>Office Assistant</h6>
                                <p>- Enter Data and file documents.  <br />
                                - Handle customer service duties, both in person and over the phone.  <br />
                                - Convert documents into digital format. <br />
                                <img className="externalWebLogo" src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png" alt="logo website, website logo png transparent background background" />
                                <a href="https://ville.ddo.qc.ca/">DDO</a>
                                </p>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col sm md lg={4}>
                                <h5>Tenaquip</h5>
                                <p className="DateStartEnd">May - July 2018</p>
                            </Col>
                            <Col sm md lg={8}>
                                <h6>Web Developer (Intern) </h6>
                                <p>- Converted SCN dealer's websites onto new platform.  <br />
                                - Styled dealer's websites using CSS, JavaScript and Bootstrap.  <br />
                                - Created SSL Certificate FOrm using HTML, CSS, JavaScript and JQuery. <br />
                                <img className="externalWebLogo" src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png" alt="logo website, website logo png transparent background background" />
                                <a href="https://www.tenaquip.com/">Tenaquip</a>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm md lg={4}>
                                <h5>Canada Post</h5>
                                <p className="DateStartEnd">May - August 2017</p>
                            </Col>
                            <Col sm md lg={8}>
                                <h6>Software Developer (Intern) </h6>
                                <p>- Optimized database using MS Access to make it more efficient.  <br />
                                - Redid back-end VBA application according to the new database.  <br />
                                - Created new version of existing VBA application. <br />
                                - Fixed bugs on the report page. <br />
                                <img className="externalWebLogo" src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png" alt="logo website, website logo png transparent background background" />
                                <a href="https://www.canadapost.ca/cpc/en/home.page">Canada Post</a>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm md lg={4}>
                                <h5>Excendia</h5>
                                <p className="DateStartEnd">August - December 2012</p>
                            </Col>
                            <Col sm md lg={8}>
                                <h6>Web Developer (Intern) </h6>
                                <p>- Fixed bugs on the support page.  <br />
                                - Created a Web Service application using PHP with SOAP protocol.  <br />
                                - Tested webpages on mobile phones. <br />
                                - Created different themes for the company website. <br />
                                <img className="externalWebLogo" src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png" alt="logo website, website logo png transparent background background" />
                                <a href="https://www.speechmobility.com/en/excendia">Excendia</a>
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <hr className="someLine"/>

                    { /* Technologies section */ }

                    <div>
                        <h4 className="Sub-Title">Technologies</h4>
                        <div className="TechSection">
                            <Row>
                                <Col sm={4} md lg={4}>
                                    <h5>Highly Proficient</h5>
                                    <ul>
                                        <li>Java</li>
                                        <li>Visual Basic</li>
                                        <li>VBA</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>PHP</li>
                                        <li>MySQL</li>
                                    </ul>
                                </Col>
                                <Col sm={4} md lg={4}>
                                    <h5>Basic Knowledge</h5>
                                    <ul>
                                        <li>C++</li>
                                        <li>ASP</li>
                                        <li>ReactJS</li>
                                        <li>NodeJS</li>
                                        <li>Python</li>
                                    </ul>
                                </Col>
                                <Col sm={4} md lg={4}>
                                    <h5 className="environment">Environment</h5>
                                    <ul>
                                        <li>Eclipse</li>
                                        <li>Visual Studio(Code)</li>
                                        <li>GitHub</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </TheFade>
        </div>
    );
}

export default resumeComponent;