// src/api/realSuggestions.js
import axios from 'axios';

export const getRealSuggestions = async (principles) => {
  const response = await axios.post('YOUR_API_ENDPOINT', { principles });
  return response.data.suggestions;
};
