import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({
  title, calories, image, ingredients, link,
}) => (
  <div>
    <h1>{title}</h1>
    <p>
      Calories:
      {calories}
    </p>
    <img src={image} alt={title} />
    <ul>
      Ingredients:
      {ingredients.map(ingredient => (
        <li key>{ ingredient.text }</li>
      ))}
    </ul>
    <a href={link}>Link to recipe</a>
  </div>
);

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf.isRequired,
  link: PropTypes.string.isRequired,
};

export default Recipe;
