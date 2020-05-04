import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const aboutMe = (props) => {
    return(
        <div>  
            <Container className="AboutDiv">
                <h1 className="AboutMe">Kenneth Serrano</h1>
                <h5 className="JobTitle">Software/Web Developer - Student</h5>                    
                <div className="AboutMeDesc">
                    <p>Hello, this will be a brief description of me. Coming soon!</p>
                </div>

                <hr className="someLine"/>
            </Container>
        </div>
    )
}

export default aboutMe;