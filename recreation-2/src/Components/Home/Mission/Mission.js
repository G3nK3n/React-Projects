import React from 'react';
import Container from 'react-bootstrap/Container';

import classes from '../Mission/Mission.module.css';

const mission = () => (
    <div className={classes.MissionDiv}>
        <Container>
            <div className={classes.Mission}>
                <h1>Our mission</h1>
                <p>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.</p>
            </div>
        </Container>
    </div>
);

export default mission;