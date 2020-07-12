import api from '@/service/api';
import store from '@/store';
import { MUTATION_SHOW_ERROR_ALERT } from '@/store/modules/alert/keys';

export const getClients = async () => {
  try {
    const res = await api.get('/clients');
    return res.data;
  } catch (ex) {
    console.log(ex);
    store.commit(MUTATION_SHOW_ERROR_ALERT, `Error loading clients: ${ex.message}`);
    return undefined;
  }
};

export const getClient = async (id) => {
  try {
    const res = await api.get(`/clients/${id}`);
    return res.data;
  } catch (ex) {
    console.log(ex);
    store.commit(MUTATION_SHOW_ERROR_ALERT, `Error loading details for client ${id}: ${ex.message}`);
    return undefined;
  }
};

export const getClientSecret = async (id) => {
  try {
    const res = await api.get(`/clients/${id}/secret`);
    return res.data;
  } catch (ex) {
    console.log(ex);
    store.commit(MUTATION_SHOW_ERROR_ALERT, `Error loading secret for client ${id}: ${ex.message}`);
    return undefined;
  }
};

export const generateGuid = async () => {
  try {
    const res = await api.get('/clients/guid');
    return res.data;
  } catch (ex) {
    console.log(ex);
    store.commit(MUTATION_SHOW_ERROR_ALERT, `Error generating GUID: ${ex.message}`);
    return undefined;
  }
};
