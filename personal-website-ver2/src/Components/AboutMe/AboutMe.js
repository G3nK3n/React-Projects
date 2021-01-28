import React from 'react';
import classes from '../AboutMe/AboutMe.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const aboutme = () => (
    <div className={classes.AboutMeBorder}>
        <Container className={classes.AboutMeContainer}>
            <Row>
                <Col>
                    <div className={classes.AboutMe}>
                        <div className={classes.AboutMeInsideDiv}>
                            <h1>About Me</h1>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <p>
                            Hello, My name is Kenneth Serrano and I am currently a Computer Science student at Concordia University in Montreal.
                            I am currently in my final year and have a strong passion for web development and Photography.
                            <br />
                            <br />
                            My Passion for Web Development came in during my E-Commerce class in CEGEP, where we had to make an E-commerce website using PHP and MySql. 
                            Just seeing how the website is build from the ground up and seeing how everything works just blew my mind. The fact that other people are using the web apps that have built makes me want to continue building more of them.
                            I am constantly learning different web technologies and currently learning one of the frameworks of JavaScript, ReactJS, in which I am using for this website.
                            <br />
                            <br />
                            I have been an amateur photographer for the past 3 years, taking portrait style photography using my Nikon D3400 and 35mm lens 1.8G. 
                            I love the sharpness of the subject and popping out the colors, which also creates a beautiful blurred background. You can see some of my pictures in the Photography section.
                            If you would like to have a photoshoot with me, dont hesitate to contact me here or on my instagram Photography Account. Thank you
                        </p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1>Some picture here</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default aboutme;