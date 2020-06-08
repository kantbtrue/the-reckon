import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

class Header extends React.Component {
    handleModal = (e) => {
        e.preventDefault();
        this.props.handleModal(true);
    };
    render() {
        return (
            <header className="header" id="header">
                <Navbar bg="light" expand="sm">
                    <Container>
                        <Navbar.Brand href="/">
                            The Reckon
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto align-items-center">
                                <Nav.Item>Intraday brokerage Calculator</Nav.Item>
                                <Nav.Item>
                                    <Button variant="dark" type="submit" size="sm" onClick={this.handleModal}>
                                        <FontAwesomeIcon icon={faCog}> Settings</FontAwesomeIcon>
                                    </Button>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    };
};
export default Header;