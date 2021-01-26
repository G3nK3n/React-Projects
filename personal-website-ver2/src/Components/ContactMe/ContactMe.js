import React from 'react';
import classes from '../ContactMe/ContactMe.module.css';
import LinkedInIcon from '../../LinkedIn_Icon.png';
import GitHubIcon from '../../GitHub-Mark-Light-64px.png';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const contactme = () => (
    <div className={classes.FormBorder}>
        <Container className={classes.ContactMeContainer}>
            <Row>
                <Col>
                    <div className={classes.ContactMe}>
                        <div className={classes.ContactMeInsideDiv}>
                            <h1>Contact Me</h1>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <div className={classes.ContactText}>
                            <p>
                                Hello! To contact me, please fill out the form on the bottom and I will try to respond as soon as possible.
                                You can also message me on my LinkedIn profile or message me directly to my email with the links below. Thank you!
                            </p>
                        </div>
                        <Form className={classes.Form}>
                            <Form.Group>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Enter Name"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Enter Email"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Message:</Form.Label>
                                <Form.Control as="textarea" rows={7} size="sm" type="text" placeholder="Enter Message"/>
                            </Form.Group>
                            <div className={classes.FormButton}>
                                <Button variant="secondary" type="button">
                                    Send
                                </Button>
                            </div>
                        </Form>           
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={classes.IconContainer}>
                        <div className={classes.Icons}>
                            <a href="https://www.linkedin.com/in/kenserrano/" target="_blank"><img src={LinkedInIcon} /></a>
                        </div>
                    </div>     
                </Col>
                <Col>
                    <div className={classes.IconContainer}>
                        <div className={classes.Icons}>
                            <a href="https://github.com/G3nK3n" target="_blank" ><img src={GitHubIcon} /></a>
                        </div>
                    </div> 
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={classes.CopyrightBorder}>
                        <div className={classes.CopyrightMessage}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default contactme;