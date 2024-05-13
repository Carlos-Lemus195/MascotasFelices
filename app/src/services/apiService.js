// apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://demu.codersatelier.com/carlos/api/';

const apiService = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Timeout after 10 seconds
});

export const getBooks = async () => {
  try {
    const response = await apiService.get('/duenos');
    console.log('Response:', response);
    return response;
  } catch (error) {
    console.log('Error:', error);
    throw new Error('Failed to fetch duenos data');
  }
};

export const addNewBook = async bookData => {
  try {
    const response = await apiService.post('/duenos/add', bookData);
    return response;
  } catch (error) {
    console.log('Error:', error);
    throw new Error('Failed to add new book');
  }
};
// Other API methods can be defined here
