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

//Galerie Import
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

// Fade-in animation and const
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

const TheFade = styled.div`
  animation: 0.3s ${fadeAnimation};
`;

const images = [
    {
        original: img1,
        thumbnail: img1,
        originalTitle: "Bowsette"
    },
    {
        original: img2,
        thumbnail: img2,
        originalTitle: "Steve Burnside - RE Code Veronica"
    },
    {
        original: img3,
        thumbnail: img3,
        originalTitle: "Nagisa - Assassination Classroom"
    },
    {
        original: img4,
        thumbnail: img4
    },
    {
        original: img5,
        thumbnail: img5
    },
    {
        original: img6,
        thumbnail: img6,
        originalTitle: "John Wick"
    }
]

const photographyComponent = (props) => {
    return (
        <div>
            <TheFade>
                <Container className="PhotogContainer" fluid>
                    <Row>
                        <Col sm md lg={12}>
                            <Container>
                                <div className="photographyDescContainer">
                                    <div className="PhotogTitle">
                                        <h1>Photography</h1>
                                    </div>
                                    <div className="PhotogDescription">
                                        <p>Here are some of my pictures that I took as an amateur photographer <br />
                                        with my <b>Nikon D3400</b> attached with my 35mm lens</p>
                                        {/* Added breaking points for now.... */}
                                        <br /> <br />
                                        <p> You can find more on my instagram account: @kenserrano27</p>
                                    </div>
                                </div>
                            </Container>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col>
                            <ImageGallery items={images} />
                        </Col>
                    </Row>
                </Container>
            </TheFade>
        </div>
    )
}

export default photographyComponent;