import api from './api';

export const getUsers = async () => {
  const res = await api.get('/basic/users');
  return res.data;
};

export const getClients = async () => {
  const res = await api.get('/basic/clients');
  return res.data;
};

export const getAuthUser = async () => {
  const res = await api.get('/basic/auth');
  return res.data;
};
