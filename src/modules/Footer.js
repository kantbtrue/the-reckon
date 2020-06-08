import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer py-3 border-top border-light" id="footer">
            <Container>
                <Row>
                    <Col xs>
                        <div className="copyright text-center">
                            &copy; <span>{new Date().getFullYear()}</span>, All rights reserved.
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
export default Footer;