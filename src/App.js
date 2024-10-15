import './App.css';
import React, { useState, useEffect } from 'react';
import WeightInput from './components/WeightInput';

function App() {

  // State variables
  const [weights, setWeights] = useState([]);

  // Function to add weight
  const addWeight = (newWeight) => {
    const updatedWeights = [...weights, newWeight];
    setWeights(updatedWeights);
  }

  return (
    <div className="App">

      <h1>AgriSpark Weight Tracker</h1>
      <WeightInput addWeight = {addWeight} />

    </div>
  );
}

export default App;