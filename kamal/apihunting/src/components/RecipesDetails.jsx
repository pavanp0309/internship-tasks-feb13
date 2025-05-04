import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { recipesData } from '../api/recipesApi';

const RecipesDetails = () => {
  const { recipesId } = useParams();
  const recipe = recipesData.recipes.find((item) => item.id === parseInt(recipesId));
  const navigate = useNavigate();
  

  if (!recipe) {
    return <h2 className="text-danger text-center mt-5">Recipe not found!</h2>;
  }

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="row g-0">
          
          {/* Recipe Image on the Left */}
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img 
              src={recipe.image} 
              className="img-fluid rounded" 
              alt={recipe.name} 
              style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'cover' }} 
            />
          </div>
          
          {/* Recipe Details on the Right */}
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{recipe.name}</h3>
              <p className="text-muted">Cuisine: {recipe.cuisine}</p>
              <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
              <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} min</p>
              <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} min</p>
              <p><strong>Servings:</strong> {recipe.servings}</p>
              <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing} kcal</p>
              
              {/* Ingredients */}
              <h5>Ingredients</h5>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              
              {/* Instructions */}
              <h5>Instructions</h5>
              <ol>
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
  
              {/* Buttons */}
              <div className="d-flex gap-3 mt-3">
                <button className="btn btn-success">Save Recipe</button>
                <button onClick={() => navigate('/api')} className="btn btn-primary">Go Back</button>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  );
}  

export default RecipesDetails;