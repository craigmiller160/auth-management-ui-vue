import api from './api';

export const logout = () => api.get('/oauth/logout');

export const getAuthUser = async () => {
  const res = await api.get('/oauth/user');
  return res.data;
};
