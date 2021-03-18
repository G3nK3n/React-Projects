import React from 'react';
import classes from '../Header/Header.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from '../../logo2.svg';

const header = () => (
    <div>
        <Row>
            <Col>
                <div className={classes.HeaderDiv}>
                    <img src={Logo} />
                </div>
            </Col>
        </Row>
    </div>
);

export default header;
