import api from './api';

export const getUsers = async () => { // eslint-disable-line
  const res = await api.get('/basic/users');
  return res.data;
};
