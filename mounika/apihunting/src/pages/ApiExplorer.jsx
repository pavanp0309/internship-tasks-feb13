import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import LoadingSpinner from '../components/Spinner';
import ImageCard from '../components/ImageCard';
import ImageModal from '../components/ImageModal';
import { fetchNASAData } from '../services/nasaApi';
import Footer from '../components/Footer';
const ApiExplorer = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchNASAData();
        setImages(data);
        setFilteredImages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredImages(images);
    } else {
      const filtered = images.filter(image => 
        image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.explanation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.date.includes(searchTerm)
      );
      setFilteredImages(filtered);
    }
  }, [searchTerm, images]);

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          <Alert.Heading>Error fetching data</Alert.Heading>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>Go Home</button>
        </Alert>
        
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">NASA Astronomy Pictures</h2>
      
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search images..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredImages.map((image) => (
              <Col key={image.date}>
                <ImageCard 
                  image={image} 
                  onClick={() => setSelectedImage(image)} 
                />
              </Col>
            ))}
          </Row>

          <ImageModal 
            image={selectedImage} 
            onHide={() => setSelectedImage(null)} 
          />
        </>
      )}
      <Footer/>
    </Container>
  );
};

export default ApiExplorer;