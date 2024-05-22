// src/components/PrincipleForm.js
import React, { useState } from 'react';

const PrincipleForm = ({ onSubmit }) => {
  const [principle, setPrinciple] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      onSubmit(principle);
      setPrinciple(''); // Clear the input field after submission
    } catch (error) {
      console.error(error);
      // handle error, e.g., show an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={principle}
        onChange={(e) => setPrinciple(e.target.value)}
        placeholder="Enter your principle"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PrincipleForm;
