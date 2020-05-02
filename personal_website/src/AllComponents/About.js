import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import ListGroup from 'react-bootstrap/ListGroup'

const someLine = ({ colour }) => (
    <hr style={{colour:colour, 
                backgroundColour: colour, 
                height: 5
        }}
    />
);


const aboutComponent = (props) => {
    return(
        <div>  
            <Container className="AboutDiv">
                <h1 className="AboutMe">About me</h1>
                <h5 className="JobTitle">Software/Web Developer - Student</h5>                    
                <div className="AboutMeDesc">
                    <p>Hello, this will be a brief description of me. Coming soon!</p>
                </div>
                
                <hr className="someLine"/>
                        
                <h4 className="Sub-Title">Education</h4>
                <Row>
                    <Col>
                        <h5>Bachelors of Computer Science</h5>
                    </Col>
                    <Col>
                        <p className="DateStartEnd">2014 - Present</p>
                    </Col>
                </Row>
                <h6 className="CompanyAddress">Concordia University, Montreal, QC</h6>

                <Row>
                    <Col>
                        <h5>DEC in Computer Science</h5>
                    </Col>
                    <Col>
                        <p className="DateStartEnd">2009 - 2013</p>
                    </Col>
                </Row>
                <h6 className="CompanyAddress">CEGEP Vanier, Montreal, QC</h6>



                {/* EXPERIENCE SECTION */}
                <h4 className="Sub-Title">Experience</h4>
                <Row>
                    <Col>
                        <h5>Office Assistant</h5>
                    </Col>
                    <Col>
                        <p className="DateStartEnd">May 2019 - Present</p>
                    </Col>
                </Row>
                <h6 className="CompanyAddress2">Ville de Dollard-Des-Ormeaux, D.D.O, QC</h6>
                <div className="ExperienceDesc2">
                    <p>- Enter data and file documents.</p>
                    <p>- Handle customer service duties, both in person and over the phone.</p>
                    <p>- Convert documents into digital format.</p>
                </div>
                <Row>
                    <Col>
                        <h5>Office Assistant</h5>
                    </Col>
                    <Col>
                        <p className="DateStartEnd">May 2019 - Present</p>
                    </Col>
                </Row>
                <h6 className="CompanyAddress2">Ville de Dollard-Des-Ormeaux, D.D.O, QC</h6>
                <div className="ExperienceDesc2">
                    <p>- Enter data and file documents.</p>
                    <p>- Handle customer service duties, both in person and over the phone.</p>
                    <p>- Convert documents into digital format.</p>
                </div>
                <Row>
                    <Col>
                        <h5>Office Assistant</h5>
                    </Col>
                    <Col>
                        <p className="DateStartEnd">May 2019 - Present</p>
                    </Col>
                </Row>
                <h6 className="CompanyAddress2">Ville de Dollard-Des-Ormeaux, D.D.O, QC</h6>
                <div className="ExperienceDesc2">
                    <p>- Enter data and file documents.</p>
                    <p>- Handle customer service duties, both in person and over the phone.</p>
                    <p>- Convert documents into digital format.</p>
                </div>
                <Row>
                    <Col>
                        <h5>Office Assistant</h5>
                    </Col>
                    <Col>
                        <p className="DateStartEnd">May 2019 - Present</p>
                    </Col>
                </Row>
                <h6 className="CompanyAddress2">Ville de Dollard-Des-Ormeaux, D.D.O, QC</h6>
                <div className="ExperienceDesc2">
                    <p>- Enter data and file documents.</p>
                    <p>- Handle customer service duties, both in person and over the phone.</p>
                    <p>- Convert documents into digital format.</p>
                </div>
            
            {/*
                <Row>
                    <Col sm={12}>
                        <h1>About Me</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <ul className="AboutMeDesc">
                            <li> Kenneth Serrano </li>
                            <li> Computer Science Student (Concordia University)</li>
                            <li> 28 </li>
                            <li> Amateur Photographer </li>
                            <li> <a href="https://github.com/G3nK3n">Github (All my portfolio projects)</a> </li>
                            <li> <a href="https://www.linkedin.com/in/kenserrano/">LinkedIn</a> </li>
                            <li> Email: ken_serrano@Hotmail.com </li>
                            <li> UNDER CONSTRUCTION!! </li>
                        </ul>
                    </Col>
                </Row>
            */}
            </Container>
        </div>
    );
}

export default aboutComponent;