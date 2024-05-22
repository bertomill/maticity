// src/components/SuggestedActions.js
import React from 'react';

const SuggestedActions = ({ actions }) => {
  return (
    <div>
      <h2>Suggested Daily Actions</h2>
      <ul>
        {actions.map((action, index) => (
          <li key={index}>{action}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestedActions;
