import React, { useState } from 'react';

const WeightList = ( { weights, updateWeight } ) => {
    
    // State values
    const [editableIndex, setEditableIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    // Handle edit functionality
    const handleEdit = (index) => {
        setEditableIndex(index);
        setEditValue(weights[index]);
    };

    // Handle update functionality
    const handleUpdate = (index) => {
        const formattedValue = parseFloat(editValue).toFixed(2);

        // Input validation
        if (!isNaN(formattedValue) && editValue !== '' ) {
            updateWeight(index, formattedValue);
            setEditableIndex(null);
        } 
        // Error prompt
        else {
            alert('Please enter a valid number');
        }
    };

    return (
        <ul>
            {weights.map((weight, index) => (
                <li key={index}>
                {editableIndex === index ? 
                // Update button
                (
                  <>
                    <input
                      type="number"
                      step="0.01"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button onClick={() => handleUpdate(index)}>Update</button>
                  </>
                ) : 
                // Edit button
                (
                  <>
                    {weight} kg {" "}
                    <button onClick={() => handleEdit(index)}>Edit</button>
                  </>
                )}
              </li>
            ))}
        </ul>
    )
}

export default WeightList;