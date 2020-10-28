import React from 'react';
import classes from '../MainBody/MainBody.module.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const mainpage = props => (
    
    <div className={classes.Background}>
        <Row className={classes.Row}>
            <Col className={classes.Col}>
                <Image src="https://image-more.hpplus.jp/upload/314/3146b34a36737e61b76d298e76f57b91.png" />
            </Col>
            <Col className={classes.Col}>
                <div>
                    <h1 className={classes.h1}>
                        Hello!
                        <br />
                        Welcome!
                    </h1>
                    <Button className={classes.Button} variant="outline-dark">Enter Website</Button>
                </div>
            </Col>
        </Row>
    </div>
);

export default mainpage;