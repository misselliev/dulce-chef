import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Header, Image,
} from 'semantic-ui-react';

const Recipe = ({
  title, calories, image, ingredients, link,
}) => (
  <Card raised color="violet">
    <Header as="h1">{title}</Header>
    <Header as="h3">
      Calories:
      {calories}
    </Header>
    <Image src={image} alt={title} />
    <Header as="h3">Ingredients</Header>
    <ul>
      {ingredients.map(ingredient => (
        <li key={ingredient}>{ ingredient }</li>
      ))}
    </ul>
    <a href={link}>Link to recipe</a>
  </Card>
);

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  ingredients: PropTypes.instanceOf(Array).isRequired,
  link: PropTypes.string.isRequired,
};

export default Recipe;
