import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import classes from '../Blog/Blog.module.css';
import Img1 from '../../moon-satellite.jpg';
import Img2 from '../../alien-life.jpg';
import Img3 from '../../galaxy.jpg';

const blogpage = () => (
    <div className={classes.BlogPage}>
        <Container>
            <Row>
                <Col>
                    <div className={classes.BlogTitle}>
                        <h1>Blog</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={7}>
                    <div className={classes.Col1}>
                        <h1>Col 1</h1>
                    </div>
                </Col>
                <Col xl={5}>
                    <div className={classes.Col2}>
                        <div>
                            <h1>Featured Post</h1>
                            <img src={Img1} />
                            <h2>Soyuz TMA-M</h2>
                            <p>February 6, 2023</p>
                        </div>
                        <div>
                            <h1>Recent Post</h1>
                            <ul>
                                <li>
                                    <div>
                                        <img src={Img2} />
                                    </div>
                                    <div>
                                        <h2>Alien Life</h2>
                                        <p>February 3, 2023</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src={Img3} />
                                    </div>
                                    <div>
                                        <h2>The Galaxy</h2>
                                        <p>February 1, 2023</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default blogpage;