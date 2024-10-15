import './App.css';
import React, { useState, useEffect } from 'react';
import WeightInput from './components/WeightInput';

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

  return (
    <div className="App">

      <h1>AgriSpark Weight Tracker</h1>
      <h2>User: Ahmad</h2>
      <WeightInput addWeight = {addWeight} />

    </div>
  );
}

export default App;