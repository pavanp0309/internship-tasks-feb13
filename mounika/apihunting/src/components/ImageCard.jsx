const ImageCard = ({ image, onClick }) => {
    return (
      <div className="card h-100 shadow-sm" onClick={onClick} style={{ cursor: 'pointer' }}>
        <img 
          src={image.url} 
          alt={image.title} 
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{image.title}</h5>
          <p className="card-text text-muted">{image.date}</p>
        </div>
      </div>
    );
  };
  
  export default ImageCard;