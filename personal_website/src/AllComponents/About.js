import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../my_head.jpg';

// Fade-in animation and const
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

const TheFade = styled.div`
  animation: 0.3s ${fadeAnimation};
`;

const aboutMe = (props) => {
    return(
        <div>
            <TheFade>  
                <Container className="AboutDiv2">
                    <div className="AboutDiv2InnerContainer">
                        <Row>
                            <Col md={12} lg={8}>
                                <div className="AboutMeTitle">
                                    <h1 className="ResumeTitle2">About Me</h1>
                                </div>
                            </Col>
                            <Col md={12} lg={4}>
                                <div className="ProfilePicContainer">
                                    <Image className="ProfilePic" src={img1} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div>
                                    <p>
                                        Hello, My name is Kenneth Serrano and I am currently a Computer Science student at Concordia University in Montreal.
                                        I am currently in my final year and have a strong passion for web development and Photography.
                                    </p>
                                    <p>
                                        My Passion for Web Development came in during my E-Commerce class in CEGEP, where we had to make an
                                        E-commerce website using PHP and MySql. Just seeing how the website is build from the ground up and seeing how
                                        everything works just blew my mind. The fact that other people are using the web apps that have built makes me want
                                        to continue building more of them. I am constantly learning different web technologies and currently learning one of 
                                        the frameworks of JavaScript, ReactJS, in which I am using for this website.
                                    </p>
                                    { /* insert a paragraph about experiences here */ }
                                    <p>
                                        I have been an amateur photographer for the past 3 years, taking portrait style photography using my Nikon D3400 and
                                        35mm lens 1.8G. I love the sharpness of the subject and popping out the colors, which also creates a beautiful blurred
                                        background. You can see some of my pictures in the Photography section. If you would like to have a photoshoot with me, 
                                        dont hesitate to contact me here or on my instagram Photography Account. Thank you!
                                        {/* Maybe move this paragraph in Photography section */ }
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    
                    
                    
                    
                    
                    
                    {/* <h1 className="AboutMe">Kenneth Serrano</h1>
                    <h5 className="JobTitle">Software/Web Developer - Student</h5>                    
                    <div className="AboutMeDesc">
                        <p>Hello, this will be a brief description of me. Coming soon!</p>
                    </div>

                    <hr className="someLine"/> */}

                </Container>
            </TheFade>
        </div>
    )
}

export default aboutMe;