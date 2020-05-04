import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import ListGroup from 'react-bootstrap/ListGroup'

const resumeComponent = (props) => {
    return(
        <div>  
            <Container className="AboutDiv">
                <h1 className="AboutMe">My Resume</h1>                
                <hr className="someLine"/>

                <div>
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
                            <h5>Web Developer (Intern)</h5>
                        </Col>
                        <Col>
                            <p className="DateStartEnd">May - July 2018</p>
                        </Col>
                    </Row>
                    <h6 className="CompanyAddress2">Tenaquip, Senneville, QC</h6>
                    <div className="ExperienceDesc2">
                        <p>- Converted SCN dealer's websites onto new platform.</p>
                        <p>- Styled dealer's websites using CSS, JavaScript and Bootstrap.</p>
                        <p>- Created SSL Certificate Form using HTML, CSS, JavaScript and JQuery.</p>
                    </div>
                    <Row>
                        <Col>
                            <h5>Software Developer (Intern)</h5>
                        </Col>
                        <Col>
                            <p className="DateStartEnd">May - August 2017</p>
                        </Col>
                    </Row>
                    <h6 className="CompanyAddress2">Canada Post, Montreal, QC</h6>
                    <div className="ExperienceDesc2">
                        <p>- Optimized database using MS Access to make it more efficient.</p>
                        <p>- Redid back-end VBA application according to the new database.</p>
                        <p>- Created new verison of existing VBA application.</p>
                        <p>- FIxed bugs on the report page.</p>
                    </div>
                    <Row>
                        <Col>
                            <h5>Web Developer (Intern)</h5>
                        </Col>
                        <Col>
                            <p className="DateStartEnd">August - Dec. 2012</p>
                     </Col>
                    </Row>
                    <h6 className="CompanyAddress2">Excendia, Montreal, QC</h6>
                    <div className="ExperienceDesc2">
                        <p>- Fixed bugs on the support page.</p>
                        <p>- Created a web service application using PHP and SOAP protocol.</p>
                        <p>- Tested webpages on mobile phones.</p>
                        <p>- Created different themes for the company website.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default resumeComponent;