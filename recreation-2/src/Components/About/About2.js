import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Img1 from '../../earth-satellite.jpg';
import Img2 from '../../space-shuttle.png';
import classes from '../About/About2.module.css';


const about2 = () => (
    <div>
        <div className={classes.About2FirstRow}>
            <Container>
                <Row>
                    <Col md={6} lg={7} className="d-none d-lg-block d-xl-block">
                        <div>
                            <h2>We have more templates for you</h2>
                            <p>
                                Looking for more templates? Just browse through all our Free Website Templates and find what you’re looking for. 
                                But if you don’t find any website template you can use, you can try our Free Web Design service and tell us all about it. 
                                Maybe you’re looking for something different, something special. 
                                And we love the challenge of doing something different and something special.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} lg={5} className="d-none d-lg-block d-xl-block">
                        <div>
                            <img src={Img1} />
                        </div>
                    </Col>
                    
                    {/* Medium size About2 section */}
                    <Col className="d-block d-sm-block d-md-block d-lg-none">
                        <div className={classes.About2FirstRowResp}>
                            <img src={Img1} />
                        </div>
                        <div>
                            <h2>We have more templates for you</h2>
                            <p>
                                Looking for more templates? Just browse through all our Free Website Templates and find what you’re looking for. 
                                But if you don’t find any website template you can use, you can try our Free Web Design service and tell us all about it. 
                                Maybe you’re looking for something different, something special. 
                                And we love the challenge of doing something different and something special.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className={classes.About2SecondRow}>
            <Container>
                <Row>
                    <Col md={12} lg={7}>
                        <div className={classes.About2SecondRowImg}>
                            <img src={Img2} />
                        </div>                   
                    </Col>
                    <Col md={12} lg={5}>
                        <div className={classes.About2SecondRowText}>
                            <h2>Be part of the community</h2>
                            <p>
                                If you’re experiencing issues and concerns about this website template, 
                                join the discussion on our forum and meet other people in the community who share the same interests with you.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className={classes.About2ThirdRow}>
            <Container>
                <Row>
                    <Col>
                        <div className={classes.About2ThirdRowText}>
                            <h2>Template Details</h2>
                            <p>
                                Design Version 1. Code version 5. Website Template details, discussion and updates for this Space Science Website Template. Website Template design by Free Website Templates.
                                Please feel free to remove some or all the text and links of this page and replace it with your own About content.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
);

export default about2;