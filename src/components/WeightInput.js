import React, { useState } from 'react';

const WeightInput = ({ addWeight }) => {
    const [inputValue, setInputValue] = useState('');

    // Handle submit functionality
    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedValue = parseFloat(inputValue).toFixed(2);

        // Input validation
        if (!isNaN(formattedValue) && inputValue !== '') {
            addWeight(formattedValue);
            setInputValue('');
        } 
        // Error prompt
        else {
            alert('Please enter a valid number');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type = "number"
                step = "0.01"
                value = {inputValue}
                onChange = {(e) => setInputValue(e.target.value)}
                placeholder = "Enter weight (e.g. 50.12)"
            />
            <button type = "submit">
                Add
            </button>
        </form>
    )
}

export default WeightInput;