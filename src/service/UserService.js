import api from '@/service/api';

export const getUsers = () => api.get({
  uri: '/users',
  errorMsg: 'Error loading users'
});

export const getUser = (id) => api.get({
  uri: `/users/${id}`,
  errorMsg: `Error loading details for user ${id}`
});

export const updateUser = (id, user) => api.put({
  uri: `/users/${id}`,
  body: user,
  errorMsg: `Error updating user ${id}`
});

export const createUser = (user) => api.post({
  uri: '/users',
  body: user,
  errorMsg: 'Error creating user'
});

export const deleteUser = (id) => api.delete({
  uri: `/users/${id}`,
  errorMsg: `Error deleting user ${id}`
});
