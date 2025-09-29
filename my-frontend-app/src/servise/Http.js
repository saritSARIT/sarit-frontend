import axios from 'axios';

const apiUrl = 'http://localhost:3000';

export const getBooks = async () => {
  try {
    const response = await axios.get(`${apiUrl}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const addBook = async (book) => {
  try {
    const response = await axios.post(`${apiUrl}/books`, book);
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
};

export const login = async (name, password) => {
  const response = await axios.post(`${apiUrl}/login`, { name, password });
  const { token } = response.data;
  localStorage.setItem("token", token); 
  return token;
};