import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import classes from '../Blog/Blog.module.css';

const blogpage = () => (
    <div className={classes.BlogPage}>
        <Container>
            <Row>
                <Col>
                    <div className={classes.BlogTitle}>
                        <h1>Blog</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={classes.Col1}>
                        <h1>Col 1</h1>
                    </div>
                </Col>
                <Col>
                    <div className={classes.Col2}>
                        <h1>Col 2</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default blogpage;