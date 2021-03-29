import React from 'react';
import Facebook from '../../facebook.svg';
import Instagram from '../../instagram1.svg';
import Twitter from '../../twitter.svg';
import classes from '../Footer/Footer.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const thefooter = () => (
    <div>
        <Row>
            <Col>
                <div className={classes.SocialMedia}>
                    <a href="#" ><img src={Facebook} /></a>
                    <a href="#" ><img src={Instagram} /></a>
                    <a href="#" ><img src={Twitter} /></a>
                </div>    
            </Col>
        </Row>
    </div>
);

export default thefooter;