import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Navigation() {
    return (
        <Navbar bg="danger" expand="lg">
            <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Projects</Nav.Link>
                    <Nav.Link href="#link">Resume</Nav.Link>
                    <NavDropdown title="Public Profile" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Github</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">LinkedIn</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">StackOverFlow</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Code Wars</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
