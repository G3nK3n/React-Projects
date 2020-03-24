import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

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
                    <Col>
                        <Photo src={'C:\Users\Ken\Desktop\Stuffs_2017-2018\Images\Photoshoots\Vainvirgos(Bowsette)\DSC_0354.JPG'}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default photographyComponent;