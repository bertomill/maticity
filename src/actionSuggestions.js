// src/actionSuggestions.js
export const suggestActions = (principles) => {
    // Simulate AI suggestions (replace this with actual AI integration)
    const actions = {
      Health: ['Go for a 30-minute walk', 'Drink 8 glasses of water'],
      Growth: ['Read a book for 30 minutes', 'Learn a new skill'],
      Family: ['Spend quality time with family', 'Call a loved one'],
    };
  
    const principlesArray = principles.split(',').map(principle => principle.trim());
    let suggestedActions = [];
  
    principlesArray.forEach(principle => {
      if (actions[principle]) {
        suggestedActions = [...suggestedActions, ...actions[principle]];
      }
    });
  
    return suggestedActions;
  };
  