import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const registerUser = (userData) => api.post('/register', userData);
export const loginUser = (userData) => api.post('/login', userData);
export const createPrinciple = (principleData) => api.post('/principles', principleData);
export const getPrinciples = () => api.get('/principles');
export const createAction = (actionData) => api.post('/actions', actionData);
export const getActions = () => api.get('/actions');
