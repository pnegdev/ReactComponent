import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
    return (
        <div className="App">

            {/* Navigation */}
            <Navbar className="sticky-top" bg="danger" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">Ciao !</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#">Accueil</Nav.Link>
                        <Nav.Link href="#">Vols</Nav.Link>
                        <Nav.Link href="#">Destinations</Nav.Link>
                        <Nav.Link className='text-white' href="#">Bons plans</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Menu;