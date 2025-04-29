import { Modal, Button } from 'react-bootstrap';

const ImageModal = ({ image, onHide }) => {
  if (!image) return null;

  return (
    <Modal show={!!image} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{image.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img 
          src={image.hdurl || image.url} 
          alt={image.title} 
          className="img-fluid mb-3"
        />
        <p>{image.explanation}</p>
        <p className="text-muted">Date: {image.date}</p>
        {image.copyright && (
          <p className="text-muted">Copyright: {image.copyright}</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;