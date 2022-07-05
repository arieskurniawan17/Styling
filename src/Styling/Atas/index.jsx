import React from 'react';
import {Container,Navbar, Nav} from 'react-bootstrap';

export default class Atas extends React.Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Aries Kurniawan</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Biografi</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
} 
