import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import Recipe from './Recipe';

const API_KEY = process.env.REACT_APP_KEY;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const RecipeBoard = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${CLIENT_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="ui container top-spacing">
      <Card.Group itemsPerRow={3}>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.id}
            title={recipe.recipe.label}
            calories={Math.trunc(recipe.recipe.calories)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            link={recipe.recipe.shareAs}
          />
        ))}
      </Card.Group>
    </div>
  );
};

export default RecipeBoard;
