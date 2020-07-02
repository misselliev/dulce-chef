import React from 'react';
import './App.css';
import WoofHeader from './components/WoofHeader';
import RecipeBoard from './components/RecipeBoard';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <WoofHeader />
    <RecipeBoard />
    <Footer />
  </div>
);

export default App;
