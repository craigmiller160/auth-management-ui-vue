import api from '@/service/api';

export const getClients = () => api.get({
  uri: '/clients',
  errorMsg: 'Error loading clients'
});

export const getClient = (id) => api.get({
  uri: `/clients/${id}`,
  errorMsg: `Error loading details for client ${id}`
});

export const generateGuid = () => api.get({
  uri: '/clients/guid',
  errorMsg: 'Error generating GUID'
});

export const updateClient = (id, client) => api.put({
  uri: `/clients/${id}`,
  body: client,
  errorMsg: `Error updating client ${id}`
});

export const createClient = (client) => api.post({
  uri: '/clients',
  body: client,
  errorMsg: 'Error creating client'
});

export const deleteClient = (id) => api.delete({
  uri: `/clients/${id}`,
  errorMsg: 'Error deleting client'
});
