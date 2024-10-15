import './App.css';
import React, { useState, useEffect } from 'react';
import WeightInput from './components/WeightInput';
import WeightList from './components/WeightList';

function App() {

  // State variables
  const [weights, setWeights] = useState([]);
  const [total, setTotal] = useState(0);

  // Local storage
  useEffect( () => {
    const savedWeights = JSON.parse(localStorage.getItem('weights')) || [];
    setWeights(savedWeights);
    calculateTotal(savedWeights);
  }, []);

  // Function to calculate total
  const calculateTotal = (weightList) => {
    const sum = weightList.reduce((acc, curr) => acc + parseFloat(curr), 0).toFixed(2);
    setTotal(sum);
  };

  // Function to add weight
  const addWeight = (newWeight) => {
    const updatedWeights = [...weights, newWeight];
    setWeights(updatedWeights);
    localStorage.setItem('weights', JSON.stringify(updatedWeights));
    calculateTotal(updatedWeights);
  }

  // Function to update weight items
  const updateWeight = (index, newWeight) => {
    const updatedWeights = weights.map((weight, i) => (i === index ? newWeight : weight));
    setWeights(updatedWeights);
    localStorage.setItem('weights', JSON.stringify(updatedWeights));
    calculateTotal(updatedWeights);
  };

  // Function to delete weight items
  const deleteWeight = (index) => {
    const updatedWeights = weights.filter((_, i) => i !== index);
    setWeights(updatedWeights);
    localStorage.setItem('weights', JSON.stringify(updatedWeights));
    calculateTotal(updatedWeights);
  };

  // Function to clear entire list
  const clearAll = () => {
    setWeights([]);
    localStorage.removeItem('weights');
    setTotal(0);
  }

  return (
    <div className="App">
      <h1>AgriSpark Weight Tracker</h1>
      <h3>User: Ahmad</h3>
      <WeightInput addWeight = {addWeight} />
      <WeightList 
        weights = {weights} 
        updateWeight = {updateWeight} 
        deleteWeight = {deleteWeight}
        clearAll = {clearAll}
      />
      <h2>Total: {total} kg</h2>
    </div>
  );
}

export default App;