import { useState } from 'react';
import Footer from '../components/Footer';
import { 
  Container, 
  Row, 
  Col, 
  Form, 
  Button, 
  Alert,
  Card  // Make sure to import Card
} from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container className="py-4">
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 text-center">Contact Us</h1>
          <p className="lead text-center">We'd love to hear from you!</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          {submitted && (
            <Alert variant="success" className="mb-4">
              Thank you for your message! We'll get back to you soon.
            </Alert>
          )}

          <Card className="shadow-sm">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4} className="text-center mb-4">
          <div className="p-3 border rounded">
            <i className="bi bi-envelope fs-1 text-primary mb-2"></i>
            <h4>Email</h4>
            <p>contact@apihunting.com</p>
          </div>
        </Col>

        <Col md={4} className="text-center mb-4">
          <div className="p-3 border rounded">
            <i className="bi bi-geo-alt fs-1 text-primary mb-2"></i>
            <h4>Location</h4>
            <p>123 API Street, Internet City</p>
          </div>
        </Col>

        <Col md={4} className="text-center mb-4">
          <div className="p-3 border rounded">
            <i className="bi bi-telephone fs-1 text-primary mb-2"></i>
            <h4>Phone</h4>
            <p>+1 (555) 123-4567</p>
          </div>
        </Col>
      </Row>
      <Footer/>
    </Container>
  );
};

export default Contact;