import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Container fluid className="px-0">
      {/* Hero Section */}
      <div className="bg-light text-black py-4">  
  <Container className="text-center">  
    <h1 className="display-4 fw-bold mb-3">Welcome to API Hunting</h1>  
    <p className="lead mb-4">Explore the universe of public APIs with ease</p>  
    <Button variant="primary" href="/api">Start Exploring</Button>
  </Container>
</div>

      {/* Features Section */}
      <Container className="py-5 my-4">
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3 text-primary">
                  <i className="bi bi-stars fs-1"></i>
                </div>
                <Card.Title>NASA API Explorer</Card.Title>
                <Card.Text>
                  Discover stunning astronomy pictures from NASA's API with detailed explanations.
                </Card.Text>
                <Button variant="outline-primary" href="/api">Explore Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3 text-success">
                  <i className="bi bi-lightning-charge fs-1"></i>
                </div>
                <Card.Title>Multiple APIs</Card.Title>
                <Card.Text>
                  More API integrations coming soon! Stay tuned for exciting additions.
                </Card.Text>
                <Button variant="outline-success" disabled>Coming Soon</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3 text-info">
                  <i className="bi bi-bookmark-heart fs-1"></i>
                </div>
                <Card.Title>Save Favorites</Card.Title>
                <Card.Text>
                  Bookmark your favorite API responses for quick access later.
                </Card.Text>
                <Button variant="outline-info" href="/api">Explore Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* NASA API Basics Section */}
      <Container className="py-5 bg-light">
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-4">
            <h2 className="fw-bold">Basics of NASA API</h2>
            <p className="lead">Understanding the NASA Astronomy Picture of the Day API</p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>API Overview</Card.Title>
                <Card.Text>
                  The NASA APOD API provides access to the Astronomy Picture of the Day, 
                  including high-quality images, videos, and detailed explanations.
                </Card.Text>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Daily updated content</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Historical archive available</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>HD quality media</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>API Endpoints</Accordion.Header>
                <Accordion.Body>
                  <code>https://api.nasa.gov/planetary/apod</code>
                  <ul className="mt-2">
                    <li><strong>date</strong>: YYYY-MM-DD format</li>
                    <li><strong>count</strong>: Number of random images</li>
                    <li><strong>thumbs</strong>: Return thumbnail for videos</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Response Format</Accordion.Header>
                <Accordion.Body>
                  <pre className="bg-dark text-white p-3 rounded">
{`{
  "date": "2023-07-20",
  "explanation": "...",
  "hdurl": "...",
  "media_type": "image",
  "title": "...",
  "url": "..."
}`}
                  </pre>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      {/* CTA Section */}
      <div className="bg-light text-black py-4">  {/* Matching py-4 */}
        <Container className="text-center">
          <h2 className="mb-3">Ready to Explore?</h2>  {/* Reduced mb-4 to mb-3 */}
          <Button variant="primary" size="lg" href="/api" className="px-4 py-2">
            Start with NASA API
          </Button>
        </Container>
      </div>

      <Footer />
    </Container>
  );
};

export default Home;