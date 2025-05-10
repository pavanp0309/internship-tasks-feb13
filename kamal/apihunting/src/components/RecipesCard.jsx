import React from 'react';
import { Link } from 'react-router-dom';

const RecipesCard = ({recipe}) => {
    const { id,image,name,cuisine,rating,reviewCount,difficulty } = recipe;

  return (
    <div className="card shadow border border-danger">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="text-muted">Cuisine: {cuisine}</p>
        <p><strong>Rating:</strong> ⭐ {rating} ({reviewCount} reviews)</p>
        <p><strong>Difficulty:</strong> {difficulty}</p>
        <Link to={`/api/recipe/${id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
};

export default RecipesCard;