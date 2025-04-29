import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Rocket } from 'react-bootstrap-icons';

const CustomNavbar = ({ isLoggedIn, onLogout }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Container fluid>
        {/* NASA Branding - Left Side */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Rocket size={28} className="me-2 text-danger" />
          <span className="fw-bold">NASA API Explorer</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="main-navbar" />
        
        {isLoggedIn && (
          <Navbar.Collapse id="main-navbar">
            {/* Centered Navigation Links */}
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="px-3 fw-semibold">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="px-3 fw-semibold">About</Nav.Link>
              <Nav.Link as={Link} to="/api" className="px-3 fw-semibold">
                NASA API
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="px-3 fw-semibold">Contact</Nav.Link>
            </Nav>
            
            {/* Logout Button - Right Side */}
            <div className="d-flex ms-auto">
              <Button 
                variant="outline-light" 
                onClick={onLogout}
                className="px-3"
              >
                Logout
              </Button>
            </div>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;