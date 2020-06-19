import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import Recipe from './Recipe';

const RecipeBoard = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch('https://api.edamam.com/search?q=chicken&app_id=e0877f2c&app_key=b32db055141f041f1325da32b330cf4e');
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
