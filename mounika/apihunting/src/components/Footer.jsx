import { Container, Row, Col } from 'react-bootstrap';
import { 
  Github, 
  Twitter, 
  Linkedin,
  EnvelopeFill,
  TelephoneFill,
  GeoAltFill
} from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="bg-light border-top mt-5">
      <Container className="py-4">
        <Row className="g-4">
          {/* Brand Column */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-3">API Explorer</h5>
            <p className="text-muted small">
              Discover and integrate with powerful public APIs through our intuitive platform.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-dark"><Github size={20} /></a>
              <a href="#" className="text-dark"><Twitter size={20} /></a>
              <a href="#" className="text-dark"><Linkedin size={20} /></a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h6 className="fw-bold mb-3">Explore</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-muted small text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="/about" className="text-muted small text-decoration-none">About</a></li>
              <li className="mb-2"><a href="/api" className="text-muted small text-decoration-none">NASA API</a></li>
              <li><a href="/contact" className="text-muted small text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3">Contact</h6>
            <ul className="list-unstyled text-muted small">
              <li className="mb-2 d-flex align-items-center">
                <EnvelopeFill className="me-2" size={16} />
                contact@apiexplorer.com
              </li>
              <li className="mb-2 d-flex align-items-center">
                <TelephoneFill className="me-2" size={16} />
                +1 (555) 123-4567
              </li>
              <li className="d-flex align-items-center">
                <GeoAltFill className="me-2" size={16} />
                San Francisco, CA
              </li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col lg={4} md={6}>
            <h6 className="fw-bold mb-3">Stay Updated</h6>
            <p className="text-muted small mb-3">
              Subscribe to our newsletter for new API integrations and updates.
            </p>
            <div className="d-flex">
              <input 
                type="email" 
                className="form-control form-control-sm" 
                placeholder="Your email" 
              />
              <button className="btn btn-dark btn-sm ms-2 px-3">
                Join
              </button>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4 pt-3 border-top">
          <Col className="text-center text-muted small">
            &copy; {new Date().getFullYear()} API Explorer. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;