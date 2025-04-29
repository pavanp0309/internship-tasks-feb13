import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';
import { Folder, Folder2Open, FileEarmarkCode, FileEarmark } from 'react-bootstrap-icons';
import Footer from '../components/Footer';

const About = () => {
  const technologies = [
    'React', 'Bootstrap', 'NASA API', 'React Router', 
    'JavaScript', 'Vite', 'React-Bootstrap', 'Bootstrap Icons'
  ];

  const folderStructure = [
    {
      name: 'src',
      type: 'folder',
      children: [
        { name: 'components', type: 'folder', children: [
          { name: 'Footer.jsx', type: 'file' },
          { name: 'Navbar.jsx', type: 'file' },
          { name: 'ImageCard.jsx', type: 'file' },
          { name: 'ImageModal.jsx', type: 'file' }
        ]},
        { name: 'pages', type: 'folder', children: [
          { name: 'Home.jsx', type: 'file' },
          { name: 'About.jsx', type: 'file' },
          { name: 'Contact.jsx', type: 'file' },
          { name: 'ApiExplorer.jsx', type: 'file' }
        ]},
        { name: 'services', type: 'folder', children: [
          { name: 'nasaApi.js', type: 'file' }
        ]},
        { name: 'App.jsx', type: 'file' },
        { name: 'main.jsx', type: 'file' }
      ]
    },
    { name: 'public', type: 'folder' },
    { name: 'package.json', type: 'file' }
  ];

  const renderFolder = (item, depth = 0) => {
    const Icon = item.type === 'folder' ? (depth === 0 ? Folder2Open : Folder) : 
                 item.name.endsWith('.jsx') || item.name.endsWith('.js') ? FileEarmarkCode : FileEarmark;
    
    return (
      <div key={item.name} style={{ marginLeft: `${depth * 20}px` }} className="mb-1">
        <Icon className="me-2" />
        <span>{item.name}</span>
        {item.children && (
          <div className="mt-1">
            {item.children.map(child => renderFolder(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <Container className="py-4">
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 text-center">About API Hunting</h1>
          <p className="lead text-center">Your gateway to exploring public APIs</p>
        </Col>
      </Row>

      {/* Mission Section */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-primary">Our Mission</Card.Title>
              <Card.Text>
                API Hunting was created to make public API exploration simple and enjoyable. 
                We provide intuitive interfaces to interact with various APIs without needing 
                to worry about authentication or complex setups.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-primary">Features</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Easy-to-use interface
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Detailed API responses
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Responsive design
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Secure authentication
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Technologies and Folder Structure */}
      <Row className="g-4 mb-4">
        {/* Technologies Column */}
        <Col lg={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="text-primary">Technologies Used</Card.Title>
              <div className="d-flex flex-wrap gap-2 mt-3">
                {technologies.map(tech => (
                  <Badge 
                    key={tech} 
                    bg="secondary" 
                    className="p-2 fs-6"
                    style={{ width: '48%' }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Folder Structure Column */}
        <Col lg={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="text-primary">Project Structure</Card.Title>
              <div className="font-monospace text-muted mt-3">
                {folderStructure.map(item => renderFolder(item))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Footer/>
    </Container>
  );
};

export default About;