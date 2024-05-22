// src/pages/Dashboard.js
import React, { useState } from 'react';
import PrincipleForm from '../components/PrincipleForm';
import SuggestedActions from '../components/SuggestedActions';
import { suggestActions } from '../actionSuggestions'; // Ensure this path is correct

const Dashboard = () => {
  const [actions, setActions] = useState([]);

  const handlePrincipleSubmit = (principle) => {
    const suggestedActions = suggestActions(principle);
    setActions(suggestedActions);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <PrincipleForm onSubmit={handlePrincipleSubmit} />
      <SuggestedActions actions={actions} />
    </div>
  );
};

export default Dashboard;
