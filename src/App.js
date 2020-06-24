import React from 'react';
import './App.css';
import WoofHeader from './components/WoofHeader';
import RecipeBoard from './components/RecipeBoard';

const App = () => (
  <div className="App">
    <WoofHeader />
    <RecipeBoard />
  </div>
);

export default App;
