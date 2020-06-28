import api from './api';

// TODO all uses of these services need error handling

export const getUsers = async () => {
  const res = await api.get('/basic/users');
  return res.data;
};

export const getClients = async () => {
  const res = await api.get('/basic/clients');
  return res.data;
};
