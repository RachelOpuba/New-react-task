import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar>
                <Container>
                     <Navbar.Brand href="#home" className="py-4 header-text">Spacious</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
