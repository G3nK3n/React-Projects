import React from 'react';
import ImageHolder from '../MainBody2/ImageHolder/ImageHolder';
import classes from '../MainBody2/MainBody2.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const mainbody2 = props => (
    <div>
        <Container>
            <Row>
                <h2 className={classes.Placeholder}>This is just a place holder, so you can see what the site would look like.</h2>
            </Row>
            <Row>
                <p className={classes.Paragraph}>
                    This website template has been designed by Free Website Templates for you, for free. You can replace all this text with 
                    your own text. Want an easier solution for a Free Website? Head straight to Wix and immediately start customizing your 
                    website! Wix is an online website builder with a simple drag & drop interface, meaning you do the work online and 
                    instantly publish to the web. Nothing to download, nothing to upload 
                </p>
            </Row>
            <Row>
                <ImageHolder />
            </Row>
            
        </Container>
    </div>
    
)

export default mainbody2;