import React from 'react';
import classes from '../MainBody/MainBody.module.css';
import Featured from './FeaturedProject/FeaturedProject';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Img1 from '../../../satellite.png';


const mainbody = () => (
    <div className={classes.BodyDiv}>
        <Container className={classes.MainBody}>
            <div className={classes.thisDiv}>
                <h1>Soyuz Tma-M</h1>
                <h2>Spacecraft</h2>
                <Button variant="dark">Read More</Button>
            </div>
            <img src={Img1} />
            <Featured />
        </Container>
    </div>
);

export default mainbody;