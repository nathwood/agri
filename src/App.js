import './App.css';
import React, { useState, useEffect } from 'react';
import WeightInput from './components/WeightInput';
import WeightList from './components/WeightList';

function App() {

  // State variables
  const [weights, setWeights] = useState([]);

  // Local storage
  useEffect( () => {
    const savedWeights = JSON.parse(localStorage.getItem('weights')) || [];
    setWeights(savedWeights);
  }, []);

  // Function to add weight
  const addWeight = (newWeight) => {
    const updatedWeights = [...weights, newWeight];
    setWeights(updatedWeights);
    localStorage.setItem('weights', JSON.stringify(updatedWeights));
  }

  // Function to update weight items
  const updateWeight = (index, newWeight) => {
    const updatedWeights = weights.map((weight, i) => (i === index ? newWeight : weight));
    setWeights(updatedWeights);
    localStorage.setItem('weights', JSON.stringify(updatedWeights));
  };

  return (
    <div className="App">

      <h1>AgriSpark Weight Tracker</h1>
      <h2>User: Ahmad</h2>
      <WeightInput addWeight = {addWeight} />
      <WeightList weights = {weights} updateWeight = {updateWeight} />

    </div>
  );
}

export default App;