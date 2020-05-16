import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import LinkedIn from '../LinkedIn_Icon.png';
import Hotmail from '../Hotmail_Icon.png';

// Fade-in animation and const
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

// Apparently you cant use it like old CSS way in V4 
const TheFade = styled.div`
  animation: 0.3s ${fadeAnimation};
`;

const contactComponent = (props) => {
    return(
        <div>
            <TheFade>
                <Container className="ContactDiv">
                    <Row>
                        <Col sm={5}>
                            <div className="ContactLinks">
                                <a href="https://www.linkedin.com/in/kenserrano/" target="_blank" rel="noopener noreferrer" ><Image className="LinkedIn_Icon" src={LinkedIn} /></a>
                                <a href="mailto:ken_serrano@Hotmail.com" ><Image className="Hotmail_Icon" src={Hotmail} /></a>
                            </div>

                            <div className="ContactMe">
                                <h4 className="Sub-Title">Contact_Me</h4>
                                <p>Hello! To contact me, please fill out the form on the right and I will try
                                    to respond as soon as possible. You can also message me on my LinkedIn profile or message me directly
                                    to my email with the above links. Thank you!
                                </p>
                            </div>
                        </Col>

                        <vl className="someVerticalLine"/>

                        <Col sm={6}>
                            <div className="FormContainer">
                                <Form>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Name: </Form.Label>
                                        <Form.Control type="name" placeholder="Name: " />
                                    </Form.Group>
                                    
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address: </Form.Label>
                                        <Form.Control type="email" placeholder="Email: " />
                                        {/* <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text> */}
                                    </Form.Group>

                                    <Form.Label>Message: </Form.Label>
                                    <FormControl className="MessageBox" as="textarea" aria-label="With textarea" placeholder="Message: "/>

                                    <Button className="SubmitButton" variant="primary" type="button">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </TheFade>
        </div>
    )
}

export default contactComponent;