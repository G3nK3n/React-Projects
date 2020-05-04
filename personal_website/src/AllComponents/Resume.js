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
                
                
                
                <h1 className="ResumeTitle">My Resume</h1>                
                <hr className="someLine"/>

                { /* EDUCATION SECTION */ }
                <div>
                    <h4 className="Sub-Title">Education</h4>
                    <Row>
                        <Col sm={4}>
                            <h5>Concordia University</h5>
                            <p className="DateStartEnd">2014 - Present</p>
                        </Col>
                        <Col sm={8}>
                            <h6>Bachelors of Computer Science</h6>
                            <p> Currently pursuing my degree in Computer Science, option Web Services and Application</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <h5>CEGEP Vanier</h5>
                            <p className="DateStartEnd">2009 - 2013</p>
                        </Col>
                        <Col sm={8}>
                            <h6>DEC in Computer Science and Technology</h6>
                            <p> Obtained my DEC in Computer Science. Most of the education was done with Java, but we had some courses that
                                taught us basic C++ and Visual Basic. During my time in CEGEP, we had an E-Commerce course were we 
                                also learned allot of different Web Languages, such as JavaScript, ASP, JSP, PHP, MySQL, etc.
                                This became my specilization after my studies in CEGEP.
                            </p>
                        </Col>
                    </Row>
                </div>

                <hr className="someLine"/>

                { /* EXPERIENCE SECTION */ }
                <div>
                    <h4 className="Sub-Title">Experience</h4>
                    <Row>
                        <Col sm={4}>
                            <h5>Ville de D.D.O.</h5>
                            <p className="DateStartEnd">May 2019 - Present</p>
                        </Col>
                        <Col sm={8}>
                            <h6>Office Assistant</h6>
                            <p>- Enter Data and file documents.  <br />
                               - Handle customer service duties, both in person and over the phone.  <br />
                               - Convert documents into digital format. <br />
                               <a href="https://ville.ddo.qc.ca/">DDO</a>
                            </p>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <h5>Tenaquip</h5>
                            <p className="DateStartEnd">May - July 2018</p>
                        </Col>
                        <Col sm={8}>
                            <h6>Web Developer (Intern) </h6>
                            <p>- Converted SCN dealer's websites onto new platform.  <br />
                               - Styled dealer's websites using CSS, JavaScript and Bootstrap.  <br />
                               - Created SSL Certificate FOrm using HTML, CSS, JavaScript and JQuery. <br />
                               <a href="https://www.tenaquip.com/">Tenaquip</a>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <h5>Canada Post</h5>
                            <p className="DateStartEnd">May - August 2017</p>
                        </Col>
                        <Col sm={8}>
                            <h6>Software Developer (Intern) </h6>
                            <p>- Optimized database using MS Access to make it more efficient.  <br />
                               - Redid back-end VBA application according to the new database.  <br />
                               - Created new version of existing VBA application. <br />
                               - Fixed bugs on the report page. <br />
                               <a href="https://www.canadapost.ca/cpc/en/home.page">Canada Post</a>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <h5>Excendia</h5>
                            <p className="DateStartEnd">August - December 2012</p>
                        </Col>
                        <Col sm={8}>
                            <h6>Web Developer (Intern) </h6>
                            <p>- Fixed bugs on the support page.  <br />
                               - Created a Web Service application using PHP with SOAP protocol.  <br />
                               - Tested webpages on mobile phones. <br />
                               - Created different themes for the company website. <br />
                               <a href="https://www.speechmobility.com/en/excendia">Excendia</a>
                            </p>
                        </Col>
                    </Row>
                </div>

                { /* Previous design */ }
                {/*
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
                </div> */}
            </Container>
        </div>
    );
}

export default resumeComponent;