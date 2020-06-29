/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import Recipe from './Recipe';

const API_KEY = process.env.REACT_APP_KEY;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const RecipeBoard = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('banana');

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${CLIENT_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="ui container">
      <form className="search-form" onSubmit={getSearch}>
        <label htmlFor="search-bar" className="search-bar">
          <input
            id="search-bar"
            className="search-bar expand shadow"
            type="text"
            placeholder="Type an ingredient"
            label="Type an ingredient"
            value={search}
            onChange={updateSearch}
          />
        </label>
        <button className="search-button shadow" type="submit">Search</button>
      </form>

      <div className="ui container top-spacing">
        <Segment raised>
          <Card.Group>
            {recipes.map(recipe => (
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={Math.trunc(recipe.recipe.calories)}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredientLines}
                link={recipe.recipe.shareAs}
              />
            ))}
          </Card.Group>
        </Segment>
      </div>
    </div>
  );
};

export default RecipeBoard;
