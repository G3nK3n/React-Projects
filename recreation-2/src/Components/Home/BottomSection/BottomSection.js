import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Img1 from '../../../mars-rover.jpg';
import Img2 from '../../../finding-planet.jpg';
import Img3 from '../../../new-satellitedish.jpg';

import classes from '../BottomSection/BottomSection.module.css';


const bottomsection = () => (
    <div className={classes.BottomSection}>
        <Container>
            <Row>
                <Col>
                    <div className={classes.Featured}>
                        <h1 className={classes.Title}>Featured Video</h1>
                        <img src={Img1} />
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1 className={classes.Title}>Latest Blog</h1>
                        <ul className={classes.LatestBlogList}>
                            <li className={classes.TopBlog}>
                                <Row>
                                    <Col md={3}>
                                        <img src={Img2} />
                                    </Col>
                                    <Col md={7}>
                                        <div className={classes.RightSide}>
                                            <h1>Finding Planet x-123</h1>
                                            <p>February 6, 2023</p>
                                            <Button>Read More</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </li>
                            <li className={classes.BottomBlog}>
                                <Row>
                                    <Col md={3}>
                                        <img src={Img3} />
                                    </Col>
                                    <Col md={9}>
                                        <div className={classes.RightSide}>
                                            <h1>New Satellite Dish</h1>
                                            <p>February 3, 2023</p>
                                            <Button>Read More</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default bottomsection;