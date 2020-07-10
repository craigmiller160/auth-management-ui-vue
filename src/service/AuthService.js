/* eslint-disable import/prefer-default-export */
import api from './api';

export const logout = () => api.get('/oauth/authcode/logout');

export const getAuthUser = async () => {
  const res = await api.get('/oauth/auth');
  return res.data;
};
