import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Header, Image,
} from 'semantic-ui-react';

const Recipe = ({
  title, calories, image, ingredients, link,
}) => (
  <Card raised color="green" className="shadow">
    <Header as="h1">{title}</Header>
    <Card.Meta>
      Calories:
      {calories}
    </Card.Meta>
    <Image src={image} alt={title} />
    <Card.Header as="h3">Ingredients</Card.Header>
    <ul>
      {ingredients.map(ingredient => (
        <li key={ingredient}>{ ingredient }</li>
      ))}
    </ul>
    <Card.Content>
      <a href={link}>Link to recipe</a>
    </Card.Content>
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
