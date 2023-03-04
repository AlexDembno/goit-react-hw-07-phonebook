import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6401070a0a2a1afebee4fbc5.mockapi.io/contacts',
});

export const getContacts = async () => {
  const response = await instance.get('/');
  return response.data;
};

export const addContacts = async id => {
  const response = await instance.post('/', id);
  return response.data;
};

export const deleteContacts = async id => {
  const response = await instance.delete(`/${id}`);
  return response.data;
};
