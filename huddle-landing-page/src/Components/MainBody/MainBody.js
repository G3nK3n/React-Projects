import React from 'react';
import Img1 from '../../illustration-mockups.svg';
import classes from '../MainBody/MainBody.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const mainbody = () => (
    <div>
        <Row>
            <Col>
                <div className={classes.ImageDiv}>
                    <img src={Img1}></img>
                </div>
            </Col>
            <Col>
                <div className={classes.RightCol}>
                    <h2>Build The Community <br /> Your Fans Will Love</h2>
                    <p>
                        Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                        Create connections with your users as you engage in genuine discussion.
                    </p>
                    <Button variant="light">Register</Button>
                </div>
            </Col>
        </Row>   
    </div>
);

export default mainbody;