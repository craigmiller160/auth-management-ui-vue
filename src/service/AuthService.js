import api from '@/service/api';

export const logout = () => api.get({
  uri: '/oauth/logout'
});

export const getAuthUser = () => api.get({
  uri: '/oauth/user',
  errorMsg: 'Error getting Auth User',
  suppressError: (ex) => ex?.response?.status === 401
});
