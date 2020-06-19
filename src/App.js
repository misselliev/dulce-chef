import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import WoofHeader from './components/WoofHeader';
import RecipeBoard from './components/RecipeBoard';

const App = () => (
  <div className="App">
    <WoofHeader />
    <SearchForm />
    <RecipeBoard />
  </div>
);

export default App;
