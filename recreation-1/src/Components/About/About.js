import React from 'react';
import topImage from '../../Edited.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import classes from '../About/About.module.css';

const about = () => (
    <div>
        <Container className={classes.About}>
            <div className={classes.ImageContainer}>
                <img src={topImage} />
            </div>
            <h2>About Kenneth Serrano</h2>
        </Container>
    </div>
)

export default about;