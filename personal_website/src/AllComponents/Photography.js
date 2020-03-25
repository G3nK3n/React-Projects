import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well
import img1 from '../DSC_0354.JPG';
import img2 from '../DSC_0250.JPG';
import img3 from '../DSC_0462.jpg';
import img4 from '../DSC_0209.JPG';
import img5 from '../DSC_0425.JPG';
import img6 from '../DSC_0409.JPG';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Photo from 'react-bootstrap/Image';

const photographyComponent = (props) => {
    return (
        <div>
            <Container className="PhotogContainer" fluid>
                <Row>
                    <Col sm={12}>
                        <div className="PhotogTitle">
                            <h1>I'm Ken</h1>
                        </div>
                        <div className="PhotogDescription">
                            <p>Here are some of my pictures that I took as a amateur photographer <br />
                               with my <b>Nikon D3400</b> attached with my 35mm lens</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Container className="imgContainer">
                        <Col className="cosImageCol" sm={12}>
                            <Photo className="cosImage" src={img1} rounded/>
                            <Photo className="cosImage" src={img2} rounded/>
                            <Photo className="cosImage" src={img3} rounded/>
                        </Col>
                        <Col className="cosImageCol" sm={12}>
                            <Photo className="cosImage2" src={img4} rounded/>
                            <Photo className="cosImage2" src={img5} rounded/>
                            <Photo className="cosImage2" src={img6} rounded/>
                        </Col>
                        
                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default photographyComponent;